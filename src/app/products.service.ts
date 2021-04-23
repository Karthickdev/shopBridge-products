import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products: any[] = [
    {
      id: 1,
      itemName: "Item 1",
      description: "Item Description",
      price: "50"
    },
    {
      id: 2,
      itemName: "Item 2",
      description: "Item Description",
      price: "65"
    },
    {
      id: 3,
      itemName: "Item 3",
      description: "Item Description",
      price: "53"
    },
    {
      id: 4,
      itemName: "Item 4",
      description: "Item Description",
      price: "100"
    },
    {
      id: 5,
      itemName: "Item 5",
      description: "Item Description",
      price: "150"
    },
    {
      id: 6,
      itemName: "Item 6",
      description: "Item Description",
      price: "40"
    },
    {
      id: 7,
      itemName: "Item 7",
      description: "Item Description",
      price: "30"
    },
    {
      id: 8,
      itemName: "Item 8",
      description: "Item Description",
      price: "90"
    },
    {
      id: 9,
      itemName: "Item 9",
      description: "Item Description",
      price: "200"
    }
  ];
  constructor() { }
}
