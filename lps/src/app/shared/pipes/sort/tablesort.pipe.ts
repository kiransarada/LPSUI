import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablesort'
})
export class TablesortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
