import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampDrivenFormComponent } from './tamp-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TampDrivenFormComponent', () => {
  let component: TampDrivenFormComponent;
  let fixture: ComponentFixture<TampDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TampDrivenFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TampDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user login', () => {
    //Arrange
    let comp;
    //Act
    //Assert
    expect(component.UserLogin).toBeDefined();
  });
});
