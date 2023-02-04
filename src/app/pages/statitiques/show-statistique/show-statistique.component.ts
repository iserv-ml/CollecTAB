import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StatistiqueService } from 'src/app/services/statistiqueService';
import { StatistiqueViewComponent } from '../statistique-view/statistique-view.component';

@Component({
  selector: 'app-show-statistique',
  templateUrl: './show-statistique.component.html',
  styleUrls: ['./show-statistique.component.scss']
})
export class ShowStatistiqueComponent implements OnInit {

  Statistique : any = []
  id: any;

  constructor(
    private statistiqueService: StatistiqueService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ShowStatistiqueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getRapport();
    this.id = this.data.ids;
  }

  getRapport() {
    this.statistiqueService.get().subscribe(
      (res) => {
        this.Statistique = res.data;
      }
    )
  }

  showRapport(id: any) {
    const dialogRef = this.dialog.open(StatistiqueViewComponent,
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
