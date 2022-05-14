import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styles: []
})
export class BookingComponent implements OnInit {

  constructor(public service: MeetingRoomService, 
    private router: Router) { }
  ngOnInit() {
    this.service.getList();
  }

  onSelect(id: number){
    this.router.navigate(['/booking', id]); 
}

}
