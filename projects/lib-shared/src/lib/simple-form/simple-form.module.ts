import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { BaseFormComponent } from './base-from/base-form.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignupComponent,
    BaseFormComponent
  ],
  exports: [
    SignupComponent,
    BaseFormComponent
  ]
})
export class SimpleFormModule { }
