import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { OutletsComponent } from './outlets/outlets.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

const routes: Routes = [
  {path:"home", component:HomeComponent },
  {path:"contactus", component:ContactusComponent},
  {path:"events", component:EventsComponent},
  {path:"outlets", component:OutletsComponent},
  {path:"volunteers", component:VolunteersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ HomeComponent, ContactusComponent, EventsComponent, OutletsComponent ];