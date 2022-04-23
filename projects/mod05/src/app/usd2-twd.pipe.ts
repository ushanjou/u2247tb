import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2twd'
})
export class USD2TWDPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 30 ;
  }

}
