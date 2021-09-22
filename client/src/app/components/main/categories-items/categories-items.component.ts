import { DishesService } from './../../../core/services/dishes.service';
import { CategoriesService } from './../../../core/services/categories.service';
import { Categories } from './../../../core/interfaces/categories.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Dishes } from 'src/app/core/interfaces/dishes.interface';

@Component({
  selector: 'app-categories-items',
  templateUrl: './categories-items.component.html',
  styleUrls: ['./categories-items.component.scss'],
})
export class CategoriesItemsComponent implements OnInit {
  @Input() category: Categories;
  @Input() onCategoryClick: (id: string) => any;
  dishesData: Dishes;

  constructor(
    private categoriesService: CategoriesService,
    private dishesService: DishesService
  ) {}

  ngOnInit(): void {
    this.onCategoryClick(this.category.id);
  }
  // public getDishesByCategory = (categoryId: string): void => {
  //   this.dishesService
  //     .getDishesByCategory(categoryId)
  //     .subscribe((data: any) => {
  //       this.dishesData = data;
  //     });
  // };
}
