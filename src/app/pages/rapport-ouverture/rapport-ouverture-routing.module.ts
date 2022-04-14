import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapportOuverturePage } from './rapport-ouverture.page';

const routes: Routes = [
  {
    path: '',
    component: RapportOuverturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapportOuverturePageRoutingModule {}
