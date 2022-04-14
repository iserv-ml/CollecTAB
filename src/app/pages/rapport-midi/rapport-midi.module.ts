import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapportMidiPageRoutingModule } from './rapport-midi-routing.module';

import { RapportMidiPage } from './rapport-midi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapportMidiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RapportMidiPage]
})
export class RapportMidiPageModule {}
