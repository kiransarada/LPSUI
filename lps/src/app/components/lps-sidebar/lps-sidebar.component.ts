import { Component, OnInit } from '@angular/core';
import { LpsSidebarServiceService } from '../../shared/services/lps-sidebar-service.service'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-lps-sidebar',
  templateUrl: './lps-sidebar.component.html',
  styleUrls: ['./lps-sidebar.component.css'],
})


export class LpsSidebarComponent implements OnInit {

  hide:boolean =false;
  respdiv: boolean = false;
  constructor(public sideNavService: LpsSidebarServiceService) { }
  ngOnInit() { 
    this.hide = this.sideNavService.getSideNav();
  }
  public alignRespDiv(){
  var respAlign = document.getElementById("search-sidebar");
  respAlign.classList.toggle("respAlignDiv");
  }
}

