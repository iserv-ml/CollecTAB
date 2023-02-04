import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatistiqueService } from 'src/app/services/statistiqueService';

@Component({
  selector: 'app-statistique-view',
  templateUrl: './statistique-view.component.html',
  styleUrls: ['./statistique-view.component.scss']
})
export class StatistiqueViewComponent implements OnInit {

  List: any;
  deta: any;

  constructor(
    private statistiqueService: StatistiqueService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<StatistiqueViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.statistiqueService.getById(this.data.ids).subscribe(
      (res) => {
        this.List = res as String;
      }
    );
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }

  submit() {
    this.statistiqueService.getById(this.data.ids).subscribe(
      (res) => {
        this.List = res as String;
        console.log(this.List);
      

       this.deta = {
        idstatistique: this.data.ids,
        nb_femme_votant : this.List.nb_femme_votant,
        nb_homme_votant : this.List.nb_homme_votant,
        nb_bulletin_null : this.List.nb_bulletin_null,
        date_statistique : this.List.date_statistique,
        renvoiePossible : this.List.renvoiePossible,
        motifRenvoi : this.List.motifRenvoi,
        dateRapport : this.List.dateRapport,
        valider: true,
        phase_electionEntity : {
          idPhase: this.List.phase_electionEntity.idPhase,
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
      this.statistiqueService.add(this.deta).subscribe(
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
