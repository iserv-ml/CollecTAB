import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { rapportService } from 'src/app/services/rapportService';
import { RapportViewComponent } from '../rapport-view/rapport-view.component';

@Component({
  selector: 'app-show-rapport',
  templateUrl: './show-rapport.component.html',
  styleUrls: ['./show-rapport.component.scss']
})
export class ShowRapportComponent implements OnInit {

  Rapport : any = []
  id: any;

  constructor(
    private RapportService: rapportService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ShowRapportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getRapport();
    this.id = this.data.ids;
  }

  getRapport() {
    this.RapportService.get().subscribe(
      (res) => {
        this.Rapport = res.data;
      }
    )
  }

  showRapport(id: any) {
    const dialogRef = this.dialog.open(RapportViewComponent,
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
