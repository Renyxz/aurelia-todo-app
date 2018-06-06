import { Todo } from './todo';

export class App {

  constructor() {
  
    this.title = 'TO-DO LIST';
    this.todoList = [];
    this.todoEntry = '';
    this.message = '';

  }

  addTodo() {

    const entry = this.todoEntry;
    
    if(entry.length < 1 || entry.trim() === '') {

      this.message = 'Please enter something :)';

      setTimeout( () => {
        this.message = '';
      }, 3000);

      this.todoEntry = '';
      return;
    
    } else if (entry.length > 50) {
      
      this.message = 'Please enter something shorter than 50 characters :)';
      
      setTimeout( () => {
        this.message = '';
      }, 3000);

      this.todoEntry = '';      
      return;

    }

    this.todoList.push(new Todo(this.todoEntry));
    this.todoEntry = '';

  }


  removeTodo(todo) {
    
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);

  }

}
