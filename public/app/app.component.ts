import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  //refernces specific component in the index.html file <ng-app>
  selector: 'my-app',
  template: `<h1>NodeTodo</h1>
  <ul>
      <li *ngFor="let todo of todos">
        {{todo.todo}} - {{todo.isDone}}
      </li>
    </ul>`,
  providers: [ TodoService ]
})
export class AppComponent  {
  todos: Todo[];
  constructor(private todoService: TodoService) { }
  getTodos(): void {
    //calls service-array of "todos" that came back from TodoService
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
  //init goes and gets todo when opened
  ngOnInit(): void {
    this.getTodos();
  }
}
