import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ], 
  providers:[
    Service1Service
  ]
})
export class Page1Component implements OnInit {

  constructor(public s1: Service1Service) { 
    s1.a="data1";
  }

  ngOnInit(): void {
  }

  Display(){
    console.log(this.s1.a);
  }

}
