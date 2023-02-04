import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CentreService } from 'src/app/services/centreService';

@Component({
  selector: 'app-centre-view',
  templateUrl: './centre-view.component.html',
  styleUrls: ['./centre-view.component.scss']
})
export class CentreViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private centreService: CentreService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CentreViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.centreService.getById(this.data.ids).subscribe(
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
