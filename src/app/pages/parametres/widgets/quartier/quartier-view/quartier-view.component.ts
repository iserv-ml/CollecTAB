import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuartierService } from 'src/app/services/quartierService';

@Component({
  selector: 'app-quartier-view',
  templateUrl: './quartier-view.component.html',
  styleUrls: ['./quartier-view.component.scss']
})
export class QuartierViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private quartierService: QuartierService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuartierViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.quartierService.getById(this.data.ids).subscribe(
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
