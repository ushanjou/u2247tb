import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component implements OnInit {

  constructor(public s1: Service1Service) { 
    s1.a="data2";
  }

  ngOnInit(): void {
  }

  Display(){
    console.log(this.s1.a);
  }

}
