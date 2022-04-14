import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatPage } from './resultat.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatPage
  },
  {
    path: 'resultat-add',
    loadChildren: () => import('./resultat-add/resultat-add.module').then( m => m.ResultatAddPageModule)
  },
  {
    path: 'resultat-update',
    loadChildren: () => import('./resultat-update/resultat-update.module').then( m => m.ResultatUpdatePageModule)
  },
  {
    path: 'resultat-view',
    loadChildren: () => import('./resultat-view/resultat-view.module').then( m => m.ResultatViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatPageRoutingModule {}
