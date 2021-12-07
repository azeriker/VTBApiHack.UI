import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  { path: "subscriptions", component: SubscriptionsComponent,  pathMatch: "full" },
  { path: "profile", component: ProfileComponent,  pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
