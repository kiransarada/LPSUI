import { Component, OnInit } from '@angular/core';
import { LpsSidebarServiceService } from '../../shared/services/lps-sidebar-service.service'

@Component({
  selector: 'app-lps-sidebar',
  templateUrl: './lps-sidebar.component.html',
  styleUrls: ['./lps-sidebar.component.css'],
})


export class LpsSidebarComponent implements OnInit {

  hide:boolean =false;
  constructor(public sideNavService: LpsSidebarServiceService) { }

  ngOnInit() {

    this.hide = this.sideNavService.getSideNav();
  }

}
