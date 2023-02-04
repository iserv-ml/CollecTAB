import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuartierService } from 'src/app/services/quartierService';
import { ShowCentreComponent } from '../show-centre/show-centre.component';

@Component({
  selector: 'app-show-quartier',
  templateUrl: './show-quartier.component.html',
  styleUrls: ['./show-quartier.component.scss']
})
export class ShowQuartierComponent implements OnInit {

  Quartier : any = []
  id: any;

  constructor(
    private QuartierService: QuartierService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ShowQuartierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getQuartier();
    this.id = this.data.ids;
  }

  getQuartier() {
    this.QuartierService.get().subscribe(
      (res) => {
        this.Quartier = res.data;
      }
    )
  }

  showQuartier(id: any) {
    const dialogRef = this.dialog.open(ShowCentreComponent,
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
