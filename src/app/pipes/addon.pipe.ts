import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addon',
  standalone: true,
})
export class AddonPipe implements PipeTransform {

  transform(value1: string,value2:string): unknown {
    return value1 + value2;
  }

}
