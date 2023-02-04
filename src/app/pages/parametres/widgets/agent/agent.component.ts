import { Component, OnInit, ViewChild, } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { AgentService } from 'src/app/services/agentService';
import { AgentCreationComponent } from './agent-creation/agent-creation.component';
import { AgentUpdateComponent } from './agent-update/agent-update.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { AgentViewComponent } from './agent-view/agent-view.component';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  defaulthref = 'parametres';
  List= [];
  isLoading = false
  filterValue!: string;
  private items!: string[];

  displayedColumns: string[] = ['position', 'name', 'prenom', 'adresse', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private agentService: AgentService,
    private router: Router,
    private data: DataService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.get(), this.List);
  }

  get(){
    this.agentService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;
        this.initializeItems();
      }
    );
  }

  // get(){
  //   this.agentService.get().subscribe(
  //     (res) => {
  //       this.List = res.data;
  //       console.log(this.List);
  //       for(let i=0;i<this.List.length; i++)
  //       {
  //         let agent = res.data[i];
  //         let agentRole = agent.userrole;
  //         console.log(agent, agentRole);
  //         if(agentRole == "ROLE_AGENT")
  //         {
  //           this.List1.push(agent);
  //         }
  //         // else
  //         // {
  //         //   this.List1= []
  //         // }
          
  //       }
  //       this.dataSource.data = this.List1;
  //         this.dataSource.paginator = this.paginator;
  //         this.dataSource.filter = this.filterValue;
  //         this.initializeItems();
  //     }
  //   );
  // }

  exportToExcel() {
    this.data.exportToExcel(this.List, 'Agent');
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
    const dialogRef = this.dialog.open(AgentViewComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(AgentUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }

  openDialogCreation() {
    const dialogRef = this.dialog.open(AgentCreationComponent,
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
  name: string;
  position: number;
  prenom: number;
  adresse: string;
  telephone: number;
  email: string;
  bureauVote: string;
  action: string,
  view: string;
  update: string,
  delete: string,
}
