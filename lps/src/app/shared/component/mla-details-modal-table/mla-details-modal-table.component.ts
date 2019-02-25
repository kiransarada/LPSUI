
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import {environment} from '../../../../../src/environments/environment';

@Component({
  selector: 'app-mla-details-modal-table',
  templateUrl: './mla-details-modal-table.component.html',
  styleUrls: ['./mla-details-modal-table.component.css']
})
export class MlaDetailsModalTableComponent implements OnInit {

  @Input() labels: Array<JSON>;
  @Input() tableData: Array<JSON>;
  title = 'app';
  tableArray = {};
  mlaDetails : any;
 
  constructor(private dataService: DataService) { }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
    // console.log(this.tableData);  
   }

  showModal(index) {
    console.log("index,mlaId",index);
    document.getElementById('openModalButton').click();
    this.tableArray = this.tableData[index];
    console.log(this.tableArray);
    // let url = 'http://localhost:12271/LeaseMoreUIService/lease/mlaPopup';
    let url = environment.leaseMoreInfo+'/LeaseMoreUIService/lease/mlaPopup';

    this.dataService.getMlaDetailsModal(url,index).subscribe((res) => {
      this.mlaDetails = res['data'];
      // console.log("res::",this.mlaDetails);
        },
          (error: any) => {
            console.log('error', error);
          });
  }
}
