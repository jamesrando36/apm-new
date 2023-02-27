import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../products/product-list.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from 'src/shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProductListComponent, StarComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
})
export class AppModule {}
