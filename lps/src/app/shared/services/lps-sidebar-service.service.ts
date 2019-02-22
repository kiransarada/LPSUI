import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LpsSidebarServiceService {
  hideSideNav: boolean = false;
  constructor() { }

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
    console.log("inside sidenav", this.hideSideNav)
  }
  getSideNav()
  {
    return this.hideSideNav;
  }
}
