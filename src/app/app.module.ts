import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER, TuiSvgModule, TuiButtonModule, TuiPrimitiveCheckboxModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiAccordionModule, TuiCheckboxModule, TuiDataListWrapperModule, TuiInputModule, TuiIslandModule, TuiSelectModule, TuiTabsModule } from "@taiga-ui/kit";
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { TuiMoneyModule } from "@taiga-ui/addon-commerce";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule,
      TuiTabsModule,
      TuiAccordionModule,
      TuiSvgModule,
      TuiMoneyModule,
      TuiDataListWrapperModule,
      TuiSelectModule,
      TuiInputModule,
      FormsModule,
      ReactiveFormsModule,
      TuiButtonModule,
      TuiCheckboxModule, 
      TuiPrimitiveCheckboxModule,
      TuiIslandModule
    


],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
