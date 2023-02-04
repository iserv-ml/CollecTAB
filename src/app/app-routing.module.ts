import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeAppelComponent } from './pages/demande-appel/demande-appel.component';
import { HomeComponent } from './pages/home/home.component';
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { LoginComponent } from './pages/login/login.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AgentCreationComponent } from './pages/parametres/widgets/agent/agent-creation/agent-creation.component';
import { AgentComponent } from './pages/parametres/widgets/agent/agent.component';
import { AllianceCreationComponent } from './pages/parametres/widgets/alliance/alliance-creation/alliance-creation.component';
import { AllianceComponent } from './pages/parametres/widgets/alliance/alliance.component';
import { BureauVoteCreationComponent } from './pages/parametres/widgets/bureau-vote/bureau-vote-creation/bureau-vote-creation.component';
import { BureauVoteComponent } from './pages/parametres/widgets/bureau-vote/bureau-vote.component';
import { CandidatCreationComponent } from './pages/parametres/widgets/candidat/candidat-creation/candidat-creation.component';
import { CandidatComponent } from './pages/parametres/widgets/candidat/candidat.component';
import { CentreCreationComponent } from './pages/parametres/widgets/centre/centre-creation/centre-creation.component';
import { CentreComponent } from './pages/parametres/widgets/centre/centre.component';
import { CercleComponent } from './pages/parametres/widgets/cercle/cercle.component';
import { CommuneCreationComponent } from './pages/parametres/widgets/commune/commune-creation/commune-creation.component';
import { CommuneComponent } from './pages/parametres/widgets/commune/commune.component';
import { CoordinateurCreationComponent } from './pages/parametres/widgets/coordinateur/coordinateur-creation/coordinateur-creation.component';
import { CoordinateurComponent } from './pages/parametres/widgets/coordinateur/coordinateur.component';
import { ElectionCreationComponent } from './pages/parametres/widgets/election/election-creation/election-creation.component';
import { ElectionViewComponent } from './pages/parametres/widgets/election/election-view/election-view.component';
import { ElectionComponent } from './pages/parametres/widgets/election/election.component';
import { PartiCreationComponent } from './pages/parametres/widgets/parti/parti-creation/parti-creation.component';
import { PartiComponent } from './pages/parametres/widgets/parti/parti.component';
import { PaysCreationComponent } from './pages/parametres/widgets/pays/pays-creation/pays-creation.component';
import { PaysComponent } from './pages/parametres/widgets/pays/pays.component';
import { QuartierCreationComponent } from './pages/parametres/widgets/quartier/quartier-creation/quartier-creation.component';
import { QuartierComponent } from './pages/parametres/widgets/quartier/quartier.component';
import { RegionCreationComponent } from './pages/parametres/widgets/region/region-creation/region-creation.component';
import { RegionComponent } from './pages/parametres/widgets/region/region.component';
import { TypeIncidentCreationComponent } from './pages/parametres/widgets/type-incident/type-incident-creation/type-incident-creation.component';
import { TypeIncidentComponent } from './pages/parametres/widgets/type-incident/type-incident.component';
import { TypeRapportComponent } from './pages/parametres/widgets/type-rapport/type-rapport.component';
import { UtilisateurCreationComponent } from './pages/parametres/widgets/utilisateur/utilisateur-creation/utilisateur-creation.component';
import { UtilisateurComponent } from './pages/parametres/widgets/utilisateur/utilisateur.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { RepportingComponent } from './pages/repporting/repporting.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { StatitiquesComponent } from './pages/statitiques/statitiques.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'    
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'rapports', component: RapportsComponent
  },
  {
    path: 'statitiques', component: StatitiquesComponent
  },
  {
    path: 'incidents', component: IncidentsComponent
  },
  {
    path: 'demande-appel', component: DemandeAppelComponent
  },
  {
    path: 'resultats', component: ResultatsComponent
  },
  {
    path: 'repporting', component: RepportingComponent
  },
  {
    path: 'parametres', component: ParametresComponent
  },



  {
    path: 'alliance', component: AllianceComponent
  },
    {
      path: 'alliance-creation', component: AllianceCreationComponent
    },
  {
    path: 'agent', component: AgentComponent
  },
    {
      path: 'agent-creation', component: AgentCreationComponent
    },
  {
    path: 'bureauVote', component: BureauVoteComponent
  },
    {
      path: 'bureau-vote-creation', component: BureauVoteCreationComponent
    },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'candidat', component: CandidatComponent
  },
    {
      path: 'candidat-creation', component: CandidatCreationComponent
    },
  {
    path: 'centre', component: CentreComponent
  },
    {
      path: 'centre-creation', component: CentreCreationComponent
    },
  {
    path: 'cercle', component: CercleComponent
  },
    {
      path: 'cercle-creation', component: CentreCreationComponent
    },
  {
    path: 'commune', component: CommuneComponent
  },
    {
      path: 'commune-creation', component: CommuneCreationComponent
    },
  {
    path: 'coordinateur', component: CoordinateurComponent
  },
    {
      path: 'coordinateur-creation', component: CoordinateurCreationComponent
    },
  {
    path: 'election', component: ElectionComponent
  },
    {
      path: 'election-creation', component: ElectionCreationComponent
    },
    {
      path: 'election-view', component: ElectionViewComponent
    },
    {
      path: 'phase-creation', component: ElectionCreationComponent
    },
  {
    path: 'pays', component: PaysComponent
  },
    {
      path: 'pays-creation', component: PaysCreationComponent
    },
  {
    path: 'quartier', component: QuartierComponent
  },
    {
      path: 'quartier-creation', component: QuartierCreationComponent
    },
  {
    path: 'region', component: RegionComponent
  },
    {
      path: 'region-creation', component: RegionCreationComponent
    },
  {
    path: 'typeIncident', component: TypeIncidentComponent
  },
    {
      path: 'type-incident-creation', component: TypeIncidentCreationComponent
    },
  {
    path: 'typeRapport', component: TypeRapportComponent
  },
  {
    path: 'utilisateur', component: UtilisateurComponent
  },
    {
      path: 'utilisateur-creation', component: UtilisateurCreationComponent
    },
  {
    path: 'parti', component: PartiComponent
  },
    {
      path: 'parti-creation', component: PartiCreationComponent
    },
  
  // {
  //   path: 'clientes',
  //   loadChildren: './pages/clientes/clientes.module#ClientesModule'
  // },
  // {
  //   path: 'patios',
  //   loadChildren: './pages/patios/patios.module#PatiosModule'
  // },
  // { 
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.component').then(x => x.HomeComponent)
  // },
  // { 
  //   path: 'rapports',
  //   loadChildren: () => import('./pages/rapports/rapports.component').then(x => x.RapportsComponent)
  // },
  // { 
  //   path: 'repporting',
  //   loadChildren: () => import('./pages/repporting/repporting.component').then(x => x.RepportingComponent)
  // },
  // { 
  //   path: 'statitiques',
  //   loadChildren: () => import('./pages/statitiques/statitiques.component').then(x => x.StatitiquesComponent)
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
