import { Categories } from './../interfaces/categories.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoriesData = new BehaviorSubject<Array<Categories>>(null);

  private url = environment.url + '/categories';

  constructor(private http: HttpClient) {
    this.getCategoriesData();
  }

  private getCategoriesData(): void {
    this.http.get<Array<Categories>>(this.url).subscribe((data) => {
      this.categoriesData.next(data);
    });
  }

  addNewCategory(newCategory: Categories): void {
    this.http.post(this.url, newCategory).subscribe((data) => {
      console.log(data);

      console.log = function () {
        alert(JSON.stringify(arguments));
      };
      this.getCategoriesData();
    });
  }

  updateCategory(categoryId: string, newCategory: Categories): void {
    this.http
      .patch(`${this.url}/${categoryId}`, newCategory)
      .subscribe(() => this.getCategoriesData());
  }
}
