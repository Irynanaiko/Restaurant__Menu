import { Pipe, PipeTransform } from '@angular/core';
import { Dishes } from 'src/app/core/interfaces/dishes.interface';

@Pipe({
  name: 'filterDishes',
  pure: false,
})
export class FilterDishesPipe implements PipeTransform {
  transform(data: Array<Dishes>, search: string): Array<Dishes> {
    if (!search) {
      return data;
    }

    return data.filter((el: Dishes) => {
      return el.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
}
