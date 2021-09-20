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

  getCategoriesData(): void {
    this.categoriesService.getCategoriesData().subscribe((data) => {
      this.categoriesData = data;
      console.log(this.categoriesData);
    });
  }

  getDishesData(): void {
    this.dishesService.getDishesData().subscribe((data) => {
      this.dishesData = data;
    });
    console.log(this.dishesData);
  }
}
