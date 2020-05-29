import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentiation',
})
export class ExponentiationPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
