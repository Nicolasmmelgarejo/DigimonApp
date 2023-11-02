import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigimonCardsService {

  digimonPage=environment.DigimonPage;

  apiAgifi=environment.ApiAgifi;

  detallesJsonDigimon = environment.detallesJsonDigimon; 

  constructor(private http:HttpClient){}

  getHojaDigimon(endPoint?:string):Observable<any>{
    return this.http.get(this.digimonPage+endPoint);
  }

  getDetallesJson(endPoint?:number):Observable<any>{
    return this.http.get(this.detallesJsonDigimon+endPoint?.toString());
  }

  getapiAgifi(endPoint?:string):Observable<any>{
    return this.http.get(this.apiAgifi+endPoint);
  }



}
