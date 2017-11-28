import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: String): any {
    if( value.length === 0 || filterString ===''){
      return value;
    }
    const resultArray = [];
      for(const item of value){

        if(value[propName] ===  filterString) {
          resultArray.push(item);
        }

      }
      return resultArray;


  }

}
