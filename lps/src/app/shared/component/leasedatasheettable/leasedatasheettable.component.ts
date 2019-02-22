
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-leasedatasheettable',
  templateUrl: './leasedatasheettable.component.html',
  styleUrls: ['./leasedatasheettable.component.css']
})
export class LeasedatasheettableComponent implements OnInit {
  @Input() labels: Array<JSON>;
  @Input() tableData: Array<JSON>;
  noData : boolean;
  headerArray = {};
  leasePackegeData = {};
  constructor() { }

  ngOnInit() {
    // this.ngAfterViewInit();
  }

  // ngAfterViewInit()
  // {
  //   console.log(this.tableData);
  //   alert('hello');
  //   alert(this.tableData);
    
  //   alert(this.tableData.length);
  //   if(this.tableData.length > 0){
  //     this.noData = true;
  //   }else{
  //     this.noData = false;
  //   }
  // }
}

