import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit {
  Friends=["Jenny", "Vivid", "Kity","Linda"];
  public picture = new Picture(1,
     "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg", "大都會公園", "Anita");
  
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  count(){
    console.log("count()");
    return this.Friends.length;
  }

}
