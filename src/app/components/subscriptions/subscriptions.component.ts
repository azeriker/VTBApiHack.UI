import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


 
 
class Account {
    constructor(readonly name: string, readonly balance: number) {}
 
    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.less']
})
export class SubscriptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly accounts = [
    new Account('Rubles', 500),
    new Account('Dollar', 237),
    new Account('Euro', 100),
];

switchAutoRenewal(): void{
  
}
testForm = new FormGroup({
    name: new FormControl(''),
    accounts: new FormControl(this.accounts[0]),
});
}
