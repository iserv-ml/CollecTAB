import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { rapportService } from 'src/app/services/rapportService';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RapportUpdateComponent } from '../rapport-update/rapport-update.component';

@Component({
  selector: 'app-rapport-view',
  templateUrl: './rapport-view.component.html',
  styleUrls: ['./rapport-view.component.scss']
})
export class RapportViewComponent implements OnInit {

  // @Output() submitClicked = new EventEmitter<any>();
  // @Input() id: any;
  List: any;
  deta: any;
  valider = false;
  
  constructor(
    private rapportService: rapportService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<RapportViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.rapportService.getById(this.data.ids).subscribe(
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

  openDialog2(id: any) {
    const dialogRef = this.dialog.open(RapportUpdateComponent,
      { data:{ids: id}, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.get();
    });
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }

  submit() {
    this.rapportService.getById(this.data.ids).subscribe(
      (res) => {
        this.List = res as String;
        console.log(this.List);
      

       this.deta = {
        idrapport: this.data.ids,
        contenu : this.List.contenu,
        heureOuverture : this.List.heureOuverture,
        tauxParticipation : this.List.tauxParticipation,
        respectProcedureOuverture : this.List.respectProcedureOuverture,
        disponibiliteMateriel : this.List.disponibiliteMateriel,
        nbAgentElectauraux : this.List.nbAgentElectauraux,
        motifRapport : this.List.motifRapport,
        motifRenvoi : this.List.motifRenvoi,
        dateRapport : this.List.dateRapport,
        renvoiePossible : this.List.renvoiePossible,
        valider: true,
        typeRapportEntity : {
          idTypeRapport: this.List.typeRapportEntity.idTypeRapport,
        },
        affectationagentEntity : {
          idAffectation: this.List.affectationagentEntity.idAffectation,
        },
        version : this.List.version,
        createdBy : this.List.createdBy,
        updatedBy : this.List.updatedBy,
      };
  
    console.log(this.deta);
    {
      this.rapportService.add(this.deta).subscribe(
        (res) => {
          // this.formDirective.resetForm();
          // this.presentLoading();
          // this.List.unshift(data);
          this.get();
          // this.close();
          // this.router.navigate(['/pays', {List: this.List}]);
          // this.dismissLoading();
        }
      )
    }
  }
  );
    
  }

}
