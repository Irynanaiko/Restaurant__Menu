import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dishes } from '../interfaces/dishes.interface';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  private url = environment.url + '/items';

  constructor(private http: HttpClient) {}

  getDishesData(): Observable<Array<Dishes>> {
    return this.http.get<Array<Dishes>>(this.url);
  }

  getDishesByCategory(categoryId: string): Observable<Dishes> {
    return this.http.get<Dishes>(`${this.url}/${categoryId}`);
  }
}
