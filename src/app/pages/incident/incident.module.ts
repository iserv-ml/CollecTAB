import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentPageRoutingModule } from './incident-routing.module';

import { IncidentPage } from './incident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IncidentPage]
})
export class IncidentPageModule {}
