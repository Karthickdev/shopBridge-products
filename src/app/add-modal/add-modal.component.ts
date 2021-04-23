import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  itemName:any;
  description:any;
  price:any;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  save(){
    let data = {
      itemName: this.itemName,
      description: this.description,
      price: this.price
    }
    this.activeModal.close(data);
  }
  
  close(){
    this.activeModal.close();
  }

}
