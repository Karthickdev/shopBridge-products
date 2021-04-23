import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  itemList: any;
  constructor(private products: ProductsService, private modalService: NgbModal, private shopBridgeService: ApiService) { }

  ngOnInit(): void {
    this.itemList = this.products.products

    //To get data from api
    //this.getItems 
  }

  openEditModal(item:any){
    const modal = this.modalService.open(EditModalComponent);
    modal.componentInstance.itemDetails = item;
    modal.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  deleteItem(item:any){
    for(let i of this.itemList){
      if(i.id == item.id){
        this.itemList.splice(this.itemList.indexOf(i), 1)
        this.products.products = this.itemList
      }
    }
  }

  openAddModal(){
    this.modalService.open(AddModalComponent).result.then((res) =>{
      if(res){
        this.products.products.push(res);
        this.itemList = this.products.products
      }
    })

  }

  // getItems(){
  //   let url = this.shopBridgeService.baseUrl+this.shopBridgeService.items;
  //   let data = {}
  //   this.shopBridgeService.ajaxCallService(url, 'get', data)?.then(res =>{
  //     console.log(res);
  //   })
  // }

}
