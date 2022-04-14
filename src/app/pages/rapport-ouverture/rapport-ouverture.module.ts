import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapportOuverturePageRoutingModule } from './rapport-ouverture-routing.module';

import { RapportOuverturePage } from './rapport-ouverture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapportOuverturePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RapportOuverturePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RapportOuverturePageModule {}
