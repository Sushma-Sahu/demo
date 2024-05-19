import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem("todos") || "null"
    console.log("locslItem->", this.localItem);
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      console.log("this is else block", this.localItem)
      this.todos = JSON.parse(this.localItem)
    }

  }
  ngOnInit(): void {

  }
  deleteTodo(todo: Todo): Boolean {
    if (todo != null) {
      console.log("this is delete method");
      console.log(todo);
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
      localStorage.setItem("todos", JSON.stringify(this.todos))
      return true;
    }
    return false;
  }
  addTodo(todo: Todo) {
    console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  toggelTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
