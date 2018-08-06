import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  PhcontentComponent } from './phcontent/phcontent.component';

@NgModule({
  imports: [
    CommonModule 
  ],
  exports: [
    PhcontentComponent
 
  ],
  declarations: [
    PhcontentComponent
  ]
})
export class PhModule { }
