import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() dropDownData : any;
  @Output() changeEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  updateSecondDropDown() {
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    this.changeEvent.emit(value);
  }

}
