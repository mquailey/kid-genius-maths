import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(subjects: any, year: any): any {

    //check if search term is undefined
    if(year === undefined) return subjects;
    //return updates people array
    return subjects.filter(function(subject){
        return subject.year.toLowerCase().includes(year.toLowerCase());
    }) 

  }

}