import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { OutletsComponent } from './outlets/outlets.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminviewoutletsComponent } from './adminviewoutlets/adminviewoutlets.component';
import { AddoutletComponent } from './addoutlet/addoutlet.component';
import { EditdeleteoutletComponent } from './editdeleteoutlet/editdeleteoutlet.component';
import { DeleteoutletComponent } from './deleteoutlet/deleteoutlet.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home", component:HomeComponent },
  {path:"contactus", component:ContactusComponent},
  {path:"events", component:EventsComponent},
  {path:"outlets", component:OutletsComponent},
  {path:"volunteers", component:VolunteersComponent},
  {path:"signin", component:SigninComponent},
  {path:"admin", component:AdminComponent},
  {path:"adminviewoutlets", component:AdminviewoutletsComponent},
  {path:"addoutlet", component:AddoutletComponent},
  {path:"editdeleteoutlet", component:EditdeleteoutletComponent},
  {path:"deleteoutlet", component:DeleteoutletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ HomeComponent, ContactusComponent, EventsComponent, OutletsComponent, AdminComponent, SigninComponent, AdminviewoutletsComponent, AddoutletComponent, EditdeleteoutletComponent, DeleteoutletComponent];