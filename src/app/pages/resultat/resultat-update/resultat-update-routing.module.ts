import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatUpdatePage } from './resultat-update.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatUpdatePageRoutingModule {}
