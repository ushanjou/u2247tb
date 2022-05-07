import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[CheckEndDate]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckEndDateDirective,
    multi: true
  }]

})
export class CheckEndDateDirective implements Validator {
  @Input ('CheckEndDate') mustGT: string[]=[];

  constructor() { }
  validate(fg: AbstractControl): ValidationErrors | null {
    return MustGT(this.mustGT[0],this.mustGT[1])(<FormGroup>fg);

  }

}

export function MustGT(startCtlName: string, endCtlName: string) {
  return (fg: FormGroup) => {
    const startCtl = fg.controls[startCtlName];
    const endCtl = fg.controls[endCtlName];
    if (!startCtl || !endCtl)
      return null;
    if (endCtl.errors && !endCtl.errors.MustGT)
      return null;
    let startDate = Date.parse(startCtl.value);
    let endDate = Date.parse(endCtl.value);
    if (endDate <= startDate)
      endCtl.setErrors({ MustGT: true });
    else
      endCtl.setErrors(null);
    return null
  }
}
