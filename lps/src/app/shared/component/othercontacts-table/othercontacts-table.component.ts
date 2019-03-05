import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import {environment} from '../../../../../src/environments/environment';

@Component({
  selector: 'app-othercontacts-table',
  templateUrl: './othercontacts-table.component.html',
  styleUrls: ['./othercontacts-table.component.css']
})
export class OthercontactsTableComponent implements OnInit {

  @Input() labels: Array<JSON>;
  @Input() tableData: Array<JSON>;
  title = 'app';
  tableArray = {};
  general : any;
  primaryContacts : any;
  secondaryContacts : any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
   console.log('rsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd');
    console.log(this.tableData);
    
   }
  showModal(index) {
    
    // console.log()
    document.getElementById('openModalButton').click();
    console.log('test');
    // console.log(index);
    this.tableArray = this.tableData[index];
    console.log(this.tableArray);
    let url = environment.contact+'/LeaseContactUIService/contact/information';
    this.dataService.getContactLookupModal(url,index)
      .subscribe((res) => {
    
     console.log(res);
     console.log('^^^^^^^^^^^^^^^');
     this.general = res['general'];
     this.primaryContacts = res['primarycontacts'];
     this.secondaryContacts = res['secondarycontacts'];  
      },
        (error: any) => {
          console.log('error', error);
        });



  }
}
