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

  getDishesByCategory(categoryId: string): Observable<Dishes> {
    return this.http.get<Dishes>(`${this.url}/${categoryId}`);
  }

  addNewDish(newDish: Dishes): void {
    console.log(newDish);
    this.http.post(this.url, newDish).subscribe((data) => {
      console.log(data);
      this.getDishesData();
    });
  }

  updateDish(dishId: string, newDish: Dishes): void {
    this.http
      .patch(`${this.url}/${dishId}`, newDish)
      .subscribe(() => this.getDishesData());
  }

  deleteDish(dishId: string): void {
    this.http.delete(`${this.url}/${dishId}`).subscribe(() => {
      this.getDishesData();
    });
  }
}
