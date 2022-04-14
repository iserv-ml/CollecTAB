import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { DemandeAppelService } from '../../services/demandeAppelService';
import { AffectationAgentService } from '../../services/affectationAgentService';

@Component({
  selector: 'app-demande-appel',
  templateUrl: './demande-appel.page.html',
  styleUrls: ['./demande-appel.page.scss'],
})
export class DemandeAppelPage implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  Form: FormGroup;
  isSubmitted = false;
  isLoading = false;

  List = []
  List1 = []

  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder, 
    private userService: UserService,
    private demandeAppelService: DemandeAppelService, 
    private affectationAgentService: AffectationAgentService, 
    public router: Router,
    private toastr: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
      this.Form = this.formBuilder.group({
        motif: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        commentaire: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        traite: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        user: this.formBuilder.group({
          iduser: 1,
        }),
        agentTerrainEntity: this.formBuilder.group({
          idAgentTerrain: 1,
        }),
        // notification: ['', Validators.compose([Validators.required, Validators.minLength(3)])],      // communeEntity: this.formBuilder.group({
        //   idCommune: ['', Validators.compose([Validators.required])],
        // }),
        version: 1,
        updatedBy: 'admin',
        createdBy: 'admin',
        actif: 'false'
    });
    // this.get();
    // this.get1();
    console.log(this.Form, this.Form.errors);
  }

  // get(){
  //   this.userService.getUserById(1).subscribe(
  //     (res) => {
  //       this.List = res.data;
  //     }
  //   );
  // }

  get errorControl() {
    return this.Form.controls;
  }

  submit(values) {

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.demandeAppelService.add(this.Form.value).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          this.presentLoading();
          this.List.unshift(this.Form.value);
          // this.get();
          this.router.navigate(['/demande-appel', {List: this.List}]);
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
