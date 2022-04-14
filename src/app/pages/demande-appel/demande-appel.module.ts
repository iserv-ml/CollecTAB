import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeAppelPageRoutingModule } from './demande-appel-routing.module';

import { DemandeAppelPage } from './demande-appel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeAppelPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DemandeAppelPage]
})
export class DemandeAppelPageModule {}
