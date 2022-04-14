import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
// import { AllianceService } from '../../../services/allianceService';
import { ResultatService } from '../../../services/resultatService';

@Component({
  selector: 'app-resultat-update',
  templateUrl: './resultat-update.page.html',
  styleUrls: ['./resultat-update.page.scss'],
})
export class ResultatUpdatePage implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  Form: FormGroup;
  isSubmitted = false;
  isLoading = false;

  List = [];
  Listid: any;
  @Input() id;
  data: any[];
  // data: {
  //   // idResultat: this.id,
  //   // suffrage: any; motifRenvoi: any; dateResultat: any; renvoiePossible: any; allianceEntity: { idAlliance: any; }; affectationagentEntity: { idAffectation: any; }; version: any; createdBy: any; updatedBy: any;
  // };

  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder, 
    // private AllianceService: AllianceService, 
    public router: Router,
    private toastr: ToastController,
    private loadingController: LoadingController,
    private resultatService: ResultatService
  ) { }

  ngOnInit() {
    this.get();
    this.getById();
    this.Form = this.formBuilder.group({
      // suffrage: this.Listid.suffrage,
      motifRenvoi: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      renvoiePossible: 'true',
      dateResultat: Date.now(),
      // allianceEntity: this.formBuilder.group({
      //   idAlliance: this.Listid.allianceEntity.idAlliance,
      // }),
      // affectationagentEntity: this.formBuilder.group({
      //   idAffectation: this.Listid.affectationagentEntity.idAffectation,
      // }),
      // notification: ['', Validators.compose([Validators.required, Validators.minLength(3)])],      // communeEntity: this.formBuilder.group({
      //   idCommune: ['', Validators.compose([Validators.required])],
      // }),
      // version: 1,
      // updatedBy: 'admin',
      // createdBy: 'admin',
      // actif: 'false'
  });
  console.log(this.Form, this.Form.errors, this.get());
}

getById(){
  this.resultatService.getById(this.id).subscribe(
    (res) => {
      this.Listid = res as String;
      console.log(this.Listid);
      
      this.data = this.List;
    }
  );
}

get(){
  this.resultatService.get().subscribe(
    (res) => {
      this.List = res.data;
    }
  );
}

get errorControl() {
  return this.Form.controls;
}

submit(values) {
  // this.data.push({motifRenvoi : this.Form.get('motifRenvoi').value})
  // const data1 = {
  //   motifRenvoi : this.Form.get('motifRenvoi').value,
  // } 
  // this.data['motifRenvoi'] = this.Form.get('motifRenvoi').value;
  this.data.map(u => u.motifRenvoi = this.Form.get('motifRenvoi').value)
  console.log(this.data);
  // index['motifRenvoi'] = this.Form.get('motifRenvoi').value,
  // this.data.push
  // console.log(index);
  
  // this.data = {
    // idResultat: this.id,
    // suffrage : this.Form.get('suffrage').value,
    // motifRenvoi : this.Form.get('motifRenvoi').value,
    // dateResultat : this.Form.get('dateResultat').value,
    // renvoiePossible : this.Form.get('renvoiePossible').value,
    // allianceEntity : {
    //   idAlliance: this.Form.get('idAlliance').value,
    // },
    // affectationagentEntity : {
    //   idAffectation: this.Form.get('idAffectation').value,
    // },
    // version : this.Form.get('version').value,
    // createdBy : this.Form.get('createdBy').value,
    // updatedBy : this.Form.get('updatedBy').value,
  // };

  this.isSubmitted = true;
  console.log(this.Form, this.data);
  if(this.Form.valid)
  {
    this.resultatService.add(this.data).subscribe(
      (res) => {
        this.formDirective.resetForm();
        this.presentLoading();
        // this.List.unshift(data);
        this.get();
        this.closeModel();
        // this.router.navigate(['/pays', {List: this.List}]);
        this.dismissLoading();
      }
    )
  }
  
}

async presentLoading() {
  this.isLoading = true;
  return await this.loadingController.create({
    // duration: 5000,
  }).then(a => {
    a.present().then(() => {
      console.log('presented');
      if (!this.isLoading) {
        a.dismiss().then(() => console.log('abort presenting'));
      }
    });
  });
}

async dismissLoading() {
  this.isLoading = false;
  return await this.loadingController.dismiss().then(() => console.log('dismissed'));
}

closeModel() {
  this.get();
    this.modalController.dismiss(null);
  }

}
