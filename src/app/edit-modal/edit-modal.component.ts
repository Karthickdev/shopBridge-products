import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  @Input() public itemDetails:any;
  @Output() passData: EventEmitter<any> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.itemDetails);
  }

  save() {
    this.passData.emit(this.itemDetails);
    this.activeModal.close(this.itemDetails);
  }

  close(){
    this.activeModal.close(this.itemDetails)
  }

}
