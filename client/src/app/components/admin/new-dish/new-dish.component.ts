import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Categories } from 'src/app/core/interfaces';
import { Dishes } from 'src/app/core/interfaces/dishes.interface';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.scss'],
})
export class NewDishComponent implements OnInit {
  newDishForm: FormGroup;
  isSubmit = false;
  modalHeader: string;
  dish: Dishes;
  preview: string = '';
  categoriesData: Array<Categories>;

  constructor(
    private fb: FormBuilder,
    private bsmodalRef: BsModalRef,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.createNewDishForm();
    if (this.dish) {
      this.preview = this.newDishForm.controls.img.value;
    }

    this.getCategoriesData();
  }
  private getCategoriesData(): void {
    this.categoriesService.categoriesData.subscribe((data) => {
      this.categoriesData = data;
    });
  }

  get nameControl(): any {
    return this.newDishForm.get('name') as FormControl;
  }
  get imgControl(): any {
    return this.newDishForm.get('img') as FormControl;
  }
  get priceControl(): any {
    return this.newDishForm.get('price') as FormControl;
  }
  get weightControl(): any {
    return this.newDishForm.get('weight') as FormControl;
  }
  get categoryIdControl(): any {
    return this.newDishForm.get('categoryId') as FormControl;
  }

  private createNewDishForm(): void {
    if (this.dish?.id) {
      this.newDishForm = this.fb.group({
        name: [
          this.dish?.name || null,
          [Validators.required, Validators.minLength(3)],
        ],

        id: [this.dish?.id || null],
        img: [this.dish?.img || null, [Validators.required]],

        price: [this.dish?.price || null, [Validators.required]],
        weight: [this.dish?.weight || null, [Validators.required]],
        descr: [this.dish?.descr || null],
        categoryId: [this.dish?.categoryId || null, [Validators.required]],
      });
    } else {
      this.newDishForm = this.fb.group({
        name: [
          this.dish?.name || null,
          [Validators.required, Validators.minLength(3)],
        ],
        img: [this.dish?.img || null, [Validators.required]],

        price: [this.dish?.price || null, [Validators.required]],
        weight: [this.dish?.weight || null, [Validators.required]],
        descr: [this.dish?.descr || null],
        categoryId: [this.dish?.categoryId || null, [Validators.required]],
      });
    }
  }

  onSubmit(): void {
    const form = this.newDishForm;
    form.value.img = this.preview;
    this.isSubmit = true;

    if (this.newDishForm.invalid) {
      return;
    }

    this.isSubmit = false;

    this.save(this.newDishForm.value);
    this.modalHide();
  }

  modalHide(): void {
    this.bsmodalRef.hide();
  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const file: File = (target.files as FileList)[0];
      this.previewFile(file);
    }
  }

  previewFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.preview = reader.result as string;
    };
  }

  clearImage() {
    this.preview = '';
    this.newDishForm.controls.img.setValue('');
  }

  private save(newDish: Dishes): void {}
}
