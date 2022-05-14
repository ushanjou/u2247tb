import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from '../shared/meeting-room';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styles: [
  ]
})
export class MeetingRoomListComponent implements OnInit {

  constructor(public service: MeetingRoomService) { }
  ngOnInit() {
    this.service.getList();
  }

  public populateForm(mr:MeetingRoom){ 
    this.service.formData = Object.assign({}, mr);
      //mr ; 
    //Object.assign({}, mr);  
 }
 
}
