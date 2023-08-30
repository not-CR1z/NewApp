import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abc'
})
export class AbcPipe implements PipeTransform {

  transform(index: number): string {
    let letters: string[];
    letters=["A","C","D","E","F","G","H","I","J","K"]
    return letters[index];
  }
}
