import { Component, OnInit, ViewChild, } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { ElectionService } from 'src/app/services/electionService';
import { PhaseElectionService } from 'src/app/services/phaseService';
import { ElectionUpdateComponent } from './election-update/election-update.component';
import { PhaseUpdateComponent } from './phase-update/phase-update.component';
import { ElectionCreationComponent } from './election-creation/election-creation.component';
import { PhaseCreationComponent } from './phase-creation/phase-creation.component';
import { DeleteComponentP } from './deleteP/delete.component';
import { ThemePalette } from '@angular/material/core';
import { ElectionViewComponent } from './election-view/election-view.component';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {

  defaulthref = 'parametres';
  ListE: any = [];
  ListP= [];
  isLoading = false
  filterValue !: string
  filterValue1 !: string

  displayedColumns: string[] = ['type', 'date', 'action'];
  dataSource = new MatTableDataSource<Periodic>();

  displayedColumns1: string[] = ['position', 'libelle', 'code', 'date', 'action'];
  dataSource1 = new MatTableDataSource<Periodic1>();

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatPaginator) paginator1 !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  
  constructor(
    private electionService: ElectionService,
    private router: Router,
    private data: DataService,
    public dialog: MatDialog,
    private phaseElectionService: PhaseElectionService,
  ) { }

  ngOnInit() {
    this.getE();
    this.getP();
    console.log(this.getE(), this.ListE, this.ListP);
  }

  exportToExcelE() {
    this.data.exportToExcel(this.ListE, 'election');
  }

  exportToExcelP() {
    this.data.exportToExcel(this.ListP, 'election');
  }

  getE(){
    this.electionService.get().subscribe(
      (res) => {
        this.ListE = res.data;
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
      }
    );
  }

  getP(){
    this.phaseElectionService.get().subscribe(
      (res) => {
        this.ListP = res.data;
        this.dataSource1.data = res.data;
        this.dataSource1.paginator = this.paginator1;
        this.dataSource.filter = this.filterValue1;
      }
    );
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  applyFilter1(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue1;
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(ElectionViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.getE();
      this.getP();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2E(id: any) {
    const dialogRef = this.dialog.open(ElectionUpdateComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.getP();
      this.getE();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2P(id: any) {
    const dialogRef = this.dialog.open(PhaseUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getP();
    });
  }

  openDialogCreationE() {
    const dialogRef = this.dialog.open(ElectionCreationComponent,
      // { data:{ids: id}, disableClose: true }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getE();
      this.getP();
    });
  }

  openDialogCreationP() {
    const dialogRef = this.dialog.open(PhaseCreationComponent,
      // { data:{ids: id}, disableClose: true }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getE();
      this.getP();
    });
  }

  openDialog3E(id: any, index: any) {
    const dialogRef = this.dialog.open(DeleteComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // this.List.splice(index,id);
      this.getP();
      this.getE();
    });
  }

  openDialog3P(id: any, index: any) {
    const dialogRef = this.dialog.open(DeleteComponentP,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // this.List.splice(index,id);
      this.getP();
      this.getE();
    });
  }


  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

}


export interface Periodic {
  date: number;
  phase: string,
  action: string,
  update: string,
  delete: string,
}

export interface Periodic1 {
  libelle: string;
  position: number;
  date: number;
  code: string;
  phase: string,
  update: string,
  delete: string,
}