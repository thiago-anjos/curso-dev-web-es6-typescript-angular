import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaResumida',
})
export class DescricaResumidaPipe implements PipeTransform {
  transform(text: string): string {
    if (typeof text !== 'string') return text;
    if (text.length > 15) return text.substring(0, 15) + '...';
    return text;
  }
}
