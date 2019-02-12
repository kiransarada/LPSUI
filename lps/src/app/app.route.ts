import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './shared/component/master.component';



const routes: Routes = [
    {path: '', component: MasterComponent, data: { breadcrumb: '/Home/'}},
    {path: 'lease', component: MasterComponent, data: { breadcrumb: '/Lease'}},
    {path: 'site', component: MasterComponent, data: { breadcrumb: '/Site'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ]
})
export class RoutingModule { }
