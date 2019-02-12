import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-section-table',
  templateUrl: './common-section-table.component.html',
  styleUrls: ['./common-section-table.component.css']
})
export class CommonSectionTableComponent implements OnInit {
  @Input() tableData;
  constructor() { }

  ngOnInit() {
  }

}
