import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapportMidiPage } from './rapport-midi.page';

const routes: Routes = [
  {
    path: '',
    component: RapportMidiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapportMidiPageRoutingModule {}
