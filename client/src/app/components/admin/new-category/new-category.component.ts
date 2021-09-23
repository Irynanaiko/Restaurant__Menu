import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Categories } from 'src/app/core/interfaces';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  newCategoryForm: FormGroup;
  isSubmit = false;
  modalHeader: string;
  category: Categories;
  constructor(private fb: FormBuilder, private bsmodalRef: BsModalRef) {}

  ngOnInit(): void {
    this.createNewCategoryForm();
  }

  private createNewCategoryForm(): void {
    if (this.category?.id) {
      this.newCategoryForm = this.fb.group({
        name: [
          this.category?.name || null,
          // [Validators.required, Validators.minLength(3)],
        ],

        id: [this.category.id || null],
      });
    } else {
      this.newCategoryForm = this.fb.group({
        name: [
          this.category?.name || null,
          // [Validators.required, Validators.minLength(3)],
        ],
      });
    }
  }

  onSubmit(): void {
    // this.isSubmit = true;

    // if (this.newCategoryForm.invalid) {
    //   return;
    // }

    // this.isSubmit = false;

    this.save(this.newCategoryForm.value);
    this.modalHide();
  }

  modalHide(): void {
    this.bsmodalRef.hide();
  }

  private save(newCategory: Categories): void {}
}
