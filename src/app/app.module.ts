import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AvatarModule } from '@coreui/angular';
import {MatIconModule} from '@angular/material/icon';
import { CustomOverlayContainer } from './theme/util/CustomOverlayContainer';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FloatLabelType} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
// import { cilList, cilShieldAlt } from '@coreui/icons';

// import {MatProgressSpinnerModule} from '@angular/material'

// import { MaterialModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StatitiquesComponent } from './pages/statitiques/statitiques.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { RepportingComponent } from './pages/repporting/repporting.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { SidebarModule } from '@coreui/angular';
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { DemandeAppelComponent } from './pages/demande-appel/demande-appel.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { LoginComponent } from './pages/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCommonModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
// import  { NgxDatatableModule }  from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { AlertModule, ButtonModule } from '@coreui/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { cibFlutter } from '@coreui/icons';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AgentComponent } from './pages/parametres/widgets/agent/agent.component';
import { AllianceComponent } from './pages/parametres/widgets/alliance/alliance.component';
import { BureauVoteComponent } from './pages/parametres/widgets/bureau-vote/bureau-vote.component';
import { CandidatComponent } from './pages/parametres/widgets/candidat/candidat.component';
import { CentreComponent } from './pages/parametres/widgets/centre/centre.component';
import { CercleComponent } from './pages/parametres/widgets/cercle/cercle.component';
import { CoordinateurComponent } from './pages/parametres/widgets/coordinateur/coordinateur.component';
import { CommuneComponent } from './pages/parametres/widgets/commune/commune.component';
import { ElectionComponent } from './pages/parametres/widgets/election/election.component';
import { QuartierComponent } from './pages/parametres/widgets/quartier/quartier.component';
import { PaysComponent } from './pages/parametres/widgets/pays/pays.component';
import { RegionComponent } from './pages/parametres/widgets/region/region.component';
import { UtilisateurComponent } from './pages/parametres/widgets/utilisateur/utilisateur.component';
import { TypeRapportComponent } from './pages/parametres/widgets/type-rapport/type-rapport.component';
import { TypeIncidentComponent } from './pages/parametres/widgets/type-incident/type-incident.component';
import { IncidentViewComponent } from './pages/incidents/incident-view/incident-view.component';
import { IncidentUpdateComponent } from './pages/incidents/incident-update/incident-update.component';
import { StatistiqueViewComponent } from './pages/statitiques/statistique-view/statistique-view.component';
import { StatistiqueUpdateComponent } from './pages/statitiques/statistique-update/statistique-update.component';
import { ResultatViewComponent } from './pages/resultats/resultat-view/resultat-view.component';
import { RapportViewComponent } from './pages/rapports/rapport-view/rapport-view.component';
import { RapportUpdateComponent } from './pages/rapports/rapport-update/rapport-update.component';
import { DemandeAppelViewComponent } from './pages/demande-appel/demande-appel-view/demande-appel-view.component';
import { DemandeAppelUpdateComponent } from './pages/demande-appel/demande-appel-update/demande-appel-update.component';
import { AgentCreationComponent } from './pages/parametres/widgets/agent/agent-creation/agent-creation.component';
import { AgentViewComponent } from './pages/parametres/widgets/agent/agent-view/agent-view.component';
import { AgentUpdateComponent } from './pages/parametres/widgets/agent/agent-update/agent-update.component';
import { AllianceCreationComponent } from './pages/parametres/widgets/alliance/alliance-creation/alliance-creation.component';
import { AllianceViewComponent } from './pages/parametres/widgets/alliance/alliance-view/alliance-view.component';
import { AllianceUpdateComponent } from './pages/parametres/widgets/alliance/alliance-update/alliance-update.component';
import { BureauVoteCreationComponent } from './pages/parametres/widgets/bureau-vote/bureau-vote-creation/bureau-vote-creation.component';
import { BureauVoteUpdateComponent } from './pages/parametres/widgets/bureau-vote/bureau-vote-update/bureau-vote-update.component';
import { BureauVoteViewComponent } from './pages/parametres/widgets/bureau-vote/bureau-vote-view/bureau-vote-view.component';
import { BureauVoteAffectationAgentComponent } from './pages/parametres/widgets/bureau-vote/bureau-vote-affectation-agent/bureau-vote-affectation-agent.component';
import { CandidatCreationComponent } from './pages/parametres/widgets/candidat/candidat-creation/candidat-creation.component';
import { CandidatUpdateComponent } from './pages/parametres/widgets/candidat/candidat-update/candidat-update.component';
import { CandidatViewComponent } from './pages/parametres/widgets/candidat/candidat-view/candidat-view.component';
import { CentreCreationComponent } from './pages/parametres/widgets/centre/centre-creation/centre-creation.component';
import { CentreViewComponent } from './pages/parametres/widgets/centre/centre-view/centre-view.component';
import { CentreUpdateComponent } from './pages/parametres/widgets/centre/centre-update/centre-update.component';
import { CercleCreationComponent } from './pages/parametres/widgets/cercle/cercle-creation/cercle-creation.component';
import { CercleViewComponent } from './pages/parametres/widgets/cercle/cercle-view/cercle-view.component';
import { CercleUpdateComponent } from './pages/parametres/widgets/cercle/cercle-update/cercle-update.component';
import { CommuneCreationComponent } from './pages/parametres/widgets/commune/commune-creation/commune-creation.component';
import { CommuneUpdateComponent } from './pages/parametres/widgets/commune/commune-update/commune-update.component';
import { CommuneViewComponent } from './pages/parametres/widgets/commune/commune-view/commune-view.component';
import { CoordinateurCreationComponent } from './pages/parametres/widgets/coordinateur/coordinateur-creation/coordinateur-creation.component';
import { CoordinateurUpdateComponent } from './pages/parametres/widgets/coordinateur/coordinateur-update/coordinateur-update.component';
import { CoordinateurViewComponent } from './pages/parametres/widgets/coordinateur/coordinateur-view/coordinateur-view.component';
import { ElectionCreationComponent } from './pages/parametres/widgets/election/election-creation/election-creation.component';
import { ElectionUpdateComponent } from './pages/parametres/widgets/election/election-update/election-update.component';
import { PhaseUpdateComponent } from './pages/parametres/widgets/election/phase-update/phase-update.component';
import { PhaseCreationComponent } from './pages/parametres/widgets/election/phase-creation/phase-creation.component';
import { PaysCreationComponent } from './pages/parametres/widgets/pays/pays-creation/pays-creation.component';
import { PaysUpdateComponent } from './pages/parametres/widgets/pays/pays-update/pays-update.component';
import { PaysViewComponent } from './pages/parametres/widgets/pays/pays-view/pays-view.component';
import { QuartierCreationComponent } from './pages/parametres/widgets/quartier/quartier-creation/quartier-creation.component';
import { QuartierViewComponent } from './pages/parametres/widgets/quartier/quartier-view/quartier-view.component';
import { QuartierUpdateComponent } from './pages/parametres/widgets/quartier/quartier-update/quartier-update.component';
import { RegionCreationComponent } from './pages/parametres/widgets/region/region-creation/region-creation.component';
import { RegionUpdateComponent } from './pages/parametres/widgets/region/region-update/region-update.component';
import { RegionViewComponent } from './pages/parametres/widgets/region/region-view/region-view.component';
import { TypeIncidentCreationComponent } from './pages/parametres/widgets/type-incident/type-incident-creation/type-incident-creation.component';
import { TypeIncidentUpdateComponent } from './pages/parametres/widgets/type-incident/type-incident-update/type-incident-update.component';
import { TypeIncidentViewComponent } from './pages/parametres/widgets/type-incident/type-incident-view/type-incident-view.component';
import { UtilisateurCreationComponent } from './pages/parametres/widgets/utilisateur/utilisateur-creation/utilisateur-creation.component';
import { UtilisateurUpdateComponent } from './pages/parametres/widgets/utilisateur/utilisateur-update/utilisateur-update.component';
import { UtilisateurViewComponent } from './pages/parametres/widgets/utilisateur/utilisateur-view/utilisateur-view.component';
import { DeleteComponent } from './pages/parametres/widgets/agent/delete/delete.component';
import { PartiComponent } from './pages/parametres/widgets/parti/parti.component';
import { PartiCreationComponent } from './pages/parametres/widgets/parti/parti-creation/parti-creation.component';
import { PartiViewComponent } from './pages/parametres/widgets/parti/parti-view/parti-view.component';
import { PartiUpdateComponent } from './pages/parametres/widgets/parti/parti-update/parti-update.component';
import { TypeRapportCreationComponent } from './pages/parametres/widgets/type-rapport/type-rapport-creation/type-rapport-creation.component';
import { TypeRapportUpdateComponent } from './pages/parametres/widgets/type-rapport/type-rapport-update/type-rapport-update.component';
import { TypeRapportViewComponent } from './pages/parametres/widgets/type-rapport/type-rapport-view/type-rapport-view.component';
import { TabBarComponent } from './pages/nav-bar/tab-bar/tab-bar.component';
import { ShowCercleComponent } from './pages/rapports/show-cercle/show-cercle.component';
import { ShowCommuneComponent } from './pages/rapports/show-commune/show-commune.component';
import { ShowQuartierComponent } from './pages/rapports/show-quartier/show-quartier.component';
import { ShowCentreComponent } from './pages/rapports/show-centre/show-centre.component';
import { ShowBureauVoteComponent } from './pages/rapports/show-bureau-vote/show-bureau-vote.component';
import { ShowRapportComponent } from './pages/rapports/show-rapport/show-rapport.component';
// import { DeleteComponentAlliance } from './pages/parametres/widgets/alliance/delete/delete.component';
import { LottieModule } from 'ngx-lottie';
import { WantToAffectComponent } from './pages/parametres/widgets/agent/agent-creation/want-to-affect/want-to-affect.component';
import { ResultatUpdateComponent } from './pages/resultats/resultat-update/resultat-update.component';
import { ShowStatistiqueComponent } from './pages/statitiques/show-statistique/show-statistique.component';
import { ElectionViewComponent } from './pages/parametres/widgets/election/election-view/election-view.component';
// import player from 'lottie-web';

