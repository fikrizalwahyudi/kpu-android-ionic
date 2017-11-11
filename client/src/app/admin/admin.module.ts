import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadModule } from "angular2-image-upload";
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainSideComponent } from './main-side/main-side.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';
import { ProfileComponent } from './profile/profile.component';
import { TokohComponent } from './master/tokoh/tokoh.component';
import { TokohFormComponent } from './master/tokoh/tokoh-form/tokoh-form.component';
import { EventComponent } from './master/event/event.component';
import { EventFormComponent } from './master/event/event-form/event-form.component';
import { PaslonComponent } from './master/paslon/paslon.component';
import { PaslonFormComponent } from './master/paslon/paslon-form/paslon-form.component';
import { RekamJejakComponent } from './master/tokoh/rekam-jejak/rekam-jejak.component';
import { ProfilePendidikanComponent } from './master/tokoh/profile-pendidikan/profile-pendidikan.component';
import { JadwalComponent } from './master/jadwal/jadwal.component';
import { JadwalFormComponent } from './master/jadwal/jadwal-form/jadwal-form.component';
import { TahapanComponent } from './master/tahapan/tahapan.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    FormsModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [
    AdminComponent, 
    MainSideComponent, 
    MainHeaderComponent, 
    FooterComponent, 
    ControlSidebarComponent, 
    Dashboard1Component, 
    ProfileComponent, TokohComponent, TokohFormComponent, EventComponent, EventFormComponent, PaslonComponent, PaslonFormComponent, RekamJejakComponent, ProfilePendidikanComponent, JadwalComponent, JadwalFormComponent, TahapanComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
