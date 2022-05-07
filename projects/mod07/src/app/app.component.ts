import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mod07';
  rentRoom = { name: "", Nofpeople: "", ExtNo: "", startDate: "", endDate: "" };
  capacity = ['5人', '10人', '20人', '30人', '40人'];
}
