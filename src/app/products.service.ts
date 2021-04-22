import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products: any[] = [
    {
      itemName: "Item 1",
      description: "Item Description",
      price: "50"
    },
    {
      itemName: "Item 2",
      description: "Item Description",
      price: "65"
    },
    {
      itemName: "Item 3",
      description: "Item Description",
      price: "53"
    },
    {
      itemName: "Item 4",
      description: "Item Description",
      price: "100"
    },
    {
      itemName: "Item 5",
      description: "Item Description",
      price: "150"
    },
    {
      itemName: "Item 6",
      description: "Item Description",
      price: "40"
    },
    {
      itemName: "Item 7",
      description: "Item Description",
      price: "30"
    },
    {
      itemName: "Item 8",
      description: "Item Description",
      price: "90"
    },
    {
      itemName: "Item 9",
      description: "Item Description",
      price: "200"
    }
  ];
  constructor() { }
}
