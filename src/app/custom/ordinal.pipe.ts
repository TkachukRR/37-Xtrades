import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 11 || value === 12 || value === 13) {
      return 'th';
    }

    const lastDigit = value % 10;

    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
