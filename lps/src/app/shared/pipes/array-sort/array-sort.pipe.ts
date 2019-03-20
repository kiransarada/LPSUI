import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: any, sortKey: any): any {
    if (!Array.isArray(array)) {
      return;
    }else{
      array.sort((a: any, b: any) => {
        if (a[sortKey] < b[sortKey]) {
          return -1;
        } else if (a[sortKey] > b[sortKey]) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }

}
