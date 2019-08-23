import { NgModule } from '@angular/core';
import { LibSharedComponent } from './lib-shared.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LibSharedComponent],
  imports: [
    CommonModule
  ],
  exports: [LibSharedComponent]
})
export class LibSharedModule { }
