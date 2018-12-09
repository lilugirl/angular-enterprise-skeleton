import { NgModule } from '@angular/core';
import { BackofficeRoutingModule } from './backoffice-routing.module';


import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BackofficeRoutingModule
  ],
  declarations: [UserComponent, HomeComponent]
})
export class BackofficeModule { }
