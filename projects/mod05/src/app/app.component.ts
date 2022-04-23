import { Component, ElementRef, ViewChild } from '@angular/core';
import { CheckStockComponent } from './check-stock/check-stock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  @ViewChild("title1") h1: ElementRef|any;
  @ViewChild(CheckStockComponent) checkStock: CheckStockComponent|any;

  QTY: number = 12;
  Stock: number = 10;
  title = '購物車';
  ngAfterViewInit(){
    console.log(this.h1.nativeElement);
    console.log("ngAfterViewInit:", this.checkStock);
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked: " , this.checkStock);
  }

}
