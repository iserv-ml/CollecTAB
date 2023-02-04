import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DemandeAppelViewComponent } from './demande-appel-view/demande-appel-view.component';
import { DemandeAppelUpdateComponent } from './demande-appel-update/demande-appel-update.component';
import { rapportService } from '../../services/rapportService';
import { DataService } from 'src/app/services/data.service';
import { DemandeAppelService } from 'src/app/services/demandeAppelService';

@Component({
  selector: 'app-demande-appel',
  templateUrl: './demande-appel.component.html',
  styleUrls: ['./demande-appel.component.scss']
})
export class DemandeAppelComponent implements OnInit {

  filterValue = ""
  displayedColumns: string[] = ['position', 'date', 'agent', 'motif', 'description', 'affecte', 'statu', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  List= []

  constructor(
    public dialog: MatDialog,
    private demandeAppelService: DemandeAppelService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.get());
    
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

  exportToExcel() {
    this.data.exportToExcel(this.List, 'rapport');
  }

  get(){
    this.demandeAppelService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = this.List.reverse();
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
      }
    );
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(DemandeAppelViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(DemandeAppelUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  agent: string;
  position: number;
  date: number;
  motif: string;
  description: string,
  action: string,
  affecte: string,
  statu: string,
  update: string,
  delete: string
}