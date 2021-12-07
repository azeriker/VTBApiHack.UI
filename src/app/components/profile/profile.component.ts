import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  public hashValue: string = '';
  public isTgNotificationsOn = true;

  constructor() { }

  ngOnInit(): void {
  }

}
