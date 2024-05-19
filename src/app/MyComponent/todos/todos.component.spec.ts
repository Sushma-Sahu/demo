import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { Todo } from '../../Todo';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let todo: Todo;
  beforeEach(async () => {
    todo = {
      active: true,
      desc: 'this is demo todo',
      sno: 1,
      title: 'titel demo'
    }
    // await TestBed.configureTestingModule({
    //   declarations: [TodosComponent]
    // })
    // .compileComponents();

    // fixture = TestBed.createComponent(TodosComponent);
    // component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should be create deleteTodo', () => {
    //Arrange
    let comp;
    //Act
    comp = new TodosComponent();
    //Assert
    expect(comp.deleteTodo).toBeDefined();
  });
  xit('delete todo should be return true', () => {
    //Arrange
    let comp;
    //Act
    comp = new TodosComponent();
    //Assert
    expect(comp.deleteTodo(todo)).toBeTrue();
  });
  it('should be create addTodo', () => {
    //Arrange
    let comp;
    //Act
    comp = new TodosComponent();
    //Assert
    expect(comp.addTodo).toBeDefined();
  });
  xit('should be create addTodo return true', () => {
    //Arrange
    let comp;
    let spyCall;
    //Act
    comp = new TodosComponent();
    spyCall = spyOn(comp, 'addTodo')
    //Assert
    expect(spyCall).toBeTrue();
  });
  it('should be create toggelTodo', () => {
    //Arrange
    let comp;
    //Act
    comp = new TodosComponent();
    //Assert
    expect(comp.toggelTodo).toBeDefined();
  });

});
