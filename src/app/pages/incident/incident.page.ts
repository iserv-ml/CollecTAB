import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { IncidentService } from '../../services/incidentService';
import { TypeIncidentService } from '../../services/typeIncidentService';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.page.html',
  styleUrls: ['./incident.page.scss'],
})
export class IncidentPage implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  Form: FormGroup;
  isSubmitted = false;
  isLoading = false;

  List = []
  List1 = []

  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder, 
    private typeIncidentService: TypeIncidentService,
    private incidentService: IncidentService, 
    public router: Router,
    private toastr: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
      this.Form = this.formBuilder.group({
        dateIncident: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        code: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        valider: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        description: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        type_incidentEntity: this.formBuilder.group({
          idTypeIncident: 1,
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
    console.log(this.Form, this.Form.errors);
  }

  get(){
    this.typeIncidentService.get().subscribe(
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
      this.incidentService.add(this.Form.value).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          this.presentLoading();
          this.List.unshift(this.Form.value);
          // this.get();
          this.router.navigate(['/incident', {List: this.List}]);
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
