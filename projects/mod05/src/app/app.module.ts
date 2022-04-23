import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckStockComponent } from './check-stock/check-stock.component';
import { InTheBoxDirective } from './in-the-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    CheckStockComponent,
    InTheBoxDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
