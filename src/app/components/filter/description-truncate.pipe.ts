import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription'
})
export class DescriptionTruncatePipe implements PipeTransform {

  transform(description: string): string {
    const maxLength = 190;
    if (description.length >= maxLength) {
      return description + '...';
    } else {
      const spacesToAdd = maxLength - description.length;
      return description + ' '.repeat(spacesToAdd)+ '...';
    }
  }

}
