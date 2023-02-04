import { Component, OnInit, ViewChild, } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { BureauVoteService } from 'src/app/services/bureauVoteService';
import { BureauVoteViewComponent } from './bureau-vote-view/bureau-vote-view.component';
import { BureauVoteUpdateComponent } from './bureau-vote-update/bureau-vote-update.component';
import { BureauVoteCreationComponent } from './bureau-vote-creation/bureau-vote-creation.component';
import { BureauVoteAffectationAgentComponent } from './bureau-vote-affectation-agent/bureau-vote-affectation-agent.component';

@Component({
  selector: 'app-bureau-vote',
  templateUrl: './bureau-vote.component.html',
  styleUrls: ['./bureau-vote.component.scss']
})
export class BureauVoteComponent implements OnInit {

  defaulthref = 'parametres';
  List= [];
  isLoading = false
  filterValue!: string;
  private items!: string[];

  displayedColumns: string[] = ['position', 'region', 'cercle', 'commune', 'quartier', 'centre', 'nom', 'adresse', 'action', 'affect'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private bureauVoteService: BureauVoteService,
    private router: Router,
    private data: DataService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.get(), this.List);
  }

  get(){
    this.bureauVoteService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
        this.initializeItems();
      }
    );
  }

  exportToExcel() {
    this.data.exportToExcel(this.List, 'Bureau_vote');
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  initializeItems() {
    this.items = this.List;
  }

  getItems(ev: any) {
    //Reset items back to all of the items
    this.initializeItems();

    //set val to the value of the searchbar
    let val = ev.target.value;

    //if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(ev.toLowerCase()) > -1);
      })
    }
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(BureauVoteViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAffect(id: any) {
    const dialogRef = this.dialog.open(BureauVoteAffectationAgentComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(BureauVoteUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }

  openDialogCreation() {
    const dialogRef = this.dialog.open(BureauVoteCreationComponent,
      // { data:{ids: id}, disableClose: true }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }

  openDialog3(id: any, index: any) {
    const dialogRef = this.dialog.open(DeleteComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.List.splice(index,id);
      this.get();
    });
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

}

export interface PeriodicElement {
  region: string;
  position: number;
  cercle: number;
  commune: string;
  quartier: string;
  centre: string;
  nom: string;
  view: string;
  update: string,
  delete: string,
  affectation: string
}
