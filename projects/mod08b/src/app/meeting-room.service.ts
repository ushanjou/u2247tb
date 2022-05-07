import { Injectable } from '@angular/core';
import { MeetingRooms } from './meeting-room';

// @Injectable({
//   providedIn: 'root'
// })
export class MeetingRoomService {

  constructor() { }

  getMeetingRooms(){
    return MeetingRooms ;
  };

}
