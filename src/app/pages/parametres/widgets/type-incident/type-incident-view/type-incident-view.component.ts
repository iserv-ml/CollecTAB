import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TypeIncidentService } from 'src/app/services/typeIncidentService';

@Component({
  selector: 'app-type-incident-view',
  templateUrl: './type-incident-view.component.html',
  styleUrls: ['./type-incident-view.component.scss']
})
export class TypeIncidentViewComponent implements OnInit {

  List: any;
  deta: any;
  valider = false;

  constructor(
    private typeIncidentService: TypeIncidentService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<TypeIncidentViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    console.log(this.data.ids, this.List);
    // this.submit();
  }

  get(){
    this.typeIncidentService.getById(this.data.ids).subscribe(
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
