import { NgModule } from '@angular/core';
import { LibSharedComponent } from './lib-shared.component';
import { CommonModule } from '@angular/common';

import { SimpleFormModule } from './simple-form/simple-form.module';

@NgModule({
  declarations: [LibSharedComponent],
  imports: [
    CommonModule,
    SimpleFormModule
  ],
  exports: [
    LibSharedComponent,
    SimpleFormModule
  ]
})
export class LibSharedModule { }
