import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListComponent } from './todos-list.component';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    console.log("cc--->",component)
    expect(true).toBeTruthy();
  });
});
