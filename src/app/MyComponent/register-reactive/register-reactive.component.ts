import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthServiceService } from '../auth-service.service';
import { RegisterForm } from '../../Model/RegisterForm.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrl: './register-reactive.component.css'
})
export class RegisterReactiveComponent {
  display: String = '';
  IsAccountCreate: Boolean = false;
  genderValue = ''
  checkConfirmPass : string = '';
  
  RegisterForm1 = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    Age: new FormControl(''),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl('genderValue')
  })
  
  RegisterForm: RegisterForm = {
    name: '',
    email: '',
    ConfirmPassword: '',
    Age: 0,
    Password: '',
    gender: '',
    userPhoto: '',
    byteImage: ''
  }
  fileToUpload: any;
  ProfileDP: any;
  UserData: any;
  constructor(private authService: AuthServiceService, private router: Router ,private toastr: ToastrService) { }
  RegisterUser(): Boolean {
    console.log("register values",this.RegisterForm )
    if (this.RegisterForm.Password != this.RegisterForm.ConfirmPassword) {
      this.checkConfirmPass = "Please enter a correct password. Password is not match";
      return false
    }else{
      this.checkConfirmPass = "";
    }
    this.authService.registerUser(this.RegisterForm).subscribe(res => {
      debugger
      // if (res == 'Success') {
      console.log("this is above mes");
      //this.router.navigateByUrl('/login'); //login
      //this.display = 'Account Created Successfully!';
      this.toastr.success('Account Created Successfully!');
      this.IsAccountCreate = true; //tamp-driven-form
      setInterval(() => {
        this.BackOn();
      }, 1000);
      return true
    })
    return false
  }
  get name() {
    return this.RegisterForm1.get('name')
  }
  get f() { return this.RegisterForm1.controls; }
  get email() {
    return this.RegisterForm1.get('email')
  }
  get gender() {
    return this.RegisterForm1.get('gender')
  }
  get ConfirmPassword(){
    return this.RegisterForm1.get('ConfirmPassword')
  }
  get Password(){
    return this.RegisterForm1.get('Password')
  }

  handleFileInput(data: any) {
    debugger
    console.log("data", data)
    var file = data.target.files[0];
    this.fileToUpload = file;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ProfileDP = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    console.log(formData);
    this.authService.uploadProfileImage(formData)
      .subscribe({
        next: (result: { status: number; byteImage: string | null; message: any; }) => {
          debugger
          if (result.status == 1) {
            if (result.byteImage != null) {
              this.ProfileDP = 'data:image/*;base64,' + result.byteImage;
            }
            else {
              this.ProfileDP = "assets/image/noPhotoAvailable.jpg"
            }
            this.RegisterForm.userPhoto = result.message;
          }
          console.log(result);
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });


  }

  BackOn() {
    const authToken = sessionStorage.getItem('token');
    if (authToken != null) {
      this.router.navigateByUrl('/Display-Data');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
