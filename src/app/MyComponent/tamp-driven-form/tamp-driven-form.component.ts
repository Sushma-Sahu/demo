import { Component } from '@angular/core';
import { LoginForm } from '../../Model/LoginFrom.modal';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tamp-driven-form',
  templateUrl: './tamp-driven-form.component.html',
  styleUrl: './tamp-driven-form.component.css'
})
export class TampDrivenFormComponent {

  UserLogin: LoginForm = {
    email: "",
    Password: ""
  }
  LoginForm: LoginForm = {
    email: '',
    Password: ''
  }
  constructor(private authService: AuthServiceService, private router: Router ,private toastr: ToastrService ) { }

  userLogin(Item: LoginForm) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("uid");
    console.log("this is user method")
    this.authService.LoginUser(this.UserLogin).subscribe(result => {
      // if (res == 'Success') {
        debugger
      console.log(result);
      if (result != null) {
        if (result.data != null) {
          sessionStorage.setItem("uid", result.data.id)
        }
        console.log(result.token)
        sessionStorage.setItem("token", result.token)
        localStorage.setItem("token", result.token)
        this.toastr.success('Login Successfully!');
        setInterval(() => {
          window.location.href = '/Display-Data';
        }, 1000)
        console.log('Login Successful');

      } else {
        this.toastr.error('Login Failed');
        console.log('Login Failed!');
      }
    }
    )
  }
}

