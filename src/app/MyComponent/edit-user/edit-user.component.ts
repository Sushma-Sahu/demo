import { Component } from '@angular/core';
import { EditForm } from '../../Model/RegisterForm.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  display: String = '';
  IsAccountCreate: Boolean = false;
  genderValue = ''
  uderId: any
  phots: any
  isdisabled: boolean = true;

  EditForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(''),
    gender: new FormControl('genderValue'),
    id: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl('')

  })
  EditForm1: EditForm = {
    name: '',
    age: 0,
    gender: '',
    email: '',
    photo: '',
    byteImage :''

  }
  ProfileDP: string = '';
  constructor(private authService: AuthServiceService, private router: Router, private routerAct: ActivatedRoute) { }
  ngOnInit() {
    debugger
    this.uderId = this.routerAct.snapshot.paramMap.get('id');
    this.authService.GetUserById(this.uderId).subscribe(res => {
      debugger
      if (res.userPhoto != null) {
        this.phots = 'data:image/*;base64,' + res.byteImage;
      } else {
        this.ProfileDP = "assets/Image/noPhotoAvailable.jpg"
      }
       
      console.log(res)
      this.EditForm1 = res;
      console.log(this.EditForm1)
    })
    this.isdisabled = true;
  }
  EditUser(): Boolean {
    debugger
    console.log("user id ", this.uderId)
    this.EditForm.value.id = this.uderId;
    console.log("editUser method ", this.EditForm.value)
    this.authService.updateUser(this.EditForm.value).subscribe(res => {
      //this.router.navigateByUrl('/Display-Data');
      window.location.href = '/Display-Data';
      return true
    })
    console.log(this.EditForm.value)
    return false
  }

  demo() {
    return true
  }
  get name() {
    return this.EditForm.get('name')
  }
  get gender() {
    return this.EditForm.get('gender')
  }

}
