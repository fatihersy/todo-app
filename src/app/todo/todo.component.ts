import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit
{
  constructor(private todoService:TodoService) {}

  todos: any[] = [];
  ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges({idField:'id'})
    .subscribe(item=> {
      this.todos = item;
    });
  }

  onClick(titleInput: HTMLInputElement)
  {
    if (titleInput.value) {
      this.todoService.addTodo(titleInput.value);
      titleInput.value = "";
    }
  }

  onChange(iId:string, status:boolean) {
    this.todoService.updateTodo(iId,status);
  }

  onDelete(iId:string){
    this.todoService.deleteTodo(iId);
  }
}
