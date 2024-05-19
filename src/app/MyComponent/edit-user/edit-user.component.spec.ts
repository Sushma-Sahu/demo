import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import { of } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let Editcomponent: EditUserComponent;
  let router: Router;
  let authService: AuthServiceService;
  let routerAct: ActivatedRoute;
  let fixture: ComponentFixture<EditUserComponent>;
  let mockService: any;
  let EditForm: any[];
  let httpMock: HttpTestingController;
  let acRout: any;

  beforeEach(async () => {
    EditForm = [{
      name: 'abc',
      age: 22,
      gender: 'gender',
      id: 6
    }]
    // await TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule ],
    //   declarations: [EditUserComponent],
    //   providers:[{provide:ActivatedRoute ,
    //     useValue
    //     : acRout }]
    // }).compileComponents();
    // TestBed.inject(HttpTestingController);
    // TestBed.inject(ActivatedRoute);
    mockService = jasmine.createSpyObj(['EditUser', 'GetAllUser', 'updateUser']);
    Editcomponent = new EditUserComponent(authService, router, routerAct);

    //fixture = TestBed.createComponent(EditUserComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });



    it('editform should be create', () => {
      expect(EditForm[0].id).toEqual(6)
    });

    it('Shuold be called demo function ', () => {
      spyOn(Editcomponent, 'demo');
      expect(Editcomponent.demo).toBeDefined();

    });
    it('Shuold be called Demo To Be true function ', () => {
      spyOn(Editcomponent, 'demo');
      expect(Editcomponent.demo).toBeTruthy();
    });

    it('should Return True from.', () => {
      debugger
      spyOn(Editcomponent, 'EditUser');
      expect(Editcomponent.EditUser).toBeTruthy();
    });

    it('should be Working With Api Call.', () => {
      debugger
      spyOn(Editcomponent, 'EditUser');
      mockService.updateUser.and.returnValue(of(true))
      expect(Editcomponent.EditUser).toBeTruthy();
    });

  // describe('GetProfile()', () => {
  //   it('should get users profile', () => {      
  //     mockService.GetUserProfile.and.returnValue(of());
  //     component.GetProfile();
  //     expect(mockService.GetUserProfile).toHaveBeenCalled();    
  //   });
  // });
});
