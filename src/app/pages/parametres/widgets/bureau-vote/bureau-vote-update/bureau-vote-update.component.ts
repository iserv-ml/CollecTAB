import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CentreService } from 'src/app/services/centreService';
import { BureauVoteService } from 'src/app/services/bureauVoteService';
import { RegionService } from 'src/app/services/regionService';
import { QuartierService } from 'src/app/services/quartierService';
import { CommuneService } from 'src/app/services/communeService';
import { CercleService } from 'src/app/services/cercleService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-bureau-vote-update',
  templateUrl: './bureau-vote-update.component.html',
  styleUrls: ['./bureau-vote-update.component.scss']
})
export class BureauVoteUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  thirdFormGroup!: UntypedFormGroup;
  fourFormGroup!: UntypedFormGroup;
  fiveFormGroup!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  nom = new FormControl('', [Validators.required,  Validators.minLength(1)]);
  nbAgentElectoraux = new FormControl('', [Validators.required,  Validators.minLength(1)]);
  adresse = new FormControl('', [Validators.required,  Validators.minLength(1)]);
  nbElecteurs = new FormControl('', [Validators.required,  Validators.minLength(2)]);
  femme = new FormControl('', [Validators.required,  Validators.minLength(1)]);
  homme = new FormControl('', [Validators.required,  Validators.minLength(1)]);
  // coordinateurEntity = this.formBuilder.group({
    idCentre =  new FormControl('', [Validators.required]);
    idCommune =  new FormControl('', [Validators.required]);
    idRegion =  new FormControl('', [Validators.required]);
    idCercle = new FormControl('', [Validators.required]);
    idQuartier = new FormControl('', [Validators.required]);
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];
  Region!: any [];
  Cercle!: any [];
  Commune: any = [];
  Quartier: any = []

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private centreService: CentreService,
    private bureauVoteService: BureauVoteService, 
    private communeService: CommuneService,
    private quartierService: QuartierService,
    private cercleService: CercleService,
    private regionService: RegionService, 
    public router: Router,
    private authService: AuthService,
    private userService: UserService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BureauVoteUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      idRegion: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      idCercle: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      idCommune: ['', Validators.required],
    });
    this.fourFormGroup = this.formBuilder.group({
      idQuartier: ['', Validators.required],
    });
    this.fiveFormGroup = this.formBuilder.group({
      idCentre: ['', Validators.required],
    });
    this.Form = this.formBuilder.group({
      nom: this.nom,
      nbAgentElectoraux: this.nbAgentElectoraux,
      adresse: this.adresse,
      nbElecteurs: this.nbElecteurs,
      femme: this.femme,
      // coordinateurEntity: this.formBuilder.group({
        idCentre: this.fiveFormGroup.get('idCentre')?.value,
      // }),
      homme: this.homme,
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.getById();
  this.get1();
  this.getCom();
  this.getR();
  this.getCer();
  this.getQua();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.bureauVoteService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
      }
    );
  }

  get1(){
    this.centreService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        console.log(this.List1);
      }
    );
  }

  getQua(){
    this.quartierService.get().subscribe(
      (res) => {
        this.Quartier = res.data;
        console.log(this.Quartier);
      }
    );
  }

  getCom(){
    this.communeService.get().subscribe(
      (res) => {
        this.Commune = res.data;
        console.log(this.Commune);
      }
    );
  }

  getR(){
    this.regionService.get().subscribe(
      (res) => {
        this.Region = res.data;
        console.log(this.Region);
      }
    );
  }

  getCer(){
    this.cercleService.get().subscribe(
      (res) => {
        this.Cercle = res.data;
        console.log(this.Cercle);
      }
    );
  }

  onSubmitFirst() {
    this.idRegion = this.firstFormGroup.get('idRegion')?.value;
    return this.idRegion;
  }

  onSubmitSecond() {
    this.idCercle = this.secondFormGroup.get('idCercle')?.value;
    return this.idCercle;
  }
  onSubmitthird() {
    this.idCommune = this.thirdFormGroup.get('idCommune')?.value;
    return this.idCommune;
  } 
  onSubmitfour() {
    this.idQuartier = this.fourFormGroup.get('idQuartier')?.value;
    return this.idQuartier;
  } 
  onSubmitfive() {
    this.idCentre = this.fiveFormGroup.get('idCentre')?.value;
    return this.idCentre;
  } 

  submit(values: any) {

    const data = {
      idBureauVote: this.data.ids,
      nom : this.Form.get('nom')?.value,
      nbAgentElectoraux : this.Form.get('nbAgentElectoraux')?.value,
      adresse : this.Form.get('adresse')?.value,
      nbElecteurs : this.Form.get('nbElecteurs')?.value,
      homme : this.Form.get('homme')?.value,
      femme : this.Form.get('femme')?.value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      centreEntity: {
        idCentre: this.fiveFormGroup.get('idCentre')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form);
    if(this.Form.valid)
    {
      this.bureauVoteService.update(this.data.ids, data).subscribe(
        (res) => {
          this.formDirective.resetForm();
          // this.presentLoading();
          // this.List.unshift(data);
          // this.get();
          this.close();
          // this.router.navigate(['/pays', {List: this.List}]);
          // this.dismissLoading();
        }
      )
    }
    
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.getById()
  }

}
