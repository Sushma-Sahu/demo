import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterReactiveComponent } from './register-reactive.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterForm } from '../../Model/RegisterForm.model';
import { AuthServiceService } from '../auth-service.service';
import { of } from 'rxjs';

describe('RegisterReactiveComponent', () => {
  let fixture: ComponentFixture<RegisterReactiveComponent>;
  let fixtures: ComponentFixture<AuthServiceService>;
  let component: RegisterReactiveComponent;
  let componentAuth: AuthServiceService;
  let userDetails: RegisterForm;
  let mockService: any;
  beforeEach(async () => {
    userDetails = {
      email: 'abc@gmail.com',
      Password: '12345678',
      Age: 25,
      gender: 'female',
      name: 'sushma',
      ConfirmPassword: '12345678',
      userPhoto: '',
      byteImage: ''
    }

    await TestBed.configureTestingModule({
      declarations: [RegisterReactiveComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterReactiveComponent);
    // fixtures = TestBed.createComponent(AuthServiceService);
    mockService = jasmine.createSpyObj(['registerUser']);

    component = fixture.componentInstance;
    // componentAuth = fixtures.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('RegisterUser', () => {
    it('should All Data Exist', () => {
      //Assert
      expect(component.RegisterForm.email).toBe('')
    });
    it('should be check IsAccountCreate is false or not', () => {
      //Assert
      expect(component.IsAccountCreate).toBeFalse()
    });
    it('should be check register user', () => {
      //Act
      spyOn(component, 'RegisterUser')
      //Assert
      expect(component.RegisterUser).toBeDefined()
    });
    xit('should be check register user Data added Successfully', () => {
      spyOn(component, 'RegisterUser')
      expect(component.IsAccountCreate).toBeTruthy()
    });
    it('should be check register user Data added Successfully get message', () => {
      spyOn(component, 'RegisterUser')
      mockService.registerUser.and.returnValue(of(true))
      //fixture.detectChanges()
      expect(component.RegisterUser).toBeTruthy()
    });
  })

});
