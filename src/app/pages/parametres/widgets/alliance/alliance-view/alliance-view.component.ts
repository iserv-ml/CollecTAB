import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AllianceService } from 'src/app/services/allianceService';

@Component({
  selector: 'app-alliance-view',
  templateUrl: './alliance-view.component.html',
  styleUrls: ['./alliance-view.component.scss']
})
export class AllianceViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private allianceService: AllianceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AllianceViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.allianceService.getById(this.data.ids).subscribe(
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
