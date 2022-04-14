import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
// import { UserService } from '../../services/user.service';
import { AllianceService } from '../../../services/allianceService';
import { ResultatService } from '../../../services/resultatService';

@Component({
  selector: 'app-resultat-add',
  templateUrl: './resultat-add.page.html',
  styleUrls: ['./resultat-add.page.scss'],
})
export class ResultatAddPage implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  Form: FormGroup;
  isSubmitted = false;
  isLoading = false;

  List = []
  List1 = []

  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder, 
    // private userService: UserService,
    private resultatService: ResultatService, 
    private allianceService: AllianceService, 
    public router: Router,
    private toastr: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
      this.Form = this.formBuilder.group({
        suffrage: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        motifRenvoi: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        renvoiePossible: 'false',
        dateResultat: Date.now(),
        allianceEntity: this.formBuilder.group({
          idAlliance: ['', Validators.required],
        }),
        affectationagentEntity: this.formBuilder.group({
          idAffectation: 1,
        }),
        // notification: ['', Validators.compose([Validators.required, Validators.minLength(3)])],      // communeEntity: this.formBuilder.group({
        //   idCommune: ['', Validators.compose([Validators.required])],
        // }),
        version: 1,
        updatedBy: 'admin',
        createdBy: 'admin',
        actif: 'false'
    });
    this.get();
    this.get1();
    console.log(this.Form, this.Form.errors, this.get());
  }

  get(){
    this.allianceService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  get1(){
    this.allianceService.get().subscribe(
      (res) => {
        this.List1 = res.data;
      }
    );
  }

  get errorControl() {
    return this.Form.controls;
  }

  submit(values) {

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.resultatService.add(this.Form.value).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          this.presentLoading();
          this.List.unshift(this.Form.value);
          // this.get();
          this.router.navigate(['/resultat', {List: this.List}]);
          this.dismissLoading();
        }
      )
    }
    else
      {
        error => {
          console.log(error);
      }
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

}
