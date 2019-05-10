
import {config} from "../../wdio.conf";
import {expect} from "chai";
import TodoPage from "../../pageObjects/TodoPage";
describe('My Vue.js Example Application', () => {
    beforeEach(()=>{
        TodoPage.open(config.baseUrl);
        TodoPage.addNewTodo(`Note one`);
        TodoPage.addNewTodo(`Note two`);
        TodoPage.addNewTodo(`Note three`);
        TodoPage.completeTodoAtRow(2);
    })
     
    it('should be able to complete ToDos', () => {
        expect(TodoPage.remainingTodoCount()).equal("2 items left");
    })
}) 
    
