import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultatService } from '../../../services/resultatService';

@Component({
  selector: 'app-resultat-view',
  templateUrl: './resultat-view.page.html',
  styleUrls: ['./resultat-view.page.scss'],
})
export class ResultatViewPage implements OnInit {

  List: any;
  @Input() id;

  constructor(
    private resultatService: ResultatService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.List, this.get());
  }

  get(){
    this.resultatService.getById(this.id).subscribe(
      (res) => {
        this.List = res as String;
      }
    );
  }

  closeModel() {
    this.modalController.dismiss(null);
  }

}
