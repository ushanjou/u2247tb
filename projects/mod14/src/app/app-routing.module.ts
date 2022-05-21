import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SimpleGuard } from './guards/simple.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'adminpage', component: AdminPageComponent,
    canActivate: [SimpleGuard]
  },
  {
    path: 'membercenter',
    loadChildren:
      () => import('./member-center/member-center.module')
        .then(m => m.MemberCenterModule),
    canLoad: [SimpleGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
