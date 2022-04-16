import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component implements OnInit {
  public pictures : Picture[];

  constructor() { 
    this.pictures=[ 
      new Picture(1,
      "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg", "大都會公園", "Anita"), 
      new Picture(2, "https://shorturl.at/adyBF","大港墘公園", "Anita" ), 
      new Picture(3, "https://shorturl.at/beCE8","遠眺社子島", "Anita" ), 
      new Picture(4, "https://shorturl.at/ejklD","大雨過後", "Anita" ), 
      new Picture(5, "https://shorturl.at/nuvOV","t-Hub 會議中心", "Anita" )]

  }

  ngOnInit(): void {
  }

}
