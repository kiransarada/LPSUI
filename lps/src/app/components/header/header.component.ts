import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {LpsSidebarComponent} from '../lps-sidebar/lps-sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  private photo = '../../assets/PD02.jfif';
  @Input()sideBar :LpsSidebarComponent;
  notifications = [
    'You have  new messages',
    'You created 12 reports',
    'Server rebooted'
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public redirtspace(){
   window.open('https://tspace.web.att.com',"_blank");
  }
  public navigateToHome() {

    this.sideBar.ngOnInit();

   if (this.router.url === '/dashboard') {    

       this.router.navigateByUrl('/dashboard');      

      location.reload();

    } else {     

       this.router.navigateByUrl('/dashboard');     

        

    }

  }


}
