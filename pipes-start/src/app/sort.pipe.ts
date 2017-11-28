import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, string, propName: String): any {
    if( value.length === 0 ){
      return value;
    }
    return value.sort((a, b) => a.name > b.name);

  }

}
