import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeAppelPage } from './demande-appel.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeAppelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeAppelPageRoutingModule {}
