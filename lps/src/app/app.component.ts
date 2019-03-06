import { Component, DoCheck, ViewChild, OnInit } from '@angular/core';
import { LpsSidebarServiceService } from './shared/services/lps-sidebar-service.service';
import { LpsSidebarComponent } from './components/lps-sidebar/lps-sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'LPS';
  hide: boolean = false;
  private bar: LpsSidebarComponent;
  constructor(private sidebar: LpsSidebarServiceService, private router: Router) {
  }
  // ngOnInit() {
  //   this.router.navigateByUrl('dashboard');
  // }
  ngDoCheck() {
    this.hide = this.sidebar.getSideNav();
    console.log('this.hide', this.hide);
  }
}
