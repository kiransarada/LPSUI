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
  public checkResp() {
    var respCheck = this.sideNavService.getSideNav()
    // alert(respCheck);
    if(respCheck == false){
      document.getElementById("search-sidebar").style.width = "85vw";
      document.getElementById("footer-pos").style.left = "14%"; 
    }
    else{
    document.getElementById("search-sidebar").style.width = "95vw";
    document.getElementById("footer-pos").style.left = "9%"; 
  }
}
  private navigateToLease() {
    if (this.router.url === '/') {
      location.reload();
    } else {
       this.router.navigateByUrl('');
    }
  }
}

