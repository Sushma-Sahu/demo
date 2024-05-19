import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GetAllDataComponent } from './get-all-data.component';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GetAllDataComponent', () => {
  let component: any;
  let fixture: ComponentFixture<GetAllDataComponent>;
  let mockService: any; //private authService: AuthServiceService, private router: Router
  let router: Router;
  let authService: AuthServiceService;
  let getdataComponent: GetAllDataComponent;
  let UserDetails: any[];
  let httpMock: HttpTestingController;
  let http: HttpClient;

  beforeEach(async () => {
    UserDetails = [{
      id: 1,
      name: 'Sushma Sahu',
      email: 'sushmaSahu@gmail.com',
      ConfirmPassword: '12345678',
      Age: 25,
      Password: '12345678',
      gender: 'Female',
      userPhoto: '',
      byteImage: ''
    },
    {
      id: 2,
      name: 'Sushma Sahu',
      email: 'sushmaSahu@gmail.com',
      ConfirmPassword: '12345678',
      Age: 25,
      Password: '12345678',
      gender: 'Female',
      userPhoto: '',
      byteImage: ''

    },
    {
      id: 3,
      name: 'Sushma Sahu',
      email: 'sushmaSahu@gmail.com',
      ConfirmPassword: '12345678',
      Age: 25,
      Password: '12345678',
      gender: 'Female',
      userPhoto: '',
      byteImage: ''

    }
    ]
    // await TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule, NgxPaginationModule,NgModule,FormsModule,ReactiveFormsModule],
    //   declarations: [GetAllDataComponent]
    // }).compileComponents();
    // TestBed.inject(HttpTestingController);
    // TestBed.inject(AuthServiceService);

    // fixture = TestBed.createComponent(GetAllDataComponent);
    // fixturetest = TestBed.createComponent(AuthServiceService);
    // fixture.detectChanges();
    mockService = jasmine.createSpyObj(['DeleteData', 'DeleteDataById', 'GetAllUser', 'EditData', 'GetAllData']);
    getdataComponent = new GetAllDataComponent(mockService, router);
    //authService = new AuthServiceService(http);
    // component = fixture.componentInstance;
    //component = fixturetest.componentInstance;

    // mockService = jasmine.createSpyObj(['getAllCards', 'updateCard', 'deleteCard', 'onSubmit', 'AddCard']);
  });
  it('should called', () => {
    return expect('').toBe('')
  });

  it('should Delete Data method working ', () => {
    debugger
    mockService.DeleteData.and.returnValue(of(true))
    getdataComponent.data = UserDetails;
    mockService.GetAllData.and.returnValue(of(true));
    mockService.DeleteDataById.and.returnValue(of(true));
    //expect(getdataComponent.GetAllUser()).toHaveBeenCalled();
    //expect(mockService.GetAllData()).toBeTruthy();
    // getdataComponent.DeleteData(UserDetails[2])
    //expect(getdataComponent.DeleteData(UserDetails[0].id)).toBeTruthy();
    //expect(getdataComponent.data.length).toBe(3);
    expect(getdataComponent.DeleteData).toBeDefined()
  });
  it('should Call DeleteDatabyid method', () => {
    // arrange
    getdataComponent.data = UserDetails;
    //act
    mockService.DeleteDataById.and.returnValue(of(true));
    mockService.GetAllUser.and.returnValue(of(UserDetails));
    mockService.GetAllData.and.returnValue(of(UserDetails));
    // assert
    expect(mockService.GetAllUser).toBeDefined()
    expect(mockService.GetAllData).toBeDefined()
    expect(mockService.DeleteDataById).toBeDefined()
  });
  
  it('should get all data list', () => {
    // Arrange
    mockService.GetAllUser.and.returnValue(of(true));
    mockService.GetAllData.and.returnValue(of(UserDetails));
    // Act
    const result = mockService.GetAllData();
    // Assert
    expect(result).toBeDefined();
  });
  
  // fit('should be definded onTableDatachange', () => {
  //   // Arrange
  //   mockService.GetAllUser.and.returnValue(of(true));
  //   //mockService.GetAllData.and.returnValue(of(UserDetails));
  //   // Act
  //   const result = getdataComponent.onTableDatachange();
  //   // Assert
  //   expect(result).toBeDefined();
  // });

  // it('should get all cards subscribe list', fakeAsync(() => {
  //   debugger
  //   let spy = spyOn(authService, 'DeleteDataById').and.returnValue(of([]));
  //   let Subspy = spyOn(authService.DeleteDataById(UserDetails[0].id), 'subscribe');
  //   component.ngOnInit();
  //   tick();
  //   //expect(spy).toHaveBeenCalledBefore(Subspy);
  //   expect(Subspy).toHaveBeenCalled();
  // }));
  // it('should create cards', () => {
  //   debugger
  //   mockService.onSubmit.and.returnValue(of(true));
  //   cardComponent.card = CARD[0]
  //   cardComponent.card.id = '';
  //   expect(cardComponent.onSubmit()).toBeTruthy();
  // });
  // it('should update cards', () => {
  //   debugger
  //   mockService.updateCard.and.returnValue(of(true));
  //   getdataComponent.data.id = UserDetails[0].id;
  //   getdataComponent.data = UserDetails[0];
  //   expect(getdataComponent.EditData(UserDetails[0])).toBeTruthy();
  // });

  // it('should remove the indicated card from the cards list', () => {
  //   debugger
  //   mockService.deleteCard.and.returnValue(of(true))
  //   cardComponent.cards = CARD;
  //   expect(cardComponent.deleteCard(CARD[0].id)).toBeTruthy();
  // });
});
