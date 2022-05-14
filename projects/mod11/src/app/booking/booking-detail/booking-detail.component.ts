import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingRoomService } from '../../shared/meeting-room.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styles: [
  ]
})
export class BookingDetailComponent implements OnInit {

  constructor(public service: MeetingRoomService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  public id: number = 0;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = Number(id);
    this.service.getByID(this.id);
  }
  goback() {
    this.location.back();
  }

}

