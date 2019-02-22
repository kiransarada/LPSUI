import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGeneralComponent } from '../modal-general/modal-general.component';
// import { ModalAboutComponent } from '../modal-general/';


@Component({
  selector: 'app-amendment-table',
  templateUrl: './amendment-table.component.html',
  styleUrls: ['./amendment-table.component.css']
})
export class AmendmentTableComponent implements OnInit {
  @Input() labels: Array<JSON>;
  @Input() tableData: Array<JSON>;
  title = 'app';
  tableArray = {};

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }
  showModal(index) {
    document.getElementById('openModalButton').click();
    console.log('test');
    console.log(index);
    this.tableArray = this.tableData[index];
    console.log(this.tableArray);
  }

}
