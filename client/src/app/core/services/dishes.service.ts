import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dishes } from '../interfaces/dishes.interface';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  // infoData = new BehaviorSubject<Array<Info>>(null);

  private url = environment.url + '/items';

  constructor(private http: HttpClient) {
    // this.getInfoData();
  }

  // getInfoData(): void {
  //   this.http.get<Array<Info>>(this.url).subscribe((data) => {
  //     this.infoData.next(data);
  //     console.log(data);
  //   });
  // }

  getDishesData(): Observable<Array<Dishes>> {
    return this.http.get<Array<Dishes>>(this.url);
  }
}
