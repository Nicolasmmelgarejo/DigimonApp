import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AlertComponent],
  entryComponents: [AlertComponent], 
})
export class AlertModule {}