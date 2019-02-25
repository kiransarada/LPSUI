import { Component, OnInit, Input } from '@angular/core';

import { SiteLinkToFilenet } from '../link-to-filenet/site-general-link-to-filenet-model';

@Component({
  selector: 'app-site-general-link-to-filenet',
  templateUrl: './site-general-link-to-filenet.component.html',
  styleUrls: ['./site-general-link-to-filenet.component.css']
})
export class SiteGeneralLinkToFilenetComponent implements OnInit {

  @Input() parentJson;
  constructor() {}
  siteLinkToFilenet: SiteLinkToFilenet[];

  ngOnInit() {
    console.log(this.parentJson);
    this.siteLinkToFilenet = this.parentJson['linkToFilenetDocument'];
  }
}
