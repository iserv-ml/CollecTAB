import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DemandeAppelService } from 'src/app/services/demandeAppelService';

@Component({
  selector: 'app-demande-appel-view',
  templateUrl: './demande-appel-view.component.html',
  styleUrls: ['./demande-appel-view.component.scss']
})
export class DemandeAppelViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;
  
  constructor(
    private demandeAppelService: DemandeAppelService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DemandeAppelViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.demandeAppelService.getById(this.data.ids).subscribe(
      (res) => {
        this.List = res as String;
        console.log(this.List);
        if(this.List.valider == null || this.List.valider == 'false')
        {
          this.valider == false;
        }
        else
        {
          this.valider == true;
        }
      }
    );
  }

  submit() {
    this.demandeAppelService.getById(this.data.ids).subscribe(
      (res) => {
        this.List = res as String;
        console.log(this.List);
      

       this.deta = {
        idDemande: this.data.ids,
        motif : this.List.motif,
        commentaire : this.List.commentaire,
        // tauxParticipation : this.List.tauxParticipation,
        // respectProcedureOuverture : this.List.respectProcedureOuverture,
        // disponibiliteMateriel : this.List.disponibiliteMateriel,
        // nbAgentElectauraux : this.List.nbAgentElectauraux,
        // motifRapport : this.List.motifRapport,
        // motifRenvoi : this.List.motifRenvoi,
        // dateRapport : this.List.dateRapport,
        // renvoiePossible : this.List.renvoiePossible,
        traite: true,
        user : {
          iduser: this.List.user.iduser,
        },
        // affectationagentEntity : {
        //   idAffectation: this.List.affectationagentEntity.idAffectation,
        // },
        version : this.List.version,
        createdBy : this.List.createdBy,
        updatedBy : this.List.updatedBy,
        createdAt: this.List.createdAt
      };
  
    console.log(this.deta);
    {
      this.demandeAppelService.add(this.deta).subscribe(
        (res) => {
          // this.formDirective.resetForm();
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
  );
    
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }

}
