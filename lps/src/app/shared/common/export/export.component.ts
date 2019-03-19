import { Component, OnInit, Input } from '@angular/core';
import {ExportService} from '../../../services/export.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(public exportService:ExportService) { }
  @Input() type : any;

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  public exportFile(charttype){
   
    this.exportService.getExportGraphFile(charttype).subscribe((graphData)=>
    {
      window.location = graphData.location; 
    }) 
  }

}
