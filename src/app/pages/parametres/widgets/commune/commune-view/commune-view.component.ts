import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommuneService } from 'src/app/services/communeService';

@Component({
  selector: 'app-commune-view',
  templateUrl: './commune-view.component.html',
  styleUrls: ['./commune-view.component.scss']
})
export class CommuneViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private communeService: CommuneService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CommuneViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.communeService.getById(this.data.ids).subscribe(
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
