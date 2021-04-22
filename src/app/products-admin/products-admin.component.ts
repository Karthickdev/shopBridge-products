import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  itemList: any;
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.itemList = this.products.products
  }

}
