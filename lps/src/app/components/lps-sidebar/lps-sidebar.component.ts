import { Component, OnInit } from '@angular/core';
import { LpsSidebarServiceService } from '../../shared/services/lps-sidebar-service.service'
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lps-sidebar',
  templateUrl: './lps-sidebar.component.html',
  styleUrls: ['./lps-sidebar.component.css'],
})


export class LpsSidebarComponent implements OnInit {

  hide:boolean =false;
  respdiv: boolean = false;
  constructor(public sideNavService: LpsSidebarServiceService, private router: Router) { }
  ngOnInit() {
    this.hide = this.sideNavService.getSideNav();
  }
  public alignRespDiv() {
  var respAlign = document.getElementById('search-sidebar');
  respAlign.classList.toggle("respAlignDiv");
  }
  private navigateToLease() {
    console.log(this.router.url);
    if (this.router.url === '/lease') {
      location.reload();
    } else {
       this.router.navigateByUrl('lease');
    }
  }
}

