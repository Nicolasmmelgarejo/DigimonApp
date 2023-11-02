import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

    transform(value: any): any  {
      if(value!=undefined){
        value=value.split('T');
        if(value != null  && value != "" ){

          var fecha = value[0].split('-');

          var dia = fecha[2];

          var mes = fecha[1];

          var ano = fecha[0];

          value = (dia + "/" + mes + "/" + ano) as string;
        }else{
          value = '(S/D)' as string;
        }

        return value;
      }
    }
  
  }
