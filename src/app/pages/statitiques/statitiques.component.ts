import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { StatistiqueViewComponent } from './statistique-view/statistique-view.component';
import { StatistiqueUpdateComponent } from './statistique-update/statistique-update.component';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/app/services/data.service';
import { StatistiqueService } from 'src/app/services/statistiqueService';
import { RegionService } from 'src/app/services/regionService'
import { CercleService } from 'src/app/services/cercleService';
import { CommuneService } from 'src/app/services/communeService';
import { QuartierService } from 'src/app/services/quartierService';
import { CentreService } from 'src/app/services/centreService';
import { BureauVoteService } from 'src/app/services/bureauVoteService';
import { PaysService } from 'src/app/services/paysService';
import { ShowStatistiqueComponent } from './show-statistique/show-statistique.component';

@Component({
  selector: 'app-statitiques',
  templateUrl: './statitiques.component.html',
  styleUrls: ['./statitiques.component.scss']
})
export class StatitiquesComponent implements OnInit {

  filterValue = "";
  List= [];
  List1= [];

  Pays: any = [];
  Region: any = [];
  Cercle: any = [];
  Commune: any = [];
  Quartier: any = [];
  Centre: any = [];
  Bureau: any = [];

  displayedColumns: string[] = ['position', 'phase', 'date', 'agent', 'bureauVote', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private statistiqueService: StatistiqueService,
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
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

  exportToExcel() {
    this.data.exportToExcel(this.List, 'statistique');
  }

  get(){
    this.statistiqueService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = this.List.reverse();
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
      }
    );
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

  showStatistique(id: any) {
    const dialogRef = this.dialog.open(ShowStatistiqueComponent,
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

  openDialog(id: any) {
    const dialogRef = this.dialog.open(StatistiqueViewComponent,
      { data: {ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(StatistiqueUpdateComponent, 
      { data: {ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface PeriodicElement {
  agent: string;
  position: number;
  date: number;
  phase: string;
  candidats: string,
  view: string,
  bureauVote: string,
  suffrage: string,
  update: string
}
