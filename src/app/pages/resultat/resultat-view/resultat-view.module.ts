import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatViewPageRoutingModule } from './resultat-view-routing.module';

import { ResultatViewPage } from './resultat-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatViewPageRoutingModule
  ],
  declarations: [ResultatViewPage]
})
export class ResultatViewPageModule {}
