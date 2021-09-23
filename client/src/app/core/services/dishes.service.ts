import { Dishes } from './../interfaces/dishes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  dishesData = new BehaviorSubject<Array<Dishes>>(null);

  private url = environment.url + '/items';

  constructor(private http: HttpClient) {
    this.getDishesData();
  }

  private getDishesData(): void {
    this.http.get<Array<Dishes>>(this.url).subscribe((data) => {
      this.dishesData.next(data);
    });
  }

  // getDishesData(): Observable<Array<Dishes>> {
  //   return this.http.get<Array<Dishes>>(this.url);
  // }

  getDishesByCategory(categoryId: string): Observable<Dishes> {
    return this.http.get<Dishes>(`${this.url}/${categoryId}`);
  }

  addNewDish(newDish: Dishes): void {
    this.http.post(this.url, newDish).subscribe(() => this.getDishesData());
    console.log(newDish);
  }

  updateDish(dishId: string, newDish: Dishes): void {
    this.http
      .patch(`${this.url}/${dishId}`, newDish)
      .subscribe(() => this.getDishesData());
  }
}
