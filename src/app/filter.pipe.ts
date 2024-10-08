import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/models/categories'; // Ensure the path to Category model is correct

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Category[], titre: string): Category[] {
    if (!titre) {
      return values;
    }
    return values.filter(category => 
      category.title.toLowerCase().includes(titre.toLowerCase())
    );
  }
}
