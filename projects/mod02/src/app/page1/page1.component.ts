import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit {
  Friends=["Jenny", "Vivid", "Kity","Linda"];

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  count(){
    console.log("count()");
    return this.Friends.length;
  }

}
