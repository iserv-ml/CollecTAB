import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { TypeRapportService } from '../../services/typeRapportService';
import { RapportService } from '../../services/rapportService';

@Component({
  selector: 'app-rapport-midi',
  templateUrl: './rapport-midi.page.html',
  styleUrls: ['./rapport-midi.page.scss'],
})
export class RapportMidiPage implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  Form: FormGroup;
  isSubmitted = false;
  isLoading = false;

  List = []
  List1 = []

  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder, 
    private typeRapportService: TypeRapportService,
    private rapportService: RapportService, 
    public router: Router,
    private toastr: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
      this.Form = this.formBuilder.group({
        dateRapport: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        heureOuverture: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        respectProcedureOuverture: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        disponibiliteMateriel: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        nbAgentElectauraux: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        tauxParticipation : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        typeRapportEntity: this.formBuilder.group({
          idTypeRapport: ['', Validators.required],
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
    console.log(this.Form, this.Form.errors);
  }

  get(){
    this.rapportService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  get1(){
    this.typeRapportService.get().subscribe(
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
      this.rapportService.add(this.Form.value).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          this.presentLoading();
          this.List.unshift(this.Form.value);
          // this.get();
          this.router.navigate(['/rapport', {List: this.List}]);
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
