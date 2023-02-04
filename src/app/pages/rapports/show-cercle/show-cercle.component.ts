import { Component, Inject, OnInit } from '@angular/core';
import { CercleService } from 'src/app/services/cercleService';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShowCommuneComponent } from '../show-commune/show-commune.component';

@Component({
  selector: 'app-show-cercle',
  templateUrl: './show-cercle.component.html',
  styleUrls: ['./show-cercle.component.scss']
})
export class ShowCercleComponent implements OnInit {

  Cercle : any = []
  id: any;

  constructor(
    private cercleService: CercleService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ShowCercleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getCercle();
    this.id = this.data.ids;
  }

  getCercle() {
    this.cercleService.get().subscribe(
      (res) => {
        this.Cercle = res.data;
      }
    )
  }

  showCommune(id: any) {
    const dialogRef = this.dialog.open(ShowCommuneComponent,
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
