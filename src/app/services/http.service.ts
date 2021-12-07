import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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
  credentialsApiUrl = environment.credentialsApiUrl;
  constructor(private http: HttpClient) { }

  public getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.apiUrl + "Tariff/Get");
  }
  public getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.apiUrl + "Subscription/Get");
  }
  public createSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(this.apiUrl + "Subscription/Create", subscription);
  }
  public disableSubscription(subscriptionId: string): Observable<string> {
    return this.http.put<string>(this.apiUrl + "Subscription/SetInactive/", { "publicId": subscriptionId });
  }
  public getCredentials(xMdmId: string, publicId: string): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Mdm-Id', xMdmId);
    return this.http.get<string>(this.credentialsApiUrl + "openapi/rb/dks/cardinfo/hackathon/v1/credentials/" + publicId, {headers: headers});
  }
  public getCVV(xMdmId: string, publicId: string): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Mdm-Id', xMdmId);
    return this.http.get<string>(this.credentialsApiUrl + "openapi/rb/dks/cardinfo/hackathon/v1/cvv/" + publicId,  {headers: headers});
  }
}
