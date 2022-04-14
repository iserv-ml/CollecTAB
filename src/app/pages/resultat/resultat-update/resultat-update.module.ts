import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatUpdatePageRoutingModule } from './resultat-update-routing.module';

import { ResultatUpdatePage } from './resultat-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResultatUpdatePage]
})
export class ResultatUpdatePageModule {}
