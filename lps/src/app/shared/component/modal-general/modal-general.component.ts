import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-general',
  templateUrl: './modal-general.component.html',
  styleUrls: ['./modal-general.component.css']
})
export class ModalGeneralComponent implements OnInit {

  @Input() title = `Information`;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

}
