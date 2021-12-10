import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {take, takeWhile} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";

interface UserOidcProfile {
  info?: {name: string}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  public hashValue: string = '';
  public isTgNotificationsOn = true;
  public userName: string | undefined = undefined;

  public get isNotificationsCheckboxDisabled(): boolean {
    return this._isNotificationsCheckboxDisabled;
  }
  public set isNotificationsCheckboxDisabled(value: boolean) {
    this._isNotificationsCheckboxDisabled = value;
    localStorage.setItem('connected', value.toString());
  }

  private _isNotificationsCheckboxDisabled = localStorage.getItem('connected') === "true";

  constructor(private _httpService: HttpService, private _oauthService: OAuthService) { }

  public ngOnInit(): void {
    this._oauthService.events
      .pipe(
        takeWhile(() => !this.userName)
      )
      .subscribe(_ => {
        this._oauthService.loadUserProfile().then((res: UserOidcProfile) => {
          this.userName = res.info?.name;
        }, (err) => {
          console.log(err);
        } );
      });
  }

  public linkTelegram(): void {
    this._httpService.bindTg(this.hashValue).pipe(take(1)).subscribe(
      () => {
        this.isNotificationsCheckboxDisabled = false;
      },
      error => {
        console.log('tg bind err');
        this.isNotificationsCheckboxDisabled = true;
      }
    );
  }

  public logout() {
    this._oauthService.logOut();
  }
}
