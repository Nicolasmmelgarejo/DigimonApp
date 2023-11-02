import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinDatoPipe } from './sin-dato.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SinDatoPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SinDatoPipe
  ]
})
export class SinDatoPipeModule { }
