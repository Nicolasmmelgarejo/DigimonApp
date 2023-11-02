import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { UsuarioService } from '@modules/auth/service/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  keyEncript:string= environment.SecretKey;

  constructor(private cookieService: CookieService,
              private usuarioService:UsuarioService,
              private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {

      if(!this.usuarioService.getTimer()){
        this.usuarioService.removeToken();
        this.router.navigate(['/', 'auth']);
        return throwError('Sesión expirada');
      }

      let token;

      let tokenEncrypt = localStorage.getItem("access_token"); //this.cookieService.get("access_token");

      let tokenByte;
      
      if(tokenEncrypt!=null){
        tokenByte = CryptoJS.AES.decrypt( tokenEncrypt, this.keyEncript);
      }
      if(tokenByte!=null){
        token = tokenByte.toString(CryptoJS.enc.Utf8);
      }

      let authRequest = request

      const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      });

      if(token!=null){
        authRequest = request.clone(
          {
            headers: headers
          }
        )
      }

      return next.handle(authRequest);

    } catch (e) {
      return next.handle(request);
    }
  }
}
