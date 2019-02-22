import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './shared/component/master.component';
import { LeasesearchcomponentComponent } from './shared/component/leasesearchcomponent/leasesearchcomponent.component';



const routes: Routes = [
    {path: '', component: MasterComponent, data: { breadcrumb: '/Home/'}},
    {path: 'lease', component: LeasesearchcomponentComponent, data: { breadcrumb: 'Lease Search'}},
    {path: 'site', component: MasterComponent, data: { breadcrumb: '/Site'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ]
})
export class RoutingModule { }
