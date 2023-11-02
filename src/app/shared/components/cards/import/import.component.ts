import { Component, OnInit, OnDestroy  } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DatosImportador } from '@core/models/detalleTablas/datosImportador';
import { Subject, Subscription } from 'rxjs';
import { DigimonCardsService } from '@modules/DigimonCards/service/digimon-cards.service';
import { Hoja } from '@core/models/digimon/hoja';
import { DigimonBase } from '@core/models/digimon/digimonBase';
import { ComponentService } from '@shared/services/component.service';
import { Contenido } from '@core/models/agify/contenido';
import { InfoAdicionalComponent } from '@shared/components/mensajes/info-adicional/info-adicional.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html'
})
export class ImportComponent  implements OnInit, OnDestroy {
  selectedComponent:string="";

  cargando:boolean = false;

  private unsubscribe$ = new Subject<void>();

  private subscriptions = new Subscription();

  oHoja:Hoja={};

  oLstContent?:DigimonBase[]=[];
  oContenido?:Contenido;
  primeraCarga:boolean=true;

  constructor(private toastr:HotToastService,
              private digimonService:DigimonCardsService,
              private componentService:ComponentService,
              private dialog: MatDialog) 
  {
    
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.componentService.darDatoValorUno$().subscribe(data=>{
        this.oLstContent = data as DigimonBase[];
      })
    );
    
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.subscriptions.unsubscribe();
  }

  cargar( endPoint?:string )
  {
    this.digimonService.getapiAgifi(endPoint).subscribe(data=>{
      this.oContenido = data as Contenido;
      if(this.oContenido.age != null){
        const dialogRef = this.dialog.open(InfoAdicionalComponent, {
          width: '250px', // Ancho del cuadro de diálogo (ajústalo según tus necesidades)
          data: "La edad del Digimon " + this.oContenido.name + " es " + this.oContenido.age + "."
        });
      }else {
        const dialogRef = this.dialog.open(InfoAdicionalComponent, {
          width: '250px', // Ancho del cuadro de diálogo (ajústalo según tus necesidades)
          data: "La edad del Digimon " + this.oContenido.name + " es Indefinida."
        });
        
      }
    });
  }

  mostrarDetalles(id?:number){
    this.digimonService.getDetallesJson(id).subscribe(data=>{
      
      if(data != null){
        const dialogRef = this.dialog.open(InfoAdicionalComponent, {
          width: '1000px', // Ancho del cuadro de diálogo (ajústalo según tus necesidades)
          data: JSON.stringify(data)
        });
      }
    });
  }
}
