import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatViewPage } from './resultat-view.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatViewPageRoutingModule {}
