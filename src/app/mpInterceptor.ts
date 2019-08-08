import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable()


// tslint:disable-next-line: class-name
export class mpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      // headers:new HttpHeaders().append('Source','')
      setHeaders: {
        // Source: `application/json`
      }
    });

    return next.handle(request).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          console.log('req url :: ' + req.url);
          if (err.status === 401) {
            console.log(err);
          }
        }
      }
    ));
  }
}
