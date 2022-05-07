import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeetingRoom } from '../meeting-room';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component implements OnInit {
  public meetingRoom: MeetingRoom;
  public capacity = ['5人', '10人', '20人', '30人', '40人']

  constructor() {
    this.meetingRoom = new MeetingRoom(
      101, '哥多華', this.capacity[2], false, true);
  }

  ngOnInit(): void {
  }
  submitted: Boolean = false;
  onSubmit(roomForm: NgForm) {
    if (roomForm.valid)
      console.log(roomForm.value);
    this.submitted = true;
  }
  newMeetingRoom(){
    this.meetingRoom = 
    new MeetingRoom(102, '', '');    
   }
 
}
