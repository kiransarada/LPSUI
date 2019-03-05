import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGeneralComponent } from '../modal-general/modal-general.component';
// import { ModalAboutComponent } from '../modal-general/';
import { DataService } from '../../../shared/services/data.service';
import {environment} from '../../../../../src/environments/environment';


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
  ammendmentModalData : any;

  constructor(private modalService: NgbModal, private dataService: DataService) {}

  ngOnInit() {
  }
  // showModal(index) {
  //   document.getElementById('openModalButton').click();
  //   console.log('test');
  //   console.log(index);
  //   this.tableArray = this.tableData[index];
  //   console.log(this.tableArray);
  // }


  showModal(index) {
    
    // console.log()
    document.getElementById('openModalButton').click();
    // console.log('test');
    // console.log(index);
    this.tableArray = this.tableData[index];
    // console.log(this.tableArray);
    let url = environment.auditInfo+'/LeaseAuditUIService/audit/amendmentHistoryMoreInfo';
    this.dataService.getAmmendmentHistoryModalData(url, index)
      .subscribe((res) => {
    
    //  console.log(res);
    //  console.log('^^^^^^^^^^^^^^^');
      this.ammendmentModalData = res['Data'];
    //  this.general = res['general'];
    //  this.primaryContacts = res['primarycontacts'];
    //  this.secondaryContacts = res['secondarycontacts'];  
      },
        (error: any) => {
          console.log('error', error);
        });



  }

}
