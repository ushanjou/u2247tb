import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetingRoom, MeetingRooms } from './meeting-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  url = "../assets/data/meetingRoom.json";
  constructor(private htttpClient: HttpClient) { }

  getMeetingRooms() {
    return this.htttpClient.get<MeetingRoom[]>(this.url);
  };

}
