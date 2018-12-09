import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './guard/admin.guard';
import { BackofficeComponent } from './layout/backoffice/backoffice.component';
import { LoginComponent } from './modules/public/login/login.component';
import { HomeComponent } from './modules/public/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {
    path: 'backoffice', component: BackofficeComponent, canActivate: [AdminGuard], data: { title: 'Backoffice' }, children: [
      { path: '', loadChildren: './modules/backoffice/backoffice.module#BackofficeModule' }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
