import { Component, OnInit, ViewChild, } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { CoordinateurService } from 'src/app/services/coordinateurService';
import { CoordinateurViewComponent } from './coordinateur-view/coordinateur-view.component';
import { CoordinateurUpdateComponent } from './coordinateur-update/coordinateur-update.component';
import { CoordinateurCreationComponent } from './coordinateur-creation/coordinateur-creation.component';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-coordinateur',
  templateUrl: './coordinateur.component.html',
  styleUrls: ['./coordinateur.component.scss']
})
export class CoordinateurComponent implements OnInit {

  defaulthref = 'parametres';
  List= [];
  isLoading = false
  filterValue!: string;
  private items!: string[];

  displayedColumns: string[] = ['position', 'nom', 'prenom', 'adresse', 'telephone', 'email', 'notification', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  user: any;
  
  constructor(
    private coordinateurService: CoordinateurService,
    private router: Router,
    private data: DataService,
    public dialog: MatDialog,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.get(), this.List);
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.auth.getUserObservable()
    .subscribe(res => this.user = res);
    console.log(this.user);
  }

  get(){
    this.coordinateurService.get().subscribe(
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
    this.data.exportToExcel(this.List, 'Coordinateur');
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
    const dialogRef = this.dialog.open(CoordinateurViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(CoordinateurUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }

  openDialogCreation() {
    const dialogRef = this.dialog.open(CoordinateurCreationComponent,
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
  nom: string;
  position: number;
  prenom: number;
  adresse: string;
  telephone: string,
  action: string,
  notification: string,
  email: string,
  view: string;
  update: string,
  delete: string,
}
