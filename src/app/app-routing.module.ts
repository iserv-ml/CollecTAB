import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('../folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'rapport-ouverture',
    loadChildren: () => import('./pages/rapport-ouverture/rapport-ouverture.module').then( m => m.RapportOuverturePageModule)
  },
  {
    path: 'rapport-midi',
    loadChildren: () => import('./pages/rapport-midi/rapport-midi.module').then( m => m.RapportMidiPageModule)
  },
  {
    path: 'demande-appel',
    loadChildren: () => import('./pages/demande-appel/demande-appel.module').then( m => m.DemandeAppelPageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./pages/statistique/statistique.module').then( m => m.StatistiquePageModule)
  },
  {
    path: 'incident',
    loadChildren: () => import('./pages/incident/incident.module').then( m => m.IncidentPageModule)
  },
  {
    path: 'resultat',
    loadChildren: () => import('./pages/resultat/resultat.module').then( m => m.ResultatPageModule)
  },
    {
      path: 'resultat-add',
      loadChildren: () => import('./pages/resultat/resultat-add/resultat-add.module').then( m => m.ResultatAddPageModule)
    },
    {
      path: 'resultat-update',
      loadChildren: () => import('./pages/resultat/resultat-update/resultat-update.module').then( m => m.ResultatUpdatePageModule)
    },
    {
      path: 'resultat-view',
      loadChildren: () => import('./pages/resultat/resultat-view/resultat-view.module').then( m => m.ResultatViewPageModule)
    },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rapport',
    loadChildren: () => import('./pages/rapport/rapport.module').then( m => m.RapportPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
