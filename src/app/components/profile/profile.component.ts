import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {take} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  public hashValue: string = '';
  public isTgNotificationsOn = true;

  public get isNotificationsCheckboxDisabled(): boolean {
    return this._isNotificationsCheckboxDisabled;
  }
  public set isNotificationsCheckboxDisabled(value: boolean) {
    this._isNotificationsCheckboxDisabled = value;
    localStorage.setItem('connected', value.toString());
  }

  private _isNotificationsCheckboxDisabled = localStorage.getItem('connected') === "true";

  constructor(private _httpService: HttpService) { }

  public ngOnInit(): void {
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

}
