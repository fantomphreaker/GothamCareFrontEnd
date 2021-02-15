import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { OutletsComponent } from './outlets/outlets.component';
import {OutletserviceService} from './services/outletservice.service';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { VolunteerserviceService} from './services/volunteerservice.service';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { SigninserviceService } from './services/signinservice.service';
import { AdminviewoutletsComponent } from './adminviewoutlets/adminviewoutlets.component';
import { AddoutletComponent } from './addoutlet/addoutlet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditdeleteoutletComponent } from './editdeleteoutlet/editdeleteoutlet.component';
import { EditdeleteoutletserviceService} from './services/editdeleteoutletservice.service';
import { DeleteoutletComponent } from './deleteoutlet/deleteoutlet.component';
import { DeleteoutletserviceService } from './services/deleteoutletservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutingComponent,
    ContactusComponent,
    EventsComponent,
    OutletsComponent,
    VolunteersComponent,
    SigninComponent,
    AdminComponent,
    AdminviewoutletsComponent,
    AddoutletComponent,
    EditdeleteoutletComponent,
    DeleteoutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OutletserviceService, VolunteerserviceService, SigninserviceService, EditdeleteoutletserviceService, DeleteoutletserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
