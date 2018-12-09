import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Backoffice Home' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user', component: UserComponent, data: { title: 'Backoffice User' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BackofficeRoutingModule { }
