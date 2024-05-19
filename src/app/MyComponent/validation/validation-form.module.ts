import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ValidationFormComponent } from '../validation/validation.component';

@NgModule({
  declarations: [ValidationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ValidationFormModule { }