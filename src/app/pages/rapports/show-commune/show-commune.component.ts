import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommuneService } from 'src/app/services/communeService';
import { ShowQuartierComponent } from '../show-quartier/show-quartier.component';

@Component({
  selector: 'app-show-commune',
  templateUrl: './show-commune.component.html',
  styleUrls: ['./show-commune.component.scss']
})
export class ShowCommuneComponent implements OnInit {

  Commune : any = []
  id: any;

  constructor(
    private communeService: CommuneService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ShowCommuneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getCommune();
    this.id = this.data.ids;
  }

  getCommune() {
    this.communeService.get().subscribe(
      (res) => {
        this.Commune = res.data;
      }
    )
  }

  showCommune(id: any) {
    const dialogRef = this.dialog.open(ShowQuartierComponent,
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
