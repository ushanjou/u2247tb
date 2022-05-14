import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { MeetingRoomsAppComponent } from './meeting-rooms-app/meeting-rooms-app.component';

const routes: Routes = [
  {path:'booking', component: BookingComponent}, 
  {path:'meetingroomapp', component: MeetingRoomsAppComponent}, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
