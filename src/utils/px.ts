import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'px'
})
export class PixelConverter implements PipeTransform {
  transform(value: string | number, args: string[]): any {
    if (value === undefined) {
        return;
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'number') {
        return value + 'px';
    }
  }
}
