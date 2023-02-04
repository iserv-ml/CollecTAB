import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElectionService } from 'src/app/services/electionService';
import { PhaseElectionService } from 'src/app/services/phaseService';

@Component({
  selector: 'app-election-view',
  templateUrl: './election-view.component.html',
  styleUrls: ['./election-view.component.scss']
})
export class ElectionViewComponent implements OnInit {

  List: any;
  ListP: any = [];
  deta: any;
  valider = false;
  
  constructor(
    public dialog: MatDialog,
    private electionService: ElectionService,
    private phaseElectionService: PhaseElectionService,
    public dialogRef: MatDialogRef<ElectionViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    this.getP();
  }

  get(){
    this.electionService.getById(this.data.ids).subscribe(
      (res) => {
        this.List = res as String;
        console.log(this.List);

        // this.phaseElectionService.get().subscribe(
        //   (es) => {
        //     let phase = [];
        //     phase = es.data;
        //     console.log(phase);
        //     for(let i=0; i< phase.length; i++)
        //     {
        //       let data = es.data[i];
        //       let idElection = data.electionEntity.idElection;
        //       console.log(idElection);
        //       console.log(this.List.idElection, data, phase, idElection);
        //       if(this.List.idElection == idElection)
        //       {
        //         this.ListP = data as string[]
        //         console.log(this.ListP);
        //       }
        //     }
        //   }
        // )

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

  getP() {
    this.phaseElectionService.get().subscribe(
      (es) => {
        this.ListP = es.data
    })
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    // this.get()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
