import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rainbow'
})
export class RainbowPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    // faire quelque chose avec les arguments...
    // value : la valeur d'entrée à modifier
    return `🌈${value}🌈`;
  }

}
