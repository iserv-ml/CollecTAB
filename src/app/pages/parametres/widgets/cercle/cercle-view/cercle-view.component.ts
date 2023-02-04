import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CercleService } from 'src/app/services/cercleService';

@Component({
  selector: 'app-cercle-view',
  templateUrl: './cercle-view.component.html',
  styleUrls: ['./cercle-view.component.scss']
})
export class CercleViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private cercleService: CercleService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CercleViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.cercleService.getById(this.data.ids).subscribe(
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
