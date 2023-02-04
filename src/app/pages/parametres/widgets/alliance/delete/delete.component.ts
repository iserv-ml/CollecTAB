import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllianceService } from 'src/app/services/allianceService';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  List: any;

  constructor(
    private allianceService: AllianceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  close() {
    const dialogRef = this.dialog.closeAll();
  }

  delete(){
    this.allianceService.delete(this.data.ids).subscribe(
      (res) => {
        console.log('delete');
        // this.presentAlertConfirm();
        // this.openSnackBar("<strong>Voulez vous supprimez?</strong>" );
        // this.List.splice(this.data.ids);
        this.close();
        // this.dismissLoading();
      }
    );
  }

}
