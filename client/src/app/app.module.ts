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
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NewCategoryComponent } from './components/admin/new-category/new-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewDishComponent } from './components/admin/new-dish/new-dish.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
import { NewInfoComponent } from './components/admin/new-info/new-info.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { FilterDishesPipe } from './shared/pipes/filter-dishes/filter-dishes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AdminComponent,
    PageNotFoundComponent,
    NewCategoryComponent,
    NewDishComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    NewInfoComponent,
    ScrollTopComponent,
    FilterDishesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [InfoService, CategoriesService, DishesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
