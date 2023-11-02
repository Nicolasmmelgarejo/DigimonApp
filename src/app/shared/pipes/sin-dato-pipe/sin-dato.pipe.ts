import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinDato'
})
export class SinDatoPipe implements PipeTransform {

  transform(value: any): any  {
    return value === null  || value === "" ? '(S/D)' : value as string;
  }

}
