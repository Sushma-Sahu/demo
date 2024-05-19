import { Component, OnInit, Input , EventEmitter , Output} from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent implements OnInit {
 @Input() todo!: Todo;
 @Input() i!: number;
 @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
 @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
constructor(){ }

ngOnInit(): void {
}

onClick(todo: Todo){
  this.todoDelete.emit(todo);
  // console.log(todo);
  console.log("onclick has been triggred")
}
onCheckbocClick(todo:Todo){
  this.todoCheckBox.emit(todo);
}
}
