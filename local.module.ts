import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { PhModule } from './ph/ph.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent,
    PhModule
  ],
  declarations: [ContentComponent]
})
export class LocalModule { }
