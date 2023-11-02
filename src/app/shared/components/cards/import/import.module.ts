import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportComponent } from './import.component';
import { SelectPosicionModule } from '@shared/components/select-posicion/select-posicion.module';



@NgModule({
  declarations: [
    ImportComponent
  ],
  imports: [
    CommonModule,
    SelectPosicionModule
  ],
  exports: [
    ImportComponent
  ]
})

export class ImportModule { }
