import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
}
