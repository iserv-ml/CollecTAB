import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { IncidentViewComponent } from './incident-view/incident-view.component';
import { IncidentUpdateComponent } from './incident-update/incident-update.component';
import {Sort} from '@angular/material/sort';
import { cilList, cilShieldAlt } from '@coreui/icons';
import { DataService } from 'src/app/services/data.service';
import { incidentService } from 'src/app/services/incidentService';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  filterValue= "" 
  sortedData: PeriodicElement[] | undefined;
  icons = { cilList, cilShieldAlt, };

  displayedColumns: string[] = ['position', 'type', 'date', 'agent', 'description', 'bureauVote', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  List: any = [];

  constructor(
    public dialog: MatDialog,
    private incidentService: incidentService,
    private data: DataService,
  ) { 
    this.sortedData = this.List.slice();
  }

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
    this.incidentService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = this.List.reverse();
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
      }
    );
  }

  sortData(sort: Sort) {
    const data = this.List.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'weight':
          return compare(a.weight, b.weight, isAsc);
        case 'symbol':
          return compare(a.symbol, b.symbol, isAsc);
        case 'position':
          return compare(a.position, b.position, isAsc);
        // case 'protein':
        //   return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(IncidentViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(IncidentUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }


  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  close() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("close") : ''
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  agent: string;
  position: number;
  date: number;
  type: string;
  description: string,
  action: string,
  bureauVote: string,
  statu: string,
  update: string
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
