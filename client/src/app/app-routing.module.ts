import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './library/_guards/index';


import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

// canActivate:[AuthGuard]
const appRoutes: Routes = [
      { path: '', component: LoginComponent},
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'admin' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}