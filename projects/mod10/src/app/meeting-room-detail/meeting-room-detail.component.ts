import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MeetingRoom } from '../shared/meeting-room';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-meeting-room-detail',
  templateUrl: './meeting-room-detail.component.html',
  styles: [
  ]
})
export class MeetingRoomDetailComponent implements OnInit {

  constructor(public service: MeetingRoomService,
    private toastr: ToastrService) { }
  public capacity: any[] = [
    { value: 5, text: "5人" }, { value: 10, text: "10人" },
    { value: 15, text: "15人" }, { value: 20, text: "20人" },
    { value: 30, text: "30人" }, { value: 40, text: "40人" },
    { value: 50, text: "50人" }, { value: 100, text: "100人" },
    { value: 200, text: "200人" }]

  ngOnInit() {
    this.resetForm();

    this.toastr.show("show", "Title");
    this.toastr.success("success", "Title");
    this.toastr.info("info", "Title");
    this.toastr.warning("warning", "Title");
    this.toastr.error("error", "Title");

  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = new MeetingRoom();
  }
  insertRecord(form: NgForm) {
    this.service.postMeetingRoom().subscribe(
      resp => {
        this.resetForm(form);
        this.service.getList();
      }, err => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putMeetingRoom().subscribe(
      resp => {
        this.resetForm(form);
        this.service.getList();
      }, err => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    //    this.service.formData.size=Number(this.service.formData.size);
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


}
