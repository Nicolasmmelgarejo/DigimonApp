import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable()
export class RefreshJwtInterceptor implements HttpInterceptor {
  
    keyEncript: string = environment.SecretKey;
  
    constructor() {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
      return next.handle(request).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            const headers = event.headers;
            if (headers.has('Authorization')) {
              const token = headers.get('Authorization');
              if (token) {
                localStorage.setItem('access_token', CryptoJS.AES.encrypt(token, this.keyEncript).toString());
              }
            }
          }
        })
      );
    }
  }