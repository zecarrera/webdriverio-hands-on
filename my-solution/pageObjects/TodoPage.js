import Page from './Page';

class TodoPage extends Page {

    get newTodoInput() {
        return $("//input[@class='new-todo']");
    }
    get toggleTodoCompleteIcons() {
        return $$("//li[@class='todo']//div//input");
    }
    
    remainingTodoCount() {
        return $("//footer/span[@class='todo-count']").getText();
    }

    addNewTodo(textInput) {
        this.newTodoInput.waitForDisplayed(500);
        this.newTodoInput.setValue(textInput);
        browser.keys("Enter");
    }

    completeTodoAtRow(rowNumber){
        this.toggleTodoCompleteIcons[rowNumber-1].click();
    }
}

export default new TodoPage();