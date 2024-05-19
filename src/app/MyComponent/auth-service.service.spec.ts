import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { AuthServiceService } from './auth-service.service';
import { Observable, of } from 'rxjs';

describe('AuthServiceService', () => {
  let service: AuthServiceService;
  let uid = 5;
  let httpMock: HttpTestingController;
  let mockDataService: { DELETE: { and: { returnValue: (arg0: Observable<boolean>) => void; }; }; };
  let EditForm = {
    name: 'sushma sahu',
    age: 23,
    gender: 'Female',
    id: 5
  }
  let LoginForm = {
    email: "Sushmasahu@gmail.com",
    Password: '12345678'
  }
  let RegisterForm = {
    name: 'Sushma Sahu',
    email: 'sushmaSahu@gmail.com',
    ConfirmPassword: '12345678',
    Age: 25,
    Password: '12345678',
    gender: 'Female',
    userPhoto: '',
    byteImage: ''
  }
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(AuthServiceService);
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthServiceService],
    });
    service = TestBed.inject(AuthServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  //service = TestBed.inject(AuthServiceService);
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  mockDataService = jasmine.createSpyObj(['delete']);


  it('Should return corrent value DeleteDataById', () => {
    //Arrange
    let request;
    let baseUrl = 'https://localhost:44373/api/Register/' + uid;
    // Act
    service.DeleteDataById(uid).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    request = httpMock.expectOne(baseUrl);
    // Assert
    expect(request.request.method).toBe('DELETE');
    request.flush({});
  });
  // fit('Should return corrent value DeleteDataById by new Approch', () => {
  //   //Arrange
  //   let request;
  //   //let baseUrl = 'https://localhost:44373/api/Register/' + uid;
  //   // Act
  //   // service.DeleteDataById(uid).subscribe((response) => {
  //   //   expect(response).toBeTruthy();
  //   // });
  //   // request = httpMock.expectOne(baseUrl);
  //   mockDataService.DELETE.and.returnValue(of(true));
  //   // Assert
  //   expect(request.request.method).toBe('DELETE');
  //   request.flush({});
  // });

  //method to get data...
  it('should send request to GetUserById by ID', () => {
    //Arrange
    let request;
    let baseUrl = 'https://localhost:44373/api/Register/' + uid;
    //Act
    service.GetUserById(uid).subscribe((response) => {
      console.log(response)
      expect(response).toBeTruthy();
    });
    request = httpMock.expectOne(baseUrl);
    //Assert
    expect(request.request.method).toBe('GET');
    request.flush({});
  });
  it('should send request to GetAllData', () => {
    //Arrange
    let request;
    let baseUrl = 'https://localhost:44373/api/Register/';
    //Act
    service.GetAllData().subscribe((response) => {
      expect(response).toBeTruthy();
    });
    request = httpMock.expectOne(baseUrl);
    //Assert
    expect(request.request.method).toBe('GET');
    request.flush({});
  });
  it('should send request to updateUser', () => {
    //Arrange
    let request;
    let baseUrl = 'https://localhost:44373/api/Register/UpdateUser';
    //Act
    service.updateUser(EditForm).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    request = httpMock.expectOne(baseUrl);
    //Assert
    expect(request.request.method).toBe('PUT');
    request.flush({});
  });
  it('should send request to Login', () => {
    //Arrange
    let request;
    let baseUrl = 'https://localhost:44373/api/Register/LoginUser';
    //Act
    service.LoginUser(LoginForm).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    request = httpMock.expectOne(baseUrl);
    //Assert
    expect(request.request.method).toBe('POST');
    request.flush({});
  });
  it('should send request to Register', () => {
    //Arrange
    let request;
    let baseUrl = 'https://localhost:44373/api/Register/';
    //Act
    service.registerUser(RegisterForm).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    request = httpMock.expectOne(baseUrl);
    //Assert
    expect(request.request.method).toBe('POST');
    request.flush({});
  });
});



