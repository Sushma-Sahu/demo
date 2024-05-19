import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { compareValidator } from '../customvalidation';
import { AuthServiceService } from '../auth-service.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
// export class ValidationComponent {

// }

export class ValidationFormComponent {
  cities: string[] = ['New York', 'London', 'Tokyo', 'Paris'];
  filterdta : string[] = [];
  CountoryList : any = [];
  CountoryArray : string[] = [];


  selectedCity: string = '';

  validationform!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthServiceService) {
    this.getContoryList()

    this.validationform = this.fb.group({
      name: ['', Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      email: ['', [Validators.required, Validators.email]],
      // phoneNo : ['',[Validators.required, Validators.minLength(10)]],
      phoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

      dob: [''],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      passwordCfm: ['', [Validators.required]],
      country: [''],
      city: [''],
      gender: [''],
      contoryCode: [''],
      isadmine: false
    }, {
      validator: compareValidator("password", "passwordCfm")
    }

    );

    //Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
  }

  ngOnInit(): void {
  }

  get vname() { return this.validationform.get('name'); }
  get vemail() { return this.validationform.get('email'); }
  get vphone() { return this.validationform.get('phoneNo'); }
  get vpass() { return this.validationform.get('password'); }
  get vCpass() { return this.validationform.get('passwordCfm'); }

  validateAllFormFields(formGroup: FormGroup) {
    debugger
    Object.keys(formGroup.controls).forEach(field => {
      debugger
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsTouched({ onlySelf: true });
      }
    });
  }
  getContoryList() {
    this.authService.getCountory().subscribe(res => {
      this.cities = Object.values(res.data);
      this.cities.forEach(element => {
        this.filterdta  = Object.values(element);
        this.CountoryList = this.filterdta[0];
        this.CountoryArray.push(this.CountoryList)
      });
    })
  }

  onSubmit(): void {
    console.log(this.validationform.value)
    if (this.validationform.valid) {

    }
    else { this.validateAllFormFields(this.validationform) }
    // Handle form submission here
    //console.log('Form submitted:', this.validationform.value);
  }
}
