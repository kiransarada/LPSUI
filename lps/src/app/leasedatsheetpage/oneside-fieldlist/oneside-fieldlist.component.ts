import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oneside-fieldlist',
  templateUrl: './oneside-fieldlist.component.html',
  styleUrls: ['./oneside-fieldlist.component.css']
})
export class OnesideFieldlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() fieldlist: Array<JSON>;
}
