import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { OutletsComponent } from './outlets/outlets.component';
import {OutletserviceService} from './outletservice.service';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { VolunteerserviceService} from './volunteerservice.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutingComponent,
    ContactusComponent,
    EventsComponent,
    OutletsComponent,
    VolunteersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OutletserviceService, VolunteerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
