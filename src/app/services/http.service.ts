import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Subscription } from "../models/subscription";
import { Tariff } from "../models/tariff";


@Injectable({
  providedIn: "root"
})
export class HttpService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.apiUrl + "Tariff");
  }
  public getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.apiUrl + "Subscription/Get" );
  }

}
