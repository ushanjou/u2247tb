import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckExtNoDirective } from './shared/check-ext-no.directive';
import { CheckEndDateDirective } from './shared/check-end-date.directive';

@NgModule({
  declarations: [
    AppComponent,
    CheckExtNoDirective,
    CheckEndDateDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
