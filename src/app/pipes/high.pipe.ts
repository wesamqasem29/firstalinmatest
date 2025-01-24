import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'high',
  standalone: true

})
export class HighPipe implements PipeTransform {

  transform(value: string): string {
    if(!value)return '';

    return value + "from wesam pipe";
  }

}
