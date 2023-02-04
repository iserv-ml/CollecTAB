import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PartiService } from 'src/app/services/partiService';

@Component({
  selector: 'app-parti-view',
  templateUrl: './parti-view.component.html',
  styleUrls: ['./parti-view.component.scss']
})
export class PartiViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private partiService: PartiService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PartiViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.partiService.getById(this.data.ids).subscribe(
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
