import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetingRoom } from '../meeting-room';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit {
  public capacity = ['5人', '10人', '20人', '30人', '40人']
  public meetingRoomForm: FormGroup;
  meetingRoom: MeetingRoom;
  constructor(public builder: FormBuilder) {
    this.meetingRoom = new MeetingRoom(
      101, '哥多華', this.capacity[2], false, true);
    this.meetingRoomForm = this.builder.group({
      'id': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      "size": [''],
      'projector': [''],
      'TV': ['']
    });
  }
  ngOnInit() {
    this.meetingRoomForm.setValue(this.meetingRoom);
  }
  onSubmit() {
    console.log(this.meetingRoomForm);
    console.log(this.meetingRoom);
    // for(let k in this.meetingRoom){
    //   console.log(k);
    //   console.log(this.meetingRoom.[k].value);
    // }
    this.meetingRoom = {
      id: this.meetingRoom.id,
      name: this.meetingRoomForm.get('name')?.value,
      size: this.meetingRoomForm.get('size')?.value,
      projector: this.meetingRoomForm.get('projector')?.value,
      TV: this.meetingRoomForm.get('TV')?.value
    };
  }
}
