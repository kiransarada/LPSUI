import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseString'
})
export class ConversionPipe implements PipeTransform {
  transform(value: string, after: object): string {
    let newObj =  JSON.parse(value);
    return newObj;
  }

}
