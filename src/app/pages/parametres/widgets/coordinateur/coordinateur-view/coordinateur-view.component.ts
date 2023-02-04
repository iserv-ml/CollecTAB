import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CoordinateurService } from 'src/app/services/coordinateurService';

@Component({
  selector: 'app-coordinateur-view',
  templateUrl: './coordinateur-view.component.html',
  styleUrls: ['./coordinateur-view.component.scss']
})
export class CoordinateurViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private coordinateurService: CoordinateurService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CoordinateurViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.coordinateurService.getById(this.data.ids).subscribe(
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

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }
}
