import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatService } from 'src/app/services/candidatService';
import { ResultatService } from 'src/app/services/resultatService';

@Component({
  selector: 'app-resultat-view',
  templateUrl: './resultat-view.component.html',
  styleUrls: ['./resultat-view.component.scss']
})
export class ResultatViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;
  ListCandidat = [];
  CandidatP: any;
  CandidatN = "";
  idAlliance = "";

  constructor(
    private resultatService: ResultatService,
    private candidatService: CandidatService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ResultatViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
  }

  get(){
    this.resultatService.getById(this.data.ids).subscribe(
      (res) => {
        this.List = res as String;
        this.idAlliance = res.candidatEntity.allianceEntity.idAlliance;
        console.log(this.idAlliance);
        this.candidatService.get().subscribe(
          (res) => {
            this.ListCandidat = res.data;
            console.log(this.idAlliance);
            for(let i=0; i<this.ListCandidat.length; i++)
            {
              let data = res.data[i];
              let idAllianceNow = data.allianceEntity.idAlliance;
              console.log(idAllianceNow, data, this.idAlliance);
              if(idAllianceNow == this.idAlliance)
              {
                this.CandidatP = data.prenom;
                this.CandidatN = data.nom
                console.log(this.CandidatP, this.CandidatN, this.idAlliance);
              }
              // this.CandidatN = this.CandidatN;
              // this.CandidatN = this.CandidatN;
            }
            this.CandidatN = this.CandidatN;
            this.CandidatN = this.CandidatN;
            console.log(this.CandidatN, this.CandidatP);
            
          }
        )
      }
    );
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }

}
