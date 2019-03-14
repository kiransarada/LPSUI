import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RoutingModule } from './app.route';
import { SidebarModule } from 'ng-sidebar';
import { DataService } from './shared/services/data.service';
import { KeysPipe } from './shared/pipes/keys.pipes';
import { HttpClientModule } from '@angular/common/http';
import {BreadcrumbsModule} from 'ng6-breadcrumbs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LpsSiteSearchComponent } from './Site/lps-site-search.component';
import { LpsSiteOverlayComponent } from './Site/lps-site-overlay.component';
import { SiteGeneralGeneralComponent } from './Site/site-Tabs/General/general/site-general-general.component';
import { SiteGeneralAssociatedSitesComponent } from './Site/site-Tabs/General/assc-sites/site-general-associated-sites.component';
import { SiteGeneralAssocMstrSiteComponent } from './Site/site-tabs/General/assoc-master-site/site-general-assoc-mstr-site.component';
import { SiteGeneralDetailsComponent } from './Site/site-tabs/General/details/site-general-details.component';
import { SiteGeneralPrimaryAddrComponent } from './Site/site-tabs/General/primary-addr/site-general-primary-addr.component';
import { SiteGeneralReportingComponent } from './Site/site-tabs/General/reporting/site-general-reporting.component';
import { SiteGeneralLinkToFilenetComponent } from './Site/site-tabs/General/link-to-filenet/site-general-link-to-filenet.component';
import { CommonSectionTableComponent } from './shared/table/common-section-table.component';
import { SiteContractsLeaseComponent } from './Site/site-tabs/Contracts/Lease/site-contracts-lease.component';
import { SiteDynamicOverlayComponent } from './Site/site-tabs/site-dynamic-overlay.component';
import { SiteDynamicTabComponent } from './Site/site-tabs/site-dynamic-tab.component';
import { MasterComponent } from './shared/component/master.component';
import { LpsTableComponent } from './shared/component/accordian-table/lps-table.component';
import { AmendmentTableComponent } from './shared/component/amendment-table/amendment-table.component';
import { OthercontactsTableComponent } from './shared/component/othercontacts-table/othercontacts-table.component';
import { ApiService } from './shared/services/api.service';
import { LeasedatsheetpageComponent } from './components/leasedatasheet/leasedatsheetpage/leasedatsheetpage.component';
import { OnesideFieldlistComponent } from './components/leasedatasheet/leasedatsheetpage/oneside-fieldlist/oneside-fieldlist.component';
import { LeasedatasheetsitesummaryComponent } from './components/leasedatasheet/leasedatsheetpage/leasedatasheetsitesummary/leasedatasheetsitesummary.component';
import { LeaseBasicService } from './components/leasedatasheet/lease-details-tabs/lease-tab.service';
import { LeaseoverlayiconComponent } from './components/leasedatasheet/leaseoverlayicon/leaseoverlayicon.component';
import { MlaDetailsModalTableComponent } from './shared/component/mla-details-modal-table/mla-details-modal-table.component';
import {LeasedatasheettableComponent} from './shared/component/leasedatasheettable/leasedatasheettable.component';

import { ChartModule } from 'angular-highcharts';

import { PaginationComponent } from './shared/component/pagination/pagination.component';
import { LeasesearchcomponentComponent } from './shared/component/leasesearchcomponent/leasesearchcomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeasetableService } from './shared/component/search-table-gen/leasetable.service';
import { FooterComponent } from './components/footer/footer.component';
import { LpsSidebarComponent } from './components/lps-sidebar/lps-sidebar.component';
import { LpsSidebarServiceService } from './shared/services/lps-sidebar-service.service';
import { ChartsComponent } from './../app/components/leasedatasheet/charts/charts.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { commonChartComponent } from './shared/common/common-chart/common-chart.component';
import { GraphService } from './services/graph.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LpsSiteSearchComponent,
    LpsSiteOverlayComponent,
    SiteGeneralGeneralComponent,
    SiteGeneralAssociatedSitesComponent,
    SiteGeneralAssocMstrSiteComponent,
    SiteGeneralDetailsComponent,
    SiteGeneralPrimaryAddrComponent,
    SiteGeneralReportingComponent,
    SiteGeneralLinkToFilenetComponent,
    CommonSectionTableComponent,
    KeysPipe,
    SiteContractsLeaseComponent,
    SiteDynamicOverlayComponent,
    SiteDynamicTabComponent,
    MasterComponent,
    LpsTableComponent,
    AmendmentTableComponent,
    OthercontactsTableComponent,
    LeasedatsheetpageComponent,
    OnesideFieldlistComponent,
    LeasedatasheetsitesummaryComponent,
    LeaseoverlayiconComponent,
    MlaDetailsModalTableComponent,
    LeasesearchcomponentComponent,
    PaginationComponent,
    FooterComponent,
    LpsSidebarComponent,
    LeasedatasheettableComponent,
    ChartsComponent,
    DashboardComponent,
    commonChartComponent,
    
      ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BreadcrumbsModule,
    FormsModule,
		ReactiveFormsModule,
    SidebarModule.forRoot(),
    ChartModule,
    NgxSpinnerModule
  
   ],
  providers: [DataService,LeaseBasicService,ApiService,
              LpsSidebarServiceService, LeasetableService,
              GraphService],
  bootstrap: [AppComponent]

})
export class AppModule { }
