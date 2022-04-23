import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'CheckStock',
  templateUrl: './check-stock.component.html',
  styles: [
  ]
})
export class CheckStockComponent implements OnInit {
  @Input() Stock: number = 0;
  @Input() QTY = 0;
  info = "";   lower = false;

  ngOnChanges(){
    this.lower = (this.Stock < this.QTY);
    this.info = this.lower ? `低於庫存，目前只有 ${this.Stock}` : '';
    console.log("ngOnChanges   - ");
  }
 GetStock(){
    this.Stock=20;
    console.log(this.Stock);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
