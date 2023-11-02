import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentService } from '@shared/services/component.service';
import { HotToastService } from '@ngneat/hot-toast';
import { DatosImportador } from '@core/models/detalleTablas/datosImportador';
import { Subject, Subscription } from 'rxjs';
import { DigimonCardsService } from '@modules/DigimonCards/service/digimon-cards.service';
import { Hoja } from '@core/models/digimon/hoja';
import { DigimonBase } from '@core/models/digimon/digimonBase';

@Component({
  selector: 'app-digimon-cards-page',
  templateUrl: './digimon-cards-page.component.html'
})
export class DigimonCardsPageComponent {
  
  
  primeraCarga:boolean = true;

  habilitadoIzquierda:boolean=true;

  habilitadoDerecha:boolean=true;

  contadorColumnas:number=1;

  lista:any[]=[];

  prieraCarga:boolean = true;

  selectedComponent:string="";

  cargando:boolean = false;

  cantidadHojas:number = 0;

  private unsubscribe$ = new Subject<void>();

  private subscriptions = new Subscription();


  oHoja:Hoja={};

  oLstContent?:DigimonBase[]=[];
  constructor(private componentService:ComponentService,
    private digimonService:DigimonCardsService,
    private toastr:HotToastService) {}


  @ViewChild('disponibilidad') disponibilidad:any;

  @ViewChild('imgDisponibilidad') imgDisponibilidad:any;
  i=1;
  ngOnInit(): void {
    
    this.subscriptions.add(
      this.digimonService.getHojaDigimon("1").subscribe(data=>{
        this.oHoja = data as Hoja;

        this.oLstContent = this.oHoja.content;

        this.cantidadHojas = ((this.oHoja.pageable?.totalPages ?? 1) / 4) + 1;

        for(var i = 1; i < this.cantidadHojas; i++)
        {
          this.lista.push(this.i++);
        }

        this.componentService.DatosSelectPosicion(this.lista);

        this.contadorVuelas = 0;
      })
    );

    this.subscriptions.add(
      this.digimonService.getHojaDigimon("2").subscribe(data=>{
        this.oHoja = data as Hoja;
        this.oHoja.content?.forEach((element) => 
          this.oLstContent?.push(element)
        );
        this.contadorVuelas = 0;
      })
    );

    this.subscriptions.add(
      this.digimonService.getHojaDigimon("3").subscribe(data=>{
        this.oHoja = data as Hoja;

        this.oHoja.content?.forEach((element) => 
          this.oLstContent?.push(element)
        );
        this.contadorVuelas = 0;
      })
    );

    this.subscriptions.add(
      this.digimonService.getHojaDigimon("4").subscribe(data=>{
        this.oHoja = data as Hoja;

        this.oHoja.content?.forEach((element) => 
          this.oLstContent?.push(element)
        );
        this.contadorVuelas = 0;
        this.componentService.darDatoValorUno(this.oLstContent);
        this.showDisponibilidad();
      })
    );

    this.componentService.ValorActualSelectPosicion$().subscribe(data=>{
      if(data!=null && typeof data == "number")
        if(!this.primeraCarga)
        {

          this.contadorColumnas=data as number;
          if(this.contadorColumnas!=null){
            this.numeroABuscar = (this.contadorColumnas * 4) - 3; 
            this.contadorVuelas = 0;
            for(var i = this.numeroABuscar; i < this.numeroABuscar + 4; i++)
              this.digimonService.getHojaDigimon(i.toString()).subscribe(data=>{
                this.oHoja = data as Hoja;
                if(this.contadorVuelas == 0 )
                  this.oLstContent = this.oHoja.content;
                else
                  this.oHoja.content?.forEach((element) => 
                    this.oLstContent?.push(element)
                  );
                this.contadorVuelas ++;

                if(this.contadorVuelas == 4 ){
                  this.componentService.darDatoValorUno(this.oLstContent);
                }
              });
            this.showDisponibilidad();
          }
        }else{
          this.primeraCarga = false;
        }
    });
    this.subscriptions.add(
      this.digimonService.getHojaDigimon("1").subscribe(data=>{
        this.oHoja = data as Hoja;

        this.oLstContent = this.oHoja.content;

      })
    );

    this.subscriptions.add(
      this.digimonService.getHojaDigimon("2").subscribe(data=>{
        this.oHoja = data as Hoja;
        this.oHoja.content?.forEach((element) => 
          this.oLstContent?.push(element)
        );
        this.contadorVuelas = 0;
      })
    );

    this.subscriptions.add(
      this.digimonService.getHojaDigimon("3").subscribe(data=>{
        this.oHoja = data as Hoja;

        this.oHoja.content?.forEach((element) => 
          this.oLstContent?.push(element)
        );
        this.contadorVuelas = 0;
      })
    );

    this.subscriptions.add(
      this.digimonService.getHojaDigimon("4").subscribe(data=>{
        this.oHoja = data as Hoja;

        this.oHoja.content?.forEach((element) => 
          this.oLstContent?.push(element)
        );
        
      })
    );
  }

  numeroABuscar?:number;
  contadorVuelas:number = 0;

  movimientoDerecha(){
    this.contadorColumnas++;
    this.componentService.ValorActualSelectPosicionObM(this.contadorColumnas);
   

    this.showDisponibilidad();
  }

  movimientoIzquierda(){
    this.contadorColumnas--;
    this.componentService.ValorActualSelectPosicionObM(this.contadorColumnas);
    
    this.showDisponibilidad();
  }


  showDisponibilidad(){
    
      if(this.contadorColumnas==this.lista?.length){
        this.habilitadoDerecha=true;
      }else{
        this.habilitadoDerecha=false;
      }
      if(this.contadorColumnas==1){
        this.habilitadoIzquierda=true;
      }else{
        this.habilitadoIzquierda=false;
      }
      
  }
}
