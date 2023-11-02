import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAdicionalComponent } from './info-adicional.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [InfoAdicionalComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [InfoAdicionalComponent],
  entryComponents: [InfoAdicionalComponent], 
})
export class InfoAdicionalModule { }
