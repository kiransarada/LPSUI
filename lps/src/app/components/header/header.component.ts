import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  private photo = '../../assets/PD02.jfif';
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
    console.log(this.router.url);
    if (this.router.url === '/') {
      location.reload();
    } else {
       this.router.navigateByUrl('');
    }
  }
}
