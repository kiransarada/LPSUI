
import { Component, OnInit } from '@angular/core';
import {GraphService} from '../../services/graph.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {
  public graphData : any;
  constructor(private commonGraphService: GraphService) { }
  ngOnInit() {
    this.commonGraphService.getData('test').subscribe((graphData)=>{
      console.log(graphData,"chart data");

      this.graphData = graphData;
      // this.graphData = JSON.stringify(this.graphData);
      // this.graphData = JSON.parse(this.graphData);
      console.log(graphData,"After stringify chart data");

    })

  }

 

}
