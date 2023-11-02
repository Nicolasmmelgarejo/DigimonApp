import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SelectValorDato } from '@core/models/select/selectValorDato';

@Component({
  selector: 'app-info-adicional',
  templateUrl: './info-adicional.component.html'
})
export class InfoAdicionalComponent {
  constructor(public dialogRef: MatDialogRef<InfoAdicionalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<SelectValorDato> // Asegúrate de que el tipo de datos coincida con lo que estás pasando desde openConfirmationDialog()
  ) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
}
