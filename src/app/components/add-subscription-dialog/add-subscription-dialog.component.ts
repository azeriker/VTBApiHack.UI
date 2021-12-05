import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { Tariff } from 'src/app/models/tariff';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-subscription-dialog',
  templateUrl: './add-subscription-dialog.component.html'
})
export class AddSubscriptionDialogComponent implements OnInit {

  tariffs: Tariff[];
  createSubscriptionForm: FormGroup;

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
    private httpService: HttpService,
    protected fb: FormBuilder) {
    this.tariffs = new Array<Tariff>();
    this.createSubscriptionForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      period: new FormControl("", [Validators.required]),
      policy: new FormControl("", [Validators.required]),
      tariff: new FormControl(this.tariffs[0], [Validators.required])
    });

  }

  ngOnInit() {
    this.httpService.getTariffs().subscribe(
      ((data: Tariff[]) => {
        this.tariffs = data;
      }));

    this.initForm();
    this.createSubscriptionForm = new FormGroup({
      tariff: new FormControl(this.tariffs[0])
    });

  }
  initForm(): void {
    this.createSubscriptionForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      period: new FormControl("", [Validators.required]),
      policy: new FormControl("", [Validators.required]),
      tariff: new FormControl(this.tariffs[0], [Validators.required])
    });
  }



  showDialog(content: TemplateRef<TuiDialogContext<void>>) {
    this.dialogService.open(content, { dismissible: true }).subscribe();
  }



}
