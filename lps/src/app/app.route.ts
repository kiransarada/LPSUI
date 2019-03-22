import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './shared/component/master.component';
import { LeasesearchcomponentComponent } from './shared/component/leasesearchcomponent/leasesearchcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
     {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, data: { breadcrumb: '/Dashboard'}},
    // {path: 'search', component: MasterComponent, data: { breadcrumb: '/Home'}},
    {path: 'lease', component: MasterComponent, data: { breadcrumb: '/Lease Search'}},
    {path: 'site', component: MasterComponent, data: { breadcrumb: '/Site'}}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ]
})
export class RoutingModule { }
