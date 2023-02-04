import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AffectationAgentService } from 'src/app/services/affectationAgentService';
import { BureauVoteService } from 'src/app/services/bureauVoteService';

@Component({
  selector: 'app-bureau-vote-view',
  templateUrl: './bureau-vote-view.component.html',
  styleUrls: ['./bureau-vote-view.component.scss']
})
export class BureauVoteViewComponent implements OnInit {

  List: any;
  List1: any = [];
  deta: any;
  valider = false;

  constructor(
    private bureauVoteService: BureauVoteService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BureauVoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private affectationAgentService: AffectationAgentService
  ) { }

  ngOnInit() {
    this.get();
    this.getAgentAffecte();
    console.log(this.data.ids, this.List, this.List1);
    // this.submit();
  }

  get(){
    this.bureauVoteService.getById(this.data.ids).subscribe(
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

  getAgentAffecte(){
    this.affectationAgentService.get().subscribe(
      (res) => {
        // console.log(res.data.bureauvoteEntity.idBureauVote);
        // if(res.data.bureauvoteEntity.idBureauVote === this.id)
        // {
          this.List1 = res.data;
          console.log(this.List1);
        // }
      }
    );
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }

}
