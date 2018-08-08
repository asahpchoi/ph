import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
<<<<<<< HEAD
 

=======
import { PhModule } from './ph/ph.module';
 
>>>>>>> b47690aa41108713af0cde1f9dba224b6e1948e3
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent, 
  ],
  declarations: [ContentComponent]
})
export class LocalModule { }
