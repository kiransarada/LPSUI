import { Component, OnInit, Input } from '@angular/core';
import { SitePrimaryAddr } from 'src/app/Site/site-tabs/General/primary-addr/site-general-primary-addr-model';

@Component({
  selector: 'app-site-general-primary-addr',
  templateUrl: './site-general-primary-addr.component.html',
  styleUrls: ['./site-general-primary-addr.component.css']
})
export class SiteGeneralPrimaryAddrComponent implements OnInit {
  @Input() parentJson;
  constructor() { }
  sitePrimaryAddr: SitePrimaryAddr[];

  ngOnInit() {
    console.log(this.parentJson);
    this.sitePrimaryAddr = this.parentJson['primaryAddress'];
  }
}
