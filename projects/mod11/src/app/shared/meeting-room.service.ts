import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MeetingRoom } from './meeting-room';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public formData: MeetingRoom = { id: 0, name: "", size: -1 };
  public list: MeetingRoom[] = [];
  //readonly rootUrl = 'https://localhost:44397/MeetingRooms'
  rootUrl='';

  constructor(private http: HttpClient) {
    this.rootUrl = environment.production?
    'http://localhost/mywebapi/MeetingRooms'
                 : 'https://localhost:44397/meetingrooms';

  }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
      .toPromise()
      .then(resp => this.list = resp as MeetingRoom[]);
  }

  getByID(id:number) {
    this.http.get<MeetingRoom>(this.rootUrl + `/${id}`)
      .subscribe(resp => this.formData = resp );
  }


  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData);
  }
  putMeetingRoom() {
    return this.http.put(this.rootUrl + '/' + this.formData.id, this.formData);
  }
  deleteMeetingRoom(id: number) {
    return this.http.delete(this.rootUrl + '/' + id);
  }
}
