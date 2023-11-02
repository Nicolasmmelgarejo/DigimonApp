import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ComponentService } from '@shared/services/component.service';

@Component({
  selector: 'app-select-posicion',
  templateUrl: './select-posicion.component.html'
})
export class SelectPosicionComponent {
  values:any[]=[];

  valueSelect:any;
  
  constructor(private componentService:ComponentService,private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    this.renderer.listen('document', 'click', (event) => {
      if (!this.elRef.nativeElement.contains(event.target)) {
        this.triangulo.nativeElement.className = 'cajaselectP-trianguloinfP';
        
        this.lista.nativeElement.className = 'listaselectP';

        this.caja.nativeElement.className = 'cajaselectP';
      }
    });

    this.componentService.DatosSelectPosicion$().subscribe(data=>{
      if(data != null){
        this.values = data;
        this.valueSelect = this.values[0] 
        this.componentService.ValorActualSelectPosicion(this.values[0]);
      }
    });

    this.componentService.ValorActualSelectPosicionObM$().subscribe(data=>{
      this.select(data);
    });
  }

  select(value:any){
    this.valueSelect = value;
    this.componentService.ValorActualSelectPosicion(value);

  }

  @ViewChild("triangulo") triangulo:any;

  @ViewChild("lista") lista:any;

  @ViewChild("caja") caja:any;

  fillOut(value:any[]) {
    this.values=value;

    this.triangulo.nativeElement.className = 'cajaselectP-triangulosupP';

    this.lista.nativeElement.className = 'desplegableSelP';

    this.caja.nativeElement.className = 'cajaselectP';
  }

  
  clickBox(){

    if(this.lista!=null && this.triangulo!=null)
      if(this.triangulo.nativeElement.className =='cajaselectP-triangulosupP')
      {
        this.triangulo.nativeElement.className = 'cajaselectP-trianguloinfP';
        
        this.lista.nativeElement.className = 'listaselectP';

        this.caja.nativeElement.className = 'cajaselectP';
      }
      else {

        this.caja.nativeElement.className = 'cajaselectSinBoderP';

        this.triangulo.nativeElement.className = 'cajaselectP-triangulosupP';

        this.lista.nativeElement.className = 'desplegableSelP';
      }
  }
}
