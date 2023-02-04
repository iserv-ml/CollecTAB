import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BureauVoteService } from 'src/app/services/bureauVoteService';
import { ShowRapportComponent } from '../show-rapport/show-rapport.component';

@Component({
  selector: 'app-show-bureau-vote',
  templateUrl: './show-bureau-vote.component.html',
  styleUrls: ['./show-bureau-vote.component.scss']
})
export class ShowBureauVoteComponent implements OnInit {

  BureauVote : any = []
  id: any;

  constructor(
    private BureauVoteService: BureauVoteService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ShowBureauVoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getBureauVote();
    this.id = this.data.ids;
  }

  getBureauVote() {
    this.BureauVoteService.get().subscribe(
      (res) => {
        this.BureauVote = res.data;
      }
    )
  }

  showBureauVote(id: any) {
    const dialogRef = this.dialog.open(ShowRapportComponent,
      { data: {ids: id}, disableClose: true });
      console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      // this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    // this.get()
  }

}
