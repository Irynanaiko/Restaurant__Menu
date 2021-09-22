import { Component, OnInit } from '@angular/core';
import { Dishes } from './../../core/interfaces/dishes.interface';
import { CategoriesService } from './../../core/services/categories.service';
import { DishesService } from 'src/app/core/services/dishes.service';
import { Categories } from 'src/app/core/interfaces';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NewCategoryComponent } from './new-category/new-category.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  categoriesData: Array<Categories>;
  dishesData: Array<Dishes>;
  modalRef: BsModalRef;

  constructor(
    private categoriesService: CategoriesService,
    private dishesService: DishesService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getCategoriesData();
    this.getDishesData();
  }

  getCategoriesData(): void {
    this.categoriesService.getCategoriesData().subscribe((data) => {
      this.categoriesData = data;
    });
  }

  getDishesData(): void {
    this.dishesService.getDishesData().subscribe((data) => {
      this.dishesData = data;
    });
  }

  getDishesByCategory(categoryId): void {
    this.dishesService
      .getDishesByCategory(categoryId)
      .subscribe((data: any) => {
        this.dishesData = data;
      });
  }

  createNewCategory(): void {
    const initialState = {
      modalHeader: 'Додати нову категорію',
      save: this.addNewCategory.bind(this),
    };
    this.openModal(initialState);
  }

  private addNewCategory(newCategory: Categories): void {
    this.categoriesService.addNewCategory(newCategory);
  }

  private openModal(initialState: Partial<any>): void {
    this.modalRef = this.modalService.show(
      NewCategoryComponent,
      Object.assign(
        {},
        {
          initialState,
          ignoreBackdropClick: true,
        }
      )
    );
  }
}
