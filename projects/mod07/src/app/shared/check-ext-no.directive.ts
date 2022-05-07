import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[CheckExtNo]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckExtNoDirective,
    multi: true
  }]

})
export class CheckExtNoDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let extNo: number = parseInt(control.value);
    let result = null;
    if (extNo < 1000 || extNo > 1999)
      result = { "CheckExtNo": true };
    return result;

  }

}
