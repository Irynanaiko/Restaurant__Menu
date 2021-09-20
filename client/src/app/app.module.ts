import { CategoriesService } from './core/services/categories.service';
import { Categories } from './core/interfaces/categories.interface';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoService } from './core/services/info.service';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DishesService } from './core/services/dishes.service';
import { CategoriesItemsComponent } from './components/main/categories-items/categories-items.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent, CategoriesItemsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [InfoService, CategoriesService, DishesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
