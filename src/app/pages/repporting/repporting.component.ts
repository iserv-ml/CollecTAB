import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/app/services/data.service';
import { rapportService } from '../../services/rapportService';
import { incidentService } from '../../services/incidentService';
import { StatistiqueService } from '../../services/statistiqueService';
import { BureauVoteService } from '../../services/bureauVoteService';
import { AgentService } from '../../services/agentService';
import {MatAccordion} from '@angular/material/expansion';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-repporting',
  templateUrl: './repporting.component.html',
  styleUrls: ['./repporting.component.scss']
})
export class RepportingComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  displayedColumns: string[] = ['position', 'bureau', 'TAUX_DE_PARTICIPATION_A_MIDI', 'TAUX_DE_PARTICIPATION_FINAL'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  List= []
  
  filterValue!: string;
  ListRapport = [];
  ListRapport2 = [];
  ListTypeIncident = [];
  ListStatistique = [];
  tauxOuvertHeure!: number;
  bureauAgentPresent: number=0;
  disponnibiliteMateriel!: number;
  tauxParticipation!: number;
  disponnibiliteMateriels!: number;
  tauxOuvertHeures: number = 0;
  b = [];
  bureauAgentPresents!: number;
  tauxParticipations: number=0;
  bureau: number = 0;
  ListNbBNull = [];
  NbBullNull = 0;
  NbBullNulls= 0;
  tauxBullNull= 0;
  NbVotetotal = 0;
  ListIncident = [];
  RPEEV= 0;
  RPEEVs= 0;
  AC= 0;
  ACs= 0;
  ACIBV= 0;
  ACIBVs= 0;
  IVE = 0;
  IVEs= 0;
  VME= 0;
  VMEs = 0;
  AAE= 0;
  AAEs = 0;
  MMEE= 0;
  MMEEs = 0;
  NI= 0;
  NIs = 0;
  Autre= 0;
  Autres = 0;
  taux: any =[];
  id: any = [];
  tauxFinale: any = [];
  p = [];
  kk: any= [];
  totalIncident!: number;

  constructor(
    private data: DataService,
    private rapportService: rapportService,
    private incidentService: incidentService,
    private statistiqueService: StatistiqueService,
    private bureauVoteService: BureauVoteService,
    private agentService: AgentService,
  ) { }

  ngOnInit() {
    this.get();
    this.getNbNull();
    this.getIncident();
    // this.exportToExcelTauxBulletinNull();
  }

  exportToExcelBureauInfo() {
    let kk = [
      {"% des bureaux ouvert à l'heure": this.tauxOuvertHeure},
      {"% des bureaux avec tous les agents présents": this.bureauAgentPresent},
      {"% des bureaux disposant tout le materiel": this.disponnibiliteMateriel}
    ];
    this.data.exportToExcel(kk, 'Taux_bulletin_Info');
  }

  get(){
    this.rapportService.get().subscribe(
      (res) => {
        this.ListRapport = res.data;
        for(let i=0; i<this.ListRapport.length; i++)
        {
          console.log(res.data[i]);
          let n = res.data[i];
          let nn = n.heureOuverture;
          let bureauConcerné = n.affectationagentEntity.bureauvoteEntity.idBureauVote;
          console.log(n, nn);
          if(nn == '08:00')
          {
            let v = 1;
            this.tauxOuvertHeures += v;
            v++;
          }
          else
          {
            this.tauxOuvertHeure = 0;
            console.log(this.tauxOuvertHeure);
          }
          this.tauxOuvertHeure = this.tauxOuvertHeures;
          console.log(this.tauxOuvertHeure, this.bureau, this.tauxOuvertHeures);
          // try {
          //   let bureauConcerné = n.affectationagentEntity.bureauvoteEntity.idBureauVote;
            
          //   System.out.println(myNumbers[10]);
          // } catch (Exception e) {
          //   System.out.println("Something went wrong. check again");
          // }
          // this.bureauVoteService.get().subscrib<e(
          //   (res) => {
          //     let bureauList = res.data;
          //     this.bureau = res.data.length;
          //     console.log(bureauList, this.bureau);
          //     this.tauxOuvertHeure = (this.bureau - this.tauxOuvertHeures) / (100);
          //     console.log(this.tauxOuvertHeure, this.bureau, this.tauxOuvertHeures);
          //   }
          // );
        }

        for(let i=0; i<this.ListRapport.length; i++)
        {
          let ra = res.data[i];
          let agentRapport = ra.nbAgentElectauraux;
          let agentBureau = ra.affectationagentEntity.bureauvoteEntity.nbAgentElectoraux;
          console.log(agentRapport, agentBureau);
          if(agentRapport == agentBureau)
          {
            let v=1;
            this.bureauAgentPresents += v;
            console.log(this.bureauAgentPresents);
            v++; 
            this.bureauAgentPresent = this.bureauAgentPresents;
            console.log(this.bureauAgentPresent);
          }
          else
          {
            this.bureauAgentPresents = 0;
          }
        }

        for(let u=0; u<this.ListRapport.length; u++)
        {
          let n = res.data[u];
          let nn = n.disponibiliteMateriel;
          console.log(n, nn);
          if (nn == true)
          {
            let v=1;
            this.disponnibiliteMateriels = v;
            console.log(this.disponnibiliteMateriel);
            v++;
          }
          else
          {
            this.disponnibiliteMateriels = 0;
          }
          this.disponnibiliteMateriel = this.disponnibiliteMateriels;
        }

        for(let i=0; i<this.ListRapport.length; i++)
        {
          this.dataSource.data = res.data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.filter = this.filterValue;
          // this.p = res.data;
          // this.id = (res.data.idAffectation);
          // let type = this.p.typeRapportEntity.code;
          // this.taux = (res.data.affectationagentEntity.bureauvoteEntity.nbElecteurs);
          // this.tauxFinale.push(res.affectationagentEntity.bureauvoteEntity.nbElecteurs - res.tauxParticipation);
          // console.log(type, this.taux);
          // if(type == 'OUVERTURE')
          // {
          //   // let v = taux;
          //   // this.tauxParticipations = this.taux + 1 ;
          //   console.log(this.tauxParticipations);
          //   // v++;
          // }
          // else
          // {
          //   this.tauxParticipation = 0;
          // }
          // this.tauxParticipation = this.tauxParticipations;
          // console.log(this.tauxParticipation);
        }

        // for(let i=0; i<this.ListRapport.length; i++)
        // {
        //   let p = res.data[i];
        //   let particip = p.tauxParticipation;
        //   let type = p.typeRapportEntity.code;
        //   console.log(particip);
        //   console.log(p);
        //   console.log(type);
        //   if(type == 'MIDI')
        //   {
        //     this.tauxParticipations.push(particip);
        //     console.log(this.tauxParticipations);
        //   }
        //   else
        //   {
        //     this.tauxParticipation = 0;
        //   }
        //   // res.tauxParticipation == true;
        //   let length = this.tauxParticipations.length;
        //   this.tauxParticipation = (this.tauxParticipations[0] + this.tauxParticipations[length - 1]) / (100);
        //   console.log(this.tauxParticipation);
        // }
      }
    );
  }

  getNbNull() {
    this.statistiqueService.get().subscribe(
      (res) => {
        this.ListNbBNull = res.data;
        console.log(this.ListNbBNull);
        for(let i=0; i<this.ListNbBNull.length; i++)
        {
          let n = res.data[i];
          let nn = n.nb_bulletin_null; 
          this.NbBullNulls += nn;
          console.log(this.NbBullNulls, n, nn);
          this.NbVotetotal += (n.nb_femme_votant + n.nb_homme_votant);
        }
        this.NbBullNull = this.NbBullNulls;
        console.log(this.NbBullNulls, this.NbBullNull);
        
        this.tauxBullNull = (this.NbVotetotal - this.NbBullNull)
      }
    )
  }

  getIncident() {
    this.incidentService.get().subscribe(
      (res) => {
        this.ListIncident = res.data;
        for(let i=0; i<this.ListIncident.length; i++)
        {
          let n = res.data[i];
          let nn = n.typeincidentEntity.libelle; 
          console.log(this.NbBullNulls, n, nn);
          if(nn == "Refus de permettre à un électeur éligible de voter")
          {
            let v = 1;
            this.RPEEVs += v;
            v++
          }

          if(nn == "Achat de conscience")
          {
            let v = 1;
            this.ACs += v;
            v++;
          }

          if(nn == "Activité de campagne à l'intérieur du bureau de vote")
          {
            let v = 1;
            this.ACIBVs += v;
            v++;
          }

          if(nn == "Incident de violence électorale")
          {
            let v = 1;
            this.IVEs += v;
            v++;
          }

          if(nn == "Vol de matériel électoral")
          {
            let v = 1;
            this.VMEs += v;
            v++;
          }

          if(nn == "Absence(s) des agents électoraux (moins de 3 agents présents)")
          {
            let v = 1
            this.AAEs += v;
            v++;
          }

          if(nn == "Manque de matériel électoral essentiel")
          {
            let v = 1;
            this.MMEEs += v;
            v++;
          }

          if(nn == "Nombre total d'incidents")
          {
            let v = 1;
            this.NIs += v;
            v++;
          }

          if(nn == "Autres")
          {
            let v = 1;
            this.Autres += v;
            v++;
          }
        }

        this.RPEEV = this.RPEEVs;
        this.AC = this.ACs;
        this.ACIBV = this.ACIBVs;
        this.IVE = this.IVEs;
        this.VME = this.VMEs;
        this.AAE = this.AAEs;
        this.MMEE = this.MMEEs;
        this.NI = this.NIs;
        this.Autre = this.Autres;
        this.totalIncident = this.ListIncident.length;
      }
    )
  }

  exportToExcelTauxBulletinNull() {
    let kk = [
      {"tauxBullNull": this.tauxBullNull},
      {"NbBullNull": this.NbBullNull}
    ];
    this.data.exportToExcel(kk, 'Taux_bulletin_null');
  }

  exportToExcelIncident() {
    let kk = [
      {"Refus de permettre à un électeur éligible de voter": this.RPEEV},
      {"Activité de campagne à l'intérieur du bureau de vote": this.ACIBV},
      {"Achat de conscience": this.AC},
      {"Incident de violence électorale": this.IVE},
      {"Vol de matériel électoral": this.VME},
      {"Absence(s) des agents électoraux (moins de 3 agents présents": this.AAE},
      {"Manque de matériel électoral essentie": this.MMEE},
      {"Nombre total d'incidents": this.NI},
      {"Autre": this.Autre}
    ];
    this.data.exportToExcel(kk, 'incident_report');
  }

  exportToExcelTaux() {
    this.rapportService.get().subscribe(
      (res) => {
        this.p = res.data;
        for(let i=0; i<this.p.length; i++)
        {
          let pp = res.data[i];
          this.id.push(pp.idrapport);
          this.taux.push(pp.affectationagentEntity.bureauvoteEntity.nbElecteurs);
          this.tauxFinale.push(pp.affectationagentEntity.bureauvoteEntity.nbElecteurs - pp.tauxParticipation);
          // let kkk = pp.affectationagentEntity.bureauvoteEntity.nbElecteurs;
          // let kkkk = pp.tauxParticipation;
          // let c = (Number(kkk) - Number(kkkk));
          this.kk.push(
            {"numero": pp.idrapport},
            {"TAUX DE PARTICIPATION A MIDI": pp.affectationagentEntity.bureauvoteEntity.nbElecteurs},
            {"TAUX DE PARTICIPATION FINAL": this.tauxFinale[i]},
          );
        }
        let k = this.kk
        this.data.exportToExcel(k, 'Taux_Participation');
        console.log(this.kk);
      }
    )
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

  // exportToExcel() {
  //   this.data.exportToExcel(this.List, 'rapport');
  // }

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

}

export interface PeriodicElement {
  bureau: string;
  position: number;
  TAUX_DE_PARTICIPATION_A_MIDI: string;
  TAUX_DE_PARTICIPATION_FINAL: string
}
