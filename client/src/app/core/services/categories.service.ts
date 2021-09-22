import { Categories } from './../interfaces/categories.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // infoData = new BehaviorSubject<Array<Info>>(null);

  private url = environment.url + '/categories';

  constructor(private http: HttpClient) {
    // this.getInfoData();
  }

  // getInfoData(): void {
  //   this.http.get<Array<Info>>(this.url).subscribe((data) => {
  //     this.infoData.next(data);
  //     console.log(data);
  //   });
  // }

  getCategoriesData(): Observable<Array<Categories>> {
    return this.http.get<Array<Categories>>(this.url);
  }

  addNewCategory(newCategory: Categories): void {
    this.http
      .post(this.url, newCategory)
      .subscribe(() => this.getCategoriesData());
    console.log(newCategory);
  }
}
