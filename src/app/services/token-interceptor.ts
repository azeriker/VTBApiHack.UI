import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}
  // tslint:disable-next-line:no-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = sessionStorage.getItem("access_token");
    const modifiedReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${userToken}`),
    });
    return next.handle(modifiedReq);
  }
}
