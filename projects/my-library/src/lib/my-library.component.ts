import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-library',
  template: `
    <p>
      my-library works! test1
    </p>
  `,
  styles: [
  ]
})
export class MyLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
