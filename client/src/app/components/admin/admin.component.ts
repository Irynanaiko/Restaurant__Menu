import { InfoService } from 'src/app/core/services/info.service';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Dishes } from './../../core/interfaces/dishes.interface';
import { CategoriesService } from './../../core/services/categories.service';
import { DishesService } from 'src/app/core/services/dishes.service';
import { Categories } from 'src/app/core/interfaces';
import { Info } from 'src/app/core/interfaces';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewDishComponent } from './new-dish/new-dish.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  // @Input() dish: Dishes;
  categoriesData: Array<Categories>;
  dishesData: Array<Dishes>;
  info: Array<Info>;
  modalRef: BsModalRef;

  constructor(
    private categoriesService: CategoriesService,
    private dishesService: DishesService,
    private infoService: InfoService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getCategoriesData();
    this.getDishesData();
    this.getInfoData();
  }
  private getCategoriesData(): void {
    this.categoriesService.categoriesData.subscribe((data) => {
      this.categoriesData = data;
    });
  }

  // getCategoriesData(): void {
  //   this.categoriesService.getCategoriesData().subscribe((data) => {
  //     this.categoriesData = data;
  //   });
  // }

  getDishesData(): void {
    this.dishesService.dishesData.subscribe((data) => {
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

  editCategory(category: Categories): void {
    const initialState = {
      category,
      modalHeader: 'Редагувати категорію',
      save: this.updateCategory.bind(this),
    };
    console.log(this);
    this.openModal(initialState);
  }

  private updateCategory(category: Categories): void {
    this.categoriesService.updateCategory(category.id, category);
    console.log(category);
  }

  private getInfoData(): void {
    this.infoService.infoData.subscribe((data) => {
      this.info = data;
      console.log(this.info);
    });
  }

  createNewDish(): void {
    const initialState = {
      modalHeader: 'Додати нову страву',
      save: this.addNewDish.bind(this),
    };
    this.openModalForDish(initialState);
  }

  private addNewDish(newDish: Dishes): void {
    this.dishesService.addNewDish(newDish);
  }

  editDish(dish: Dishes): void {
    const initialState = {
      dish,
      modalHeader: 'Редагувати страву',
      save: this.updateDish.bind(this),
    };
    this.openModalForDish(initialState);
  }

  private updateDish(dish: Dishes): void {
    this.dishesService.updateDish(dish.id, dish);
    console.log(dish);
  }

  // delete(template, dish: Dishes): void {
  //   const initialState = { ...dish };

  //   this.openModalForDeleteDish(template, initialState);
  // }

  deleteDish(dishId: string): void {
    this.dishesService.deleteDish(dishId);
    this.modalRef.hide();
  }

  private openModalForDish(initialState: Partial<any>): void {
    this.modalRef = this.modalService.show(
      NewDishComponent,
      Object.assign(
        {},
        {
          initialState,
          ignoreBackdropClick: true,
        }
      )
    );
  }

  openModalForDeleteDish(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  updateInfo(): void {
    console.log(this.info);
  }

  click(id) {
    console.log(id);
  }
}
