import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiquePageRoutingModule } from './statistique-routing.module';

import { StatistiquePage } from './statistique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiquePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StatistiquePage]
})
export class StatistiquePageModule {}
