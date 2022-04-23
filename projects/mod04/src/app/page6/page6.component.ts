import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'SearchBox',
  templateUrl: './page6.component.html',
  styles: [
  ]
})
export class Page6Component implements OnInit {
  @Input() searchText: string = "";
  @Output() searchTextChange = new EventEmitter<string>();
  onSearch(search: string) {
    this.searchText = search;
    console.log(this.searchText);
    this.searchTextChange.emit(this.searchText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
