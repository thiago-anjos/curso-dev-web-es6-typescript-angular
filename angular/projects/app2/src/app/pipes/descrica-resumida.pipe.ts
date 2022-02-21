import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaResumida',
})
export class DescricaResumidaPipe implements PipeTransform {
  transform(
    text: string,
    positionStart: number = 0,
    positionEnd: number
  ): string {
    if (typeof text !== 'string') return text;
    if (text.length > 15)
      return text.substring(positionStart, positionEnd) + '...';
    return text;
  }
}
