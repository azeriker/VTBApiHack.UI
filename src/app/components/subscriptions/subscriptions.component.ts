import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { TuiDialogService } from '@taiga-ui/core';
import { AddSubscriptionDialogComponent } from '../add-subscription-dialog/add-subscription-dialog.component';
import { HttpService } from 'src/app/services/http.service';
import { Policy, Subscription } from 'src/app/models/subscription';
import { Tariff } from 'src/app/models/tariff';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.less']
})
export class SubscriptionsComponent {

  public readonly columns = ['name', 'date', 'period', 'price', 'status', 'action'];

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(AddSubscriptionDialogComponent, this.injector),
    {
      data: 237,
      dismissible: true,
      label: 'Создать подписку',
    },
  );
  subscriptions: Subscription[];
  policies: Policy[];
  testForm = new FormGroup({
    testValue: new FormControl(),
});
  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService, @Inject(Injector) private readonly injector: Injector, private httpService: HttpService) {
    this.subscriptions = new Array<Subscription>();
    this.policies = new Array<Policy>();
  }
  policyValue = new FormControl();

  ngOnInit(): void {
    this.httpService.getSubscriptions().subscribe(
      ((data: Subscription[]) => {
        this.subscriptions = data;
      }));
     
      this.policies.push(Policy.Always);
      this.policies.push(Policy.InactivityAsProlongation);
      this.policies.push(Policy.InactivityAsCancel);
      this.policyValue = new FormControl(this.policies[0]);
  }

  showDialog() {
    this.dialog.subscribe({
      next: data => {
        console.log('Dialog emitted data = ' + data);
      },
      complete: () => {
        console.log('Dialog closed');
      },
    });
  }

  disableSubscription(subscriptionId: string) {
    this.httpService.disableSubscription(subscriptionId).subscribe(
      (data: string) => {
        this.httpService.getSubscriptions().subscribe(
    
      
    );
    this.httpService.getSubscriptions().subscribe(
      ((data: Subscription[]) => {
        this.subscriptions = data;
      }))
    })
  }

  isActive(data: boolean | undefined): boolean {
    if ( data !== undefined) {
      return data != true ? true : false;
    }
    else {
      return false;
    }
  }

save(id: string){
  this.httpService.changePolicy(id, this.policyValue.value).subscribe();
  this.httpService.getSubscriptions().subscribe(
    ((data: Subscription[]) => {
      this.subscriptions = data;
    }))

}
}


