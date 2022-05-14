import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Add2CalendarComponent } from './booking/add2-calendar/add2-calendar.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { BookingComponent } from './booking/booking.component';
import { RentalDeviceComponent } from './booking/rental-device/rental-device.component';
import { MeetingRoomsAppComponent } from './meeting-rooms-app/meeting-rooms-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  {
    path: 'booking/:id', component: BookingDetailComponent,
    children: [
      { path: 'calendar', component: Add2CalendarComponent }, 
      { path: 'device', component: RentalDeviceComponent}
  
    ]
  },
  { path: 'meetingroomapp', component: MeetingRoomsAppComponent },
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