// export function playerFactory(){
//   return player;
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatitiquesComponent,
    RapportsComponent,
    RepportingComponent,
    NavBarComponent,
    IncidentsComponent,
    DemandeAppelComponent,
    ResultatsComponent,
    LoginComponent,
    ParametresComponent,
    AgentComponent,
    AllianceComponent,
    BureauVoteComponent,
    CandidatComponent,
    CentreComponent,
    CercleComponent,
    CoordinateurComponent,
    CommuneComponent,
    ElectionComponent,
    QuartierComponent,
    PaysComponent,
    RegionComponent,
    UtilisateurComponent,
    TypeRapportComponent,
    TypeIncidentComponent,
    IncidentViewComponent,
    IncidentUpdateComponent,
    StatistiqueViewComponent,
    StatistiqueUpdateComponent,
    ResultatViewComponent,
    RapportViewComponent,
    RapportUpdateComponent,
    DemandeAppelViewComponent,
    DemandeAppelUpdateComponent,
    AgentCreationComponent,
    AgentViewComponent,
    AgentUpdateComponent,
    AllianceCreationComponent,
    AllianceViewComponent,
    AllianceUpdateComponent,
    BureauVoteCreationComponent,
    BureauVoteUpdateComponent,
    BureauVoteViewComponent,
    BureauVoteAffectationAgentComponent,
    CandidatCreationComponent,
    CandidatUpdateComponent,
    CandidatViewComponent,
    CentreCreationComponent,
    CentreViewComponent,
    CentreUpdateComponent,
    CercleCreationComponent,
    CercleViewComponent,
    CercleUpdateComponent,
    CommuneCreationComponent,
    CommuneUpdateComponent,
    CommuneViewComponent,
    CoordinateurCreationComponent,
    CoordinateurUpdateComponent,
    CoordinateurViewComponent,
    ElectionCreationComponent,
    ElectionUpdateComponent,
    PhaseUpdateComponent,
    PhaseCreationComponent,
    PaysCreationComponent,
    PaysUpdateComponent,
    PaysViewComponent,
    QuartierCreationComponent,
    QuartierViewComponent,
    QuartierUpdateComponent,
    RegionCreationComponent,
    RegionUpdateComponent,
    RegionViewComponent,
    TypeIncidentCreationComponent,
    TypeIncidentUpdateComponent,
    TypeIncidentViewComponent,
    UtilisateurCreationComponent,
    UtilisateurUpdateComponent,
    UtilisateurViewComponent,
    DeleteComponent,
    PartiComponent,
    PartiCreationComponent,
    PartiViewComponent,
    PartiUpdateComponent,
    TypeRapportCreationComponent,
    TypeRapportUpdateComponent,
    TypeRapportViewComponent,
    TabBarComponent,
    ShowCercleComponent,
    ShowCommuneComponent,
    ShowQuartierComponent,
    ShowCentreComponent,
    ShowBureauVoteComponent,
    ShowRapportComponent,
    WantToAffectComponent,
    LoginComponent,
    ResultatUpdateComponent,
    ShowStatistiqueComponent,
    ElectionViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AvatarModule,
    MatIconModule,
    SidebarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonToggleModule,
    AlertModule,
    NgbModule,
    MatPaginatorModule,
    AlertModule,
    ButtonModule,
    OverlayModule,
    MatDialogModule,
    CommonModule,
    MatCommonModule,
    FormsModule,
    IconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    CdkTreeModule,
    PortalModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRippleModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatStepperModule
    // LottieModule.forRoot({player:playerFactory})

    // cibFlutter
    // MatPaginator
    // CoreModule
  ],
  providers: [
    // { provide: OverlayContainer, useClass: CustomOverlayContainer }, 
    IconSetService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AppModule { }
