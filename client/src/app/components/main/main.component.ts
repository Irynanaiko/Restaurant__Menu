import { Dishes } from './../../core/interfaces/dishes.interface';
import { CategoriesService } from './../../core/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/core/services/dishes.service';
import { Categories } from 'src/app/core/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  categoriesData: Array<Categories>;
  dishesData: Array<Dishes>;

  constructor(
    private categoriesService: CategoriesService,
    private dishesService: DishesService
  ) {}

  ngOnInit(): void {
    this.getCategoriesData();
    this.getDishesData();
  }

  async getCategoriesData(): Promise<void> {
    this.categoriesData = await this.categoriesService
      .getCategoriesData()
      .toPromise();
    console.log(this.categoriesData);
  }

  async getDishesData(): Promise<void> {
    this.dishesData = await this.dishesService.getDishesData().toPromise();
    console.log(this.dishesData);
  }
}
