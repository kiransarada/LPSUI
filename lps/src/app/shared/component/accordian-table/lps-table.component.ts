import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-lps-table',
  templateUrl: './lps-table.component.html',
  styleUrls: ['./lps-table.component.css']
})
export class LpsTableComponent implements OnInit {
  @Input() labels: Array<JSON>;
  @Input() tableData: Array<JSON>;
  headerArray = {};
  leasePackegeData = {};
  constructor() { }

  ngOnInit() {

  }
}
