import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CentreService } from 'src/app/services/centreService';
import { ShowBureauVoteComponent } from '../show-bureau-vote/show-bureau-vote.component';

@Component({
  selector: 'app-show-centre',
  templateUrl: './show-centre.component.html',
  styleUrls: ['./show-centre.component.scss']
})
export class ShowCentreComponent implements OnInit {

  Centre : any = []
  id: any;

  constructor(
    private CentreService: CentreService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ShowCentreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getCentre();
    this.id = this.data.ids;
  }

  getCentre() {
    this.CentreService.get().subscribe(
      (res) => {
        this.Centre = res.data;
      }
    )
  }

  showBureauVote(id: any) {
    const dialogRef = this.dialog.open(ShowBureauVoteComponent,
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
