import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { MeetingRoomsAppComponent } from './meeting-rooms-app/meeting-rooms-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'booking', component: BookingComponent}, 
  {path:'meetingroomapp', component: MeetingRoomsAppComponent}, 
  {path:'', redirectTo:'booking', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
