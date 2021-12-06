import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { distinctUntilChanged } from 'rxjs';
import { Period, Policy, Subscription } from 'src/app/models/subscription';
import { Tariff } from 'src/app/models/tariff';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-subscription-dialog',
  templateUrl: './add-subscription-dialog.component.html',
  styleUrls:['./add-subscription-dialog.component.less']
})
export class AddSubscriptionDialogComponent implements OnInit {

  tariffs: Tariff[];
  periods: Period[];
  policies: Policy[];
  createSubscriptionForm: FormGroup;

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<boolean>,
    private httpService: HttpService,
    protected fb: FormBuilder) {
    this.tariffs = new Array<Tariff>();
    this.periods = new Array<Period>();
    this.policies = new Array<Policy>();

    this.periods.push(Period.Monthly);
    this.periods.push(Period.Yearly);

    this.policies.push(Policy.Always);
    this.policies.push(Policy.InactivityAsProlongation);
    this.policies.push(Policy.InactivityAsCancel);

    this.createSubscriptionForm = this.fb.group({});

  }

  ngOnInit() {
    this.httpService.getTariffs().subscribe(
      ((data: Tariff[]) => {
        this.tariffs = data;
      }));

    this.initForm();
  }
  
  initForm(): void {
    this.createSubscriptionForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      period: new FormControl(this.periods[0], [Validators.required]),
      policy: new FormControl(this.policies[0]),
      tariff: new FormControl(this.tariffs[0])
    });
    
    let tariff = new FormControl(this.tariffs[0], [Validators.required]); 

    this.createSubscriptionForm.get("tariff")?.valueChanges.pipe(distinctUntilChanged()).subscribe(selectedValue => {
      this.updateFormValues(selectedValue);
    });
  }

  updateFormValues(tariff: Tariff): void {

    this.createSubscriptionForm.patchValue({
      name: tariff.name,
      price: tariff.price,
      period: tariff.period,
      tariff: tariff
    });
  }
  createSubscription(){
    const newSubscription = new Subscription(this.createSubscriptionForm.get("name")?.value, this.createSubscriptionForm.get("period")?.value, this.createSubscriptionForm.get("price")?.value, this.createSubscriptionForm.get("policy")?.value);
    this.httpService.createSubscription(newSubscription).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
    this.context.completeWith(true);
  }
  showDialog(content: TemplateRef<TuiDialogContext<void>>) {
    this.dialogService.open(content, { dismissible: true }).subscribe();
  }



}
