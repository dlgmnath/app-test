import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    const result = [];
    for (const pos of value){
       if ( pos.name.indexOf(args) > -1){
          result.push(pos);
       }
    }
    return result;
  }

}
