import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[InTheBox]'
})
export class InTheBoxDirective {

  constructor(private el:ElementRef) {
this.putInTheBox("solid 2px red");
   }

   private putInTheBox(borderStyle:string){
    this.el.nativeElement.style.border= borderStyle;
  }
  
}
