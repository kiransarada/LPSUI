import { Component, OnInit, Input} from '@angular/core';
import { LeaseTableService } from './lps-table.service';


@Component({
  selector: 'app-lps-table',
  templateUrl: './lps-table.component.html',
  styleUrls: ['./lps-table.component.css']
})
export class LpsTableComponent implements OnInit {

  headerArray = {};
  leasePackegeData = {};
  constructor(private ltService: LeaseTableService) { }

  ngOnInit() {  
  
  }

  @Input() labels: Array<JSON>;
  @Input() tableData: Array<JSON>;
}
