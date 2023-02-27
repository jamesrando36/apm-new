import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  pageTitle = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _searchFilter: string = '';
  public get searchFilter(): string {
    return this._searchFilter;
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
    this.filteredProducts = this.PeformFilter(value);
  }

  products: IProduct[] = [];

  filteredProducts: IProduct[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  PeformFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRaitingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;
  }
}
