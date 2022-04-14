import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatAddPage } from './resultat-add.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatAddPageRoutingModule {}
