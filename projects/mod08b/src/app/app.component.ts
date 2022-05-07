import { Component } from '@angular/core';
import { MeetingRoom } from './meeting-room';
import { MeetingRoomService } from './meeting-room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mod08b';
  meetingRooms: MeetingRoom[] = [];
  constructor(private mrService: MeetingRoomService) {
    this.mrService.getMeetingRooms().subscribe(
      resp => this.meetingRooms =  resp,
      err => console.log(err));
  }

}
