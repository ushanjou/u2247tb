import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetingRoom } from './meeting-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public formData = new MeetingRoom();
  public list: MeetingRoom[] = [];
  readonly rootUrl = 'https://localhost:44397/MeetingRooms'


  constructor(private http: HttpClient) { }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
      .subscribe(resp => this.list = resp );
  }

}
