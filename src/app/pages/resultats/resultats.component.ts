import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ResultatViewComponent } from './resultat-view/resultat-view.component';
import { ResultatService } from 'src/app/services/resultatService';
import { CandidatService } from 'src/app/services/candidatService';
import { DataService } from 'src/app/services/data.service';
import { ResultatUpdateComponent } from './resultat-update/resultat-update.component';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'phase', 'date', 'agent', 'candidats', 'bureauVote', 'suffrage', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  List= [];
  ListC :any = [];
  List1= [];
  filterValue = "";

  constructor(
    public dialog: MatDialog,
    private resultatService: ResultatService,
    // private alertController: AlertController,
    private candidatService: CandidatService,
    private data: DataService
  ) { }

  ngOnInit() {
    this.get();
    this.getC()
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  get(){
    this.resultatService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = this.List.reverse();
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
      }
    );
  }

  getC(){
    this.candidatService.get().subscribe(
      (res) => {
        this.ListC = res.data;
        // this.dataSource.data = res.data;
        // this.dataSource.paginator = this.paginator
      }
    );
  }

  exportToExcel() {
    this.data.exportToExcel(this.List, 'resultat');
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(ResultatViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(ResultatUpdateComponent, 
      { data: {ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

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
  action: string
}