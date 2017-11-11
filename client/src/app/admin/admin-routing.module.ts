import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AuthGuard } from '../library/_guards/auth.guards';

import { AdminComponent } from './admin.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TokohComponent } from './master/tokoh/tokoh.component';
import { TokohFormComponent } from './master/tokoh/tokoh-form/tokoh-form.component';
import { EventComponent } from './master/event/event.component';
import { EventFormComponent } from './master/event/event-form/event-form.component';
import { PaslonComponent } from './master/paslon/paslon.component';
import { PaslonFormComponent } from './master/paslon/paslon-form/paslon-form.component';
import { JadwalComponent } from './master/jadwal/jadwal.component';
import { JadwalFormComponent } from './master/jadwal/jadwal-form/jadwal-form.component';
import { TahapanComponent } from './master/tahapan/tahapan.component';

// canActivate:[AuthGuard]
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: '', component: TokohComponent },
          { path: 'personal', component: ProfileComponent },
          { path: 'profile', component: TokohComponent },
          { path: 'profile-form', component: TokohFormComponent },
          { path: 'profile-edit/:id', component: TokohFormComponent },
          { path: 'event', component: EventComponent },
          { path: 'event-form', component: EventFormComponent },
          { path: 'event-edit/:id', component: EventFormComponent },
          { path: 'paslon', component: PaslonComponent },
          { path: 'paslon-form', component: PaslonFormComponent },
          { path: 'paslon-edit/:id', component: PaslonFormComponent },
          { path: 'jadwal', component: JadwalComponent },
          { path: 'jadwal-form', component: JadwalFormComponent },
          { path: 'jadwal-edit/:id', component: JadwalFormComponent },
          { path: 'tahapan', component: TahapanComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
