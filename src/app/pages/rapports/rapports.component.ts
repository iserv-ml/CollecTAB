import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { RapportViewComponent } from './rapport-view/rapport-view.component';
import { RapportUpdateComponent } from './rapport-update/rapport-update.component';
import { rapportService } from '../../services/rapportService';
import { DataService } from 'src/app/services/data.service';
import { RegionService } from 'src/app/services/regionService';
import { ShowCercleComponent } from './show-cercle/show-cercle.component';
import { CercleService } from 'src/app/services/cercleService';
import { CommuneService } from 'src/app/services/communeService';
import { QuartierService } from 'src/app/services/quartierService';
import { CentreService } from 'src/app/services/centreService';
import { BureauVoteService } from 'src/app/services/bureauVoteService';
import { ShowRapportComponent } from './show-rapport/show-rapport.component';
import { PaysService } from 'src/app/services/paysService';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.scss']
})
export class RapportsComponent implements OnInit {

  filterValue= "" 
  displayedColumns: string[] = ['position', 'type', 'date', 'agent', 'bureauVote', 'action', 'valider'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  List= []
  List1= []
  List2= []
  // List3= []
  Pays: any = [];
  Region: any = [];
  Cercle: any = [];
  Commune: any = [];
  Quartier: any = [];
  Centre: any = [];
  Bureau: any = [];
  List3!: number;
  List4!: number;

  constructor(
    public dialog: MatDialog,
    private rapportService: rapportService,
    private data: DataService,
    private regionService: RegionService,
    private cercleService: CercleService,
    private communeServivce: CommuneService,
    private quartierService: QuartierService,
    private centreService: CentreService,
    private bureauVoteService: BureauVoteService,
    private paysService: PaysService
  ) { }

  ngOnInit() {
    this.get();
    this.getPays();
    this.getRegion();
    this.getCercle();
    this.getCommune();
    this.getQuartier();
    this.getCentre();
    this.getBureau();
    this.count();
    console.log(this.get());
    
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

  count() {
    this.rapportService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        for(let i=0; i<this.List1.length; i++)
        {
          let data = res.data[i];
          let region = data.affectationagentEntity.bureauvoteEntity.idBureauVote;
          this.regionService.get().subscribe(
            (es) => {
              this.List2 = es.data;
              for(let u=0; u<this.List2.length; u++)
              {
                let deta = es.data[u];
                let region1 = deta.idRegion
                console.log(region, region1);
                if(region == region1)
                {
                  let v = 1;
                  this.List3 += v;
                  v++;
                }
                else
                {
                  this.List3 = 0
                }
                this.List4 = this.List3;
              }
            }
          )
        };
        console.log(this.List3, this.List4);
        
      }
    )
  }

  exportToExcel() {
    this.data.exportToExcel(this.List, 'rapport');
  }

  getPays() {
    this.paysService.get().subscribe(
      (res) => {
        this.Pays = res.data;
      }
    )
  }

  getRegion() {
    this.regionService.get().subscribe(
      (res) => {
        this.Region = res.data;
      }
    )
  }

  getCercle() {
    this.cercleService.get().subscribe(
      (res) => {
        this.Cercle = res.data;
      }
    )
  }

  getCommune() {
    this.communeServivce.get().subscribe(
      (res) => {
        this.Commune = res.data;
      }
    )
  }

  getQuartier() {
    this.quartierService.get().subscribe(
      (res) => {
        this.Quartier = res.data;
      }
    )
  }

  getCentre() {
    this.centreService.get().subscribe(
      (res) => {
        this.Centre = res.data;
      }
    )
  }

  getBureau() {
    this.bureauVoteService.get().subscribe(
      (res) => {
        this.Bureau = res.data;
      }
    )
  }

  get(){
    this.rapportService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
      }
    );
  }

  showBureauVote(id: any) {
    const dialogRef = this.dialog.open(ShowRapportComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      // this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  showCercle(id: any) {
    const dialogRef = this.dialog.open(ShowCercleComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(RapportViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(RapportUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  type: string;
  position: number;
  date: number;
  bureauVote: string;
  agent: string;
  action: string
}
