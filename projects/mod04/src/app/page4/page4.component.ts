import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styles: [
  ]
})
export class Page4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SayHi() {
    alert("Hello");
  }
  onClick(element:string){
    console.log(element);
}


}
