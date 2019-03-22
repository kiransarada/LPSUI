import { Component, OnInit } from '@angular/core';
import { LpsSidebarServiceService } from '../../shared/services/lps-sidebar-service.service'
import { Injectable } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lps-sidebar',
    templateUrl: './lps-sidebar.component.html',
  styleUrls: ['./lps-sidebar.component.css'],
}) 

export class LpsSidebarComponent implements OnInit {

  hide:boolean =false;
    respdiv: boolean = false;
  sideNavItems:any;
  constructor(public sideNavService: LpsSidebarServiceService, private router: Router) { }
  ngOnInit() {
    console.log(this.router);
    console.log(this.router.url);
   // console.log(this.router.routerState);
    //console.log(this.router.routerState.snapshot);

    // alert('hello');
    this.sideNavItems =
        [{  

          routerLink : "/dashboard",
          icon : "dashboard",
          active : "active",
          label : "Dashboard"
        },

        {       

          routerLink : "/lease",
          icon : "wpforms",
          active : "",
          label : "Lease Search"
        }
      ]  

    this.hide = this.sideNavService.getSideNav();

  }

 

  public selectOption(index){
    
    for (let i = 0; i < this.sideNavItems.length; i++) { 
      if(i != index){      
        this.sideNavItems[i].active = " ";}
    }

    this.sideNavItems[index].active = "active";
    console.log(this.sideNavItems);
  }

 


  public alignRespDiv() {
  var respAlign = document.getElementById('search-sidebar');
  respAlign.classList.toggle("respAlignDiv");
  }

  public checkResp() {
    var respCheck = this.sideNavService.getSideNav()  
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

     

       location.reload();

    }

  }

 

  private navigateToDashboard(){

    console.log(this.router);

  }

}

 