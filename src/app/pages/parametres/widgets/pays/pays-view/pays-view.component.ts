import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PaysService } from 'src/app/services/paysService';

@Component({
  selector: 'app-pays-view',
  templateUrl: './pays-view.component.html',
  styleUrls: ['./pays-view.component.scss']
})
export class PaysViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private paysService: PaysService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PaysViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.paysService.getById(this.data.ids).subscribe(
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
