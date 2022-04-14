import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatAddPageRoutingModule } from './resultat-add-routing.module';

import { ResultatAddPage } from './resultat-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResultatAddPage]
})
export class ResultatAddPageModule {}
