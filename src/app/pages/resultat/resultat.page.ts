import { Component, OnInit, ViewChild, } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
// import { BureauVoteService } from '../../services/bureauVoteService';
import { ResultatService } from '../../services/resultatService';
import { ResultatViewPage } from './resultat-view/resultat-view.page';
import { ResultatUpdatePage } from './resultat-update/resultat-update.page';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})
export class ResultatPage implements OnInit {

  List= [];
  List1: [];
  isLoading = false
  
  constructor(
    private resultatService: ResultatService,
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    // private statistiqueService: StatistiqueService
  ) { }

  ngOnInit() {
    this.get();
    // this.getAgentAffecte();
    console.log(this.get(), this.List);
  }

  get(){
    this.resultatService.get().subscribe(
      (res) => {
        this.List = res.data;
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator
      }
    );
  }

  async openIonModal(idPays) {
    const modal = await this.modalController.create({
      component: ResultatViewPage,
      cssClass: '',
      animated : true,
      componentProps : {
        id : idPays
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        this.get();
    });
    return await modal.present();
    //this.router.navigate(['proche/add-proche']);

  }

  async openIonModalUpdate(idPays) {
    const modal = await this.modalController.create({
      component: ResultatUpdatePage,
      cssClass: '',
      animated : true,
      componentProps : {
        id : idPays
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        this.get();
    });
    return await modal.present();
    //this.router.navigate(['proche/add-proche']);

  }

  displayedColumns: string[] = ['position', 'phase', 'date', 'agent', 'candidats', 'bureauVote', 'suffrage', 'action', 'update'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  agent: string;
  position: number;
  date: number;
  phase: string;
  candidats: string,
  action: string,
  bureauVote: string,
  suffrage: string,
  update: string
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, agent: 'Hydrogen', date: 1.0079, phase: 'H',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx' },
//   {position: 2, agent: 'Helium', date: 4.0026, phase: 'He',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 3, agent: 'Lithium', date: 6.941, phase: 'Li',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 4, agent: 'Beryllium', date: 9.0122, phase: 'Be',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 5, agent: 'Boron', date: 10.811, phase: 'B',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 6, agent: 'Carbon', date: 12.0107, phase: 'C',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 7, agent: 'Nitrogen', date: 14.0067, phase: 'N',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 8, agent: 'Oxygen', date: 15.9994, phase: 'O',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 9, agent: 'Fluorine', date: 18.9984, phase: 'F',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 10, agent: 'Neon', date: 20.1797, phase: 'Ne',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 11, agent: 'Sodium', date: 22.9897, phase: 'Na',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 12, agent: 'Magnesium', date: 24.305, phase: 'Mg',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 13, agent: 'Aluminum', date: 26.9815, phase: 'Al',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 14, agent: 'Silicon', date: 28.0855, phase: 'Si',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 15, agent: 'Phosphorus', date: 30.9738, phase: 'P',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 16, agent: 'Sulfur', date: 32.065, phase: 'S',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 17, agent: 'Chlorine', date: 35.453, phase: 'Cl',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 18, agent: 'Argon', date: 39.948, phase: 'Ar',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 19, agent: 'Potassium', date: 39.0983, phase: 'K',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
//   {position: 20, agent: 'Calcium', date: 40.078, phase: 'Ca',  action: 'detail', candidats: 'sema', suffrage: 'faladie', bureauVote: 'xxx'},
// ];