import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatService } from 'src/app/services/candidatService';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.scss']
})
export class CandidatViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private candidatService: CandidatService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CandidatViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.candidatService.getById(this.data.ids).subscribe(
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
