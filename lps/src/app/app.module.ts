import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RoutingModule } from './app.route';
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonSectionTableComponent } from './shared/table/common-section-table.component';
import { MasterComponent } from './shared/component/master.component';
import { LpsTableComponent } from './shared/component/accordian-table/lps-table.component';
import { LpsSiteSearchComponent } from './Site/lps-site-search.component';
import { KeysPipe } from './shared/pipes/keys.pipes';
import { DataService } from './shared/services/data.service';
import { LpsSiteOverlayComponent } from './Site/lps-site-overlay.component';
import { SiteGeneralGeneralComponent } from './Site/site-tabs/General/general/site-general-general.component';
import { SiteGeneralAssociatedSitesComponent } from './Site/site-tabs/General/assc-sites/site-general-associated-sites.component';
import { SiteGeneralAssocMstrSiteComponent } from './Site/site-tabs/General/assoc-master-site/site-general-assoc-mstr-site.component';
import { SiteGeneralDetailsComponent } from './Site/site-tabs/General/details/site-general-details.component';
import { SiteGeneralPrimaryAddrComponent } from './Site/site-tabs/General/primary-addr/site-general-primary-addr.component';
import { SiteGeneralReportingComponent } from './Site/site-tabs/General/reporting/site-general-reporting.component';
import { SiteGeneralLinkToFilenetComponent } from './Site/site-tabs/General/link-to-filenet/site-general-link-to-filenet.component';
import { SiteContractsLeaseComponent } from './Site/site-tabs/Contracts/Lease/site-contracts-lease.component';
import { SiteDynamicOverlayComponent } from './Site/site-tabs/site-dynamic-overlay.component';
import { SiteDynamicTabComponent } from './Site/site-tabs/site-dynamic-tab.component';
import { FooterComponent } from './footer/footer.component';
import { OnesideFieldlistComponent } from './leasedatsheetpage/oneside-fieldlist/oneside-fieldlist.component';
import { LeasedatsheetpageComponent } from './leasedatsheetpage/leasedatsheetpage.component';
import { LeaseoverlayiconComponent } from './leaseoverlayicon/leaseoverlayicon.component';
import { ChartsComponent } from './charts/charts.component';

import { ChartModule } from 'angular-highcharts';
import { LeaseBasicService } from './lease-details-tabs/lease-tab.service';
import { LeasedatasheetsitesummaryComponent } from './leasedatsheetpage/leasedatasheetsitesummary/leasedatasheetsitesummary.component';


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
		ChartsComponent,
		LeaseoverlayiconComponent,
		LeasedatsheetpageComponent,
		OnesideFieldlistComponent,
		FooterComponent,
		LeasedatasheetsitesummaryComponent
	],
	imports: [
		BrowserModule,
		RoutingModule,
		NgbModule,
		HttpClientModule,
		AngularFontAwesomeModule,
		BreadcrumbsModule,
		SidebarModule.forRoot(),
		 ChartModule 
	],
	providers: [DataService,LeaseBasicService],
	bootstrap: [AppComponent]
})
export class AppModule { }
