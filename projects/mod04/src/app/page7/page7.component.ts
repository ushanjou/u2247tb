import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styles: [
  ]
})
export class Page7Component implements OnInit {
  students: Student[] = [
    { Id: 101, Name: "Mary", Birthday: new Date(2007, 3, 15) },
    { Id: 102, Name: "Lisa", Birthday: new Date(1997, 7, 15) },
    { Id: 103, Name: "Andy", Birthday: new Date(2003, 8, 15) },
    { Id: 104, Name: "Jenny", Birthday: new Date(2008, 9, 15) },
    { Id: 105, Name: "KiKi", Birthday: new Date(2001, 4, 15) },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
