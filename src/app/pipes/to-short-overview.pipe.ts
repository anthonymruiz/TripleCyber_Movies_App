import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toShortOverview'
})
export class ToShortOverviewPipe implements PipeTransform {

  transform(txt: string, ...args: unknown[]): unknown {
    txt = txt.substring(0,150) + "...";
    return txt;
  }

}
