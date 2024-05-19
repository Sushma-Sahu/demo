import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
 // constructor(private authService: AuthServiceService, private router: Router ,private toastr: ToastrService) { }

 constructor(private router: Router){
  setTimeout(() => {
    this.title = "change title"
  }, 2000); 
 }
//  checkLogin(){
//   const authToken = sessionStorage.getItem('token');
//   if (authToken != null) {
//    // this.router.navigateByUrl('/Display-Data');
//   } else {
//     //this.router.navigateByUrl('/login');
//   }
//  }
}
