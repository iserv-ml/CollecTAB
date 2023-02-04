import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BureauVoteService } from 'src/app/services/bureauVoteService';
import { UserService } from 'src/app/services/user.service';
import { AffectationAgentService } from 'src/app/services/affectationAgentService';
import { PhaseElectionService } from 'src/app/services/phaseService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-bureau-vote-affectation-agent',
  templateUrl: './bureau-vote-affectation-agent.component.html',
  styleUrls: ['./bureau-vote-affectation-agent.component.scss']
})
export class BureauVoteAffectationAgentComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  iduser = new FormControl('', [Validators.required]);
  idPhase = new FormControl('', [Validators.required]);
  // coordinateurEntity = this.formBuilder.group({
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  List1: any = [];
  List2: any = [];
  ListB: any;
  List3: any;
  bool: any;

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private userService: UserService,
    private affectationAgentService: AffectationAgentService,
    private phaseElectionService: PhaseElectionService,
    private bureauVoteService: BureauVoteService, 
    public router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BureauVoteAffectationAgentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      iduser: this.iduser,
      idPhase: this.idPhase,
      actif: [true],
      date: Date.now(),
      idBureauVote: this.data.ids,
      // coordinateurEntity: this.formBuilder.group({
        // idCoordinateur: this.idCoordinateur,
      // }),
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      // actif: 'false'
  });
  this.get();
  this.get1();
  this.get2();
  this.getB();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getB(){
    this.bureauVoteService.getById(this.data.ids).subscribe(
      (res) => {
        this.ListB = res as String;;
      }
    );
  }

  get(){
    this.bureauVoteService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  get1(){
    this.phaseElectionService.get().subscribe(
      (res) => {
        this.List1 = res.data;
      }
    );
  }

  get2(){
    this.userService.get().subscribe(
      (res) => {
        this.List2 = res.data;
      }
    );
  }

  delete(id: any){
    this.affectationAgentService.delete(id).subscribe(
      (res) => {
        console.log('delete');
        // this.presentAlertConfirm();
        // this.presentLoading();
        // this.List.splice(index,id);
        // this.get();
        // this.dismissLoading();
      }
    );
  }

  submit(values: any) {

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.affectationAgentService.get().subscribe(
        (es) =>
        {
          let n = (es != null);
          console.log(n);
          if(es != null && es.data.length > 0)
          {
            let list = es.data;
            for(let i=0; i<list.length; i++)
            {
              let deta = es.data[i];
              let bureau1 = deta.bureauvoteEntity.idBureauVote;
              let bureau2 = this.data.ids
              let ids = deta.idAffectation;
              console.log(deta,bureau1, bureau2);
              if(bureau1 == bureau2)
              {
                const data = {
                  idAffectation: deta.idAffectation,
                  date : this.Form.get('date')?.value,
                  actif : this.Form.get('actif')?.value,
                  version : this.Form.get('version')?.value,
                  createdBy : this.Form.get('createdBy')?.value,
                  updatedBy : this.Form.get('updatedBy')?.value,
                  user: {
                    iduser: this.Form.get('iduser')?.value
                  },
                  bureauvoteEntity: {
                    idBureauVote: this.Form.get('idBureauVote')?.value
                  },
                  phase_electionEntity: {
                    idPhase: this.Form.get('idPhase')?.value
                  }
                };
                this.affectationAgentService.update(ids, data).subscribe(
                  (res) => {
                    console.log(res);
                    this.formDirective.resetForm();
                    // this.presentLoading();
                    this.List.unshift(this.Form.value);
                    this.List.push(this.Form.value);
                    // this.get();
                    // this.router.navigate(['/bureau-votes', {List: this.List}]);
                    // this.dismissLoading();
                    // this.closeModel();
                  }
                )
                let agent = deta.user.iduser;
                let agentNow = this.Form.get('iduser')?.value;
                if(agent == agentNow)
                {
                  
                }
              }
              if(bureau1 != bureau2)
              {
                // let deta = es.data[i];
                // let ids = deta.idAffectation;
                let agent = deta.user.iduser;
                let agentNow = this.Form.get('iduser')?.value;
                console.log(agent, agentNow);
                for(let u=0; u<list.length; u++)
                {
                  // const bool: boolean;
                  if(agent != agentNow)
                  {
                    this.bool = true;
                  }
                  else
                  {
                    this.bool = false;
                  }
                }
              }
            }
            if(this.bool == true)
                {
                  const data = {
                    // idAffectation: deta.idAffectation,
                    date : this.Form.get('date')?.value,
                    actif : this.Form.get('actif')?.value,
                    version : this.Form.get('version')?.value,
                    createdBy : this.Form.get('createdBy')?.value,
                    updatedBy : this.Form.get('updatedBy')?.value,
                    user: {
                      iduser: this.Form.get('iduser')?.value
                    },
                    bureauvoteEntity: {
                      idBureauVote: this.Form.get('idBureauVote')?.value
                    },
                    phase_electionEntity: {
                      idPhase: this.Form.get('idPhase')?.value
                    }
                  };
                  this.affectationAgentService.add(data).subscribe(
                    (res) => {
                      console.log(res);
                      this.formDirective.resetForm();
                      // this.presentLoading();
                      this.List.unshift(this.Form.value);
                      this.List.push(this.Form.value);
                      // this.get();
                      // this.router.navigate(['/bureau-votes', {List: this.List}]);
                      // this.dismissLoading();
                      // this.closeModel();
                    }
                  )
                }
                else
                {
                  const data = {
                    idAffectation: this.data.ids,
                    date : this.Form.get('date')?.value,
                    actif : this.Form.get('actif')?.value,
                    version : this.Form.get('version')?.value,
                    createdBy : this.Form.get('createdBy')?.value,
                    updatedBy : this.Form.get('updatedBy')?.value,
                    user: {
                      iduser: this.Form.get('iduser')?.value
                    },
                    bureauvoteEntity: {
                      idBureauVote: this.Form.get('idBureauVote')?.value
                    },
                    phase_electionEntity: {
                      idPhase: this.Form.get('idPhase')?.value
                    }
                  };
                  this.affectationAgentService.update(this.data.ids, data).subscribe(
                    (res) => {
                      console.log(res);
                      this.formDirective.resetForm();
                      // this.presentLoading();
                      this.List.unshift(this.Form.value);
                      // this.get();
                      // this.router.navigate(['/bureau-votes', {List: this.List}]);
                      // this.dismissLoading();
                      // this.closeModel();
                    }
                  )
                }
          }
          console.log(es.data.length);
         if(es.data.length == 0) 
         {
          const data = {
            // idAffectation: 1,
            date : this.Form.get('date')?.value,
            actif : this.Form.get('actif')?.value,
            version : this.Form.get('version')?.value,
            createdBy : this.Form.get('createdBy')?.value,
            updatedBy : this.Form.get('updatedBy')?.value,
            user: {
              iduser: this.Form.get('iduser')?.value
            },
            bureauvoteEntity: {
              idBureauVote: this.data.ids
            },
            phase_electionEntity: {
              idPhase: this.Form.get('idPhase')?.value
            }
          };
          this.affectationAgentService.add(data).subscribe(
            (res) => {
              console.log(res);
              this.formDirective.resetForm();
              // this.presentLoading();
              this.List.unshift(this.Form.value);
              this.List.push(this.Form.value);
              this.get();
              // this.router.navigate(['/bureau-votes', {List: this.List}]);
              // this.dismissLoading();
              this.close();
            }
          )
         }
        //   ); 
        //  }                                                                                                                                                                                                                                                                                                                // }
      })
    }
    else
      {
        // error => {
        //   console.log(error);
      }
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }

}
