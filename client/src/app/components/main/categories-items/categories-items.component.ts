import { CategoriesService } from './../../../core/services/categories.service';
import { Categories } from './../../../core/interfaces/categories.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-items',
  templateUrl: './categories-items.component.html',
  styleUrls: ['./categories-items.component.scss'],
})
export class CategoriesItemsComponent implements OnInit {
  @Input() category: Categories;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {}
}
