import { Injectable } from '@angular/core';
import { SelectValorDato } from '@core/models/select/selectValorDato';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  currentComponent: BehaviorSubject<any> = new BehaviorSubject(null);

  currentComponentCancelar: BehaviorSubject<any> = new BehaviorSubject(null);

  valueComponent: BehaviorSubject<any> = new BehaviorSubject(null);

  valueSeLComponent: BehaviorSubject<any> = new BehaviorSubject(null);

  valueDisponibilidad: BehaviorSubject<any> = new BehaviorSubject(null);

  valueMovimientos: BehaviorSubject<any> = new BehaviorSubject(null);

  valueMovimientosBusc: BehaviorSubject<any> = new BehaviorSubject(null);

  valueResumen: BehaviorSubject<any> = new BehaviorSubject(null);

  valueResumenBusc: BehaviorSubject<any> = new BehaviorSubject(null);

  valorActual: BehaviorSubject<any> = new BehaviorSubject(null);

  valorPosicionObM: BehaviorSubject<any> = new BehaviorSubject(null);

  datosPosicion: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValor: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSolo: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorUno: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloUno: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorTres: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloTres: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorCuatro: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloCuatro: BehaviorSubject<any> = new BehaviorSubject(null);
  
  DatoValorCinco: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloCinco: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSeis: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloSeis: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSiete: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloSiete: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorOcho: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloOcho: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorNueve: BehaviorSubject<any> = new BehaviorSubject(null);

  DatoValorSoloNueve: BehaviorSubject<any> = new BehaviorSubject(null);
  
  //dar
  DarDatoValorUno: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValorDos: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValorTres: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValorCuatro: BehaviorSubject<any> = new BehaviorSubject(null);
  
  DarDatoValorCinco: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValorSeis: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValorSiete: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValorOcho: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValorNueve: BehaviorSubject<any> = new BehaviorSubject(null);

  DarDatoValor: BehaviorSubject<any> = new BehaviorSubject(null);

  //alert
  CargarAlert: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }
  //alert
  behCargarAlert(value:any){
    return this.CargarAlert.next(value);
  }
  behCargarAlert$():Observable<any>{
    return this.CargarAlert.asObservable();
  }

  ValorActualSelectPosicionObM(value:any){
    return this.valorPosicionObM.next(value);
  }
  ValorActualSelectPosicionObM$():Observable<any>{
    return this.valorPosicionObM.asObservable();
  }

  selectDatoValor(selectDatoValor:SelectValorDato[]){
    return this.DatoValor.next(selectDatoValor);
  }
  selectDatoValor$():Observable<SelectValorDato[]>{
    return this.DatoValor.asObservable();
  }

  selectDatoValorUno(selectDatoValor:SelectValorDato[]){
    return this.DatoValorUno.next(selectDatoValor);
  }
  selectDatoValorUno$():Observable<SelectValorDato[]>{
    return this.DatoValorUno.asObservable();
  }

  selectDatoValorTres(selectDatoValor:SelectValorDato[]){
    return this.DatoValorTres.next(selectDatoValor);
  }
  selectDatoValorTres$():Observable<SelectValorDato[]>{
    return this.DatoValorTres.asObservable();
  }

  selectDatoValorCuatro(selectDatoValor:SelectValorDato[]){
    return this.DatoValorCuatro.next(selectDatoValor);
  }
  selectDatoValorCuatro$():Observable<SelectValorDato[]>{
    return this.DatoValorCuatro.asObservable();
  }

  selectDatoValorCinco(selectDatoValor:SelectValorDato[]){
    return this.DatoValorCinco.next(selectDatoValor);
  }
  selectDatoValorCinco$():Observable<SelectValorDato[]>{
    return this.DatoValorCinco.asObservable();
  }

  selectDatoValorSeis(selectDatoValor:SelectValorDato[]){
    return this.DatoValorSeis.next(selectDatoValor);
  }
  selectDatoValorSeis$():Observable<SelectValorDato[]>{
    return this.DatoValorSeis.asObservable();
  }

  selectDatoValorSiete(selectDatoValor:SelectValorDato[]){
    return this.DatoValorSiete.next(selectDatoValor);
  }
  selectDatoValorSiete$():Observable<SelectValorDato[]>{
    return this.DatoValorSiete.asObservable();
  }

  selectDatoValorOcho(selectDatoValor:SelectValorDato[]){
    return this.DatoValorOcho.next(selectDatoValor);
  }
  selectDatoValorOcho$():Observable<SelectValorDato[]>{
    return this.DatoValorOcho.asObservable();
  }

  selectDatoValorNueve(selectDatoValor:SelectValorDato[]){
    return this.DatoValorNueve.next(selectDatoValor);
  }
  selectDatoValorNueve$():Observable<SelectValorDato[]>{
    return this.DatoValorNueve.asObservable();
  }

  selectDatoValorSolo(selectDatoValor:SelectValorDato){
    return this.DatoValorSolo.next(selectDatoValor);
  }
  selectDatoValorSolo$():Observable<SelectValorDato>{
    return this.DatoValorSolo.asObservable();
  }

  selectDatoValorSoloUno(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloUno.next(selectDatoValor);
  }
  selectDatoValorSoloUno$():Observable<SelectValorDato>{
    return this.DatoValorSoloUno.asObservable();
  }

  selectDatoValorSoloTres(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloTres.next(selectDatoValor);
  }
  selectDatoValorSoloTres$():Observable<SelectValorDato>{
    return this.DatoValorSoloTres.asObservable();
  }

  selectDatoValorSoloCuatro(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloCuatro.next(selectDatoValor);
  }
  selectDatoValorSoloCuatro$():Observable<SelectValorDato>{
    return this.DatoValorSoloCuatro.asObservable();
  }

  selectDatoValorSoloCinco(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloCinco.next(selectDatoValor);
  }
  selectDatoValorSoloCinco$():Observable<SelectValorDato>{
    return this.DatoValorSoloCinco.asObservable();
  }

  selectDatoValorSoloSeis(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloSeis.next(selectDatoValor);
  }
  selectDatoValorSoloSeis$():Observable<SelectValorDato>{
    return this.DatoValorSoloSeis.asObservable();
  }

  selectDatoValorSoloSiete(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloSiete.next(selectDatoValor);
  }
  selectDatoValorSoloSiete$():Observable<SelectValorDato>{
    return this.DatoValorSoloSiete.asObservable();
  }

  selectDatoValorSoloOcho(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloOcho.next(selectDatoValor);
  }
  selectDatoValorSoloOcho$():Observable<SelectValorDato>{
    return this.DatoValorSoloOcho.asObservable();
  }

  selectDatoValorSoloNueve(selectDatoValor:SelectValorDato){
    return this.DatoValorSoloNueve.next(selectDatoValor);
  }
  selectDatoValorSoloNueve$():Observable<SelectValorDato>{
    return this.DatoValorSoloNueve.asObservable();
  }

  actualComponent(number:string){
    return this.currentComponent.next(number);
  }
  actualComponent$():Observable<string>{
    return this.currentComponent.asObservable();
  }

  actualComponentCancelar(number:any){
    return this.currentComponentCancelar.next(number);
  }

  actualComponentCancelar$(){
    return this.currentComponentCancelar.asObservable();
  }

  valueSelectComponent(value:any[]){
    return this.valueComponent.next(value);
  }
  valueSelectComponent$():Observable<any[]>{
    return this.valueComponent.asObservable();
  }

  valueSelComponent(value:any[]){
    return this.valueSeLComponent.next(value);
  }
  valueSelComponent$():Observable<any[]>{
    return this.valueSeLComponent.asObservable();
  }

  mostrarDisponibilidad(value:any){
    return this.valueDisponibilidad.next(value);
  }
  mostrarDisponibilidad$():Observable<any>{
    return this.valueDisponibilidad.asObservable();
  }

  mostrarMovimientos(value:any){
    return this.valueMovimientos.next(value);
  }
  mostrarMovimientos$():Observable<any>{
    return this.valueMovimientos.asObservable();
  }
  mostrarMovimientosBusq(value:any){
    return this.valueMovimientosBusc.next(value);
  }
  mostrarMovimientosBusq$():Observable<any>{
    return this.valueMovimientosBusc.asObservable();
  }
  
  mostrarResumen(value:any){
    return this.valueResumen.next(value);
  }
  mostrarResumen$():Observable<any>{
    return this.valueResumen.asObservable();
  }
  mostrarResumenBusq(value:any){
    return this.valueResumenBusc.next(value);
  }
  mostrarResumenBusq$():Observable<any>{
    return this.valueResumenBusc.asObservable();
  }

  ValorActualSelectPosicion(value:any){
    return this.valorActual.next(value);
  }
  ValorActualSelectPosicion$():Observable<any>{
    return this.valorActual.asObservable();
  }

  DatosSelectPosicion(value:any){
    return this.datosPosicion.next(value);
  }
  DatosSelectPosicion$():Observable<any>{
    return this.datosPosicion.asObservable();
  }
  

  //darDatoValor
  
  darDatoValorUno(value:any){
    return this.DarDatoValorUno.next(value);
  }
  darDatoValorUno$():Observable<any>{
    return this.DarDatoValorUno.asObservable();
  }

  darDatoValorDos(value:any){
    return this.DarDatoValorDos.next(value);
  }
  darDatoValorDos$():Observable<any>{
    return this.DarDatoValorDos.asObservable();
  }

  darDatoValorTres(value:any){
    return this.DarDatoValorTres.next(value);
  }
  darDatoValorTres$():Observable<any>{
    return this.DarDatoValorTres.asObservable();
  }

  darDatoValorCuatro(value:any){
    return this.DarDatoValorCuatro.next(value);
  }
  darDatoValorCuatro$():Observable<any>{
    return this.DarDatoValorCuatro.asObservable();
  }

  darDatoValorCinco(value:any){
    return this.DarDatoValorCinco.next(value);
  }
  darDatoValorCinco$():Observable<any>{
    return this.DarDatoValorCinco.asObservable();
  }

  darDatoValorSeis(value:any){
    return this.DarDatoValorSeis.next(value);
  }
  darDatoValorSeis$():Observable<any>{
    return this.DarDatoValorSeis.asObservable();
  }

  darDatoValorSiete(value:any){
    return this.DarDatoValorSiete.next(value);
  }
  darDatoValorSiete$():Observable<any>{
    return this.DarDatoValorSiete.asObservable();
  }

  darDatoValorOcho(value:any){
    return this.DarDatoValorOcho.next(value);
  }
  darDatoValorOcho$():Observable<any>{
    return this.DarDatoValorOcho.asObservable();
  }

  darDatoValorNueve(value:any){
    return this.DarDatoValorNueve.next(value);
  }
  darDatoValorNueve$():Observable<any>{
    return this.DarDatoValorNueve.asObservable();
  }

  darDatoValor(value:any){
    return this.DarDatoValor.next(value);
  }
  darDatoValor$():Observable<any>{
    return this.DarDatoValor.asObservable();
  }

  removeEmptyCssClasses() {
    const inputElements = document.querySelectorAll('.Input-Personalizado') as NodeListOf<HTMLInputElement>;

    inputElements.forEach(inputElement => {

      const label = inputElement.previousElementSibling as HTMLElement;
      const container = inputElement.parentElement as HTMLElement;

      inputElement.value = inputElement.value.trim();
      if (inputElement.value.trim().length === 0) {
        label.classList.remove('Spam-Personalizado-Focus', 'Spam-Personalizado-Top');
      }
      if (container) {
        container.classList.remove('Label-Personalizado-Focus');
      }
    });
  }

  AddEmptyCssClasses() {
    const inputElements = document.querySelectorAll('.Input-Personalizado') as NodeListOf<HTMLInputElement>;

    inputElements.forEach(inputElement => {

      const label = inputElement.previousElementSibling as HTMLElement;
      const container = inputElement.parentElement as HTMLElement;

      inputElement.value = inputElement.value.trim();
      if (inputElement.value.trim().length !== 0) {
        label.classList.add('Spam-Personalizado-Focus', 'Spam-Personalizado-Top');
        if (container) {
          container.classList.add('Label-Personalizado-Focus');
        }
      }
      
    });
  }

}


