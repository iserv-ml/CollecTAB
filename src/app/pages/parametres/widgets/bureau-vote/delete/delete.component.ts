import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgentService } from 'src/app/services/agentService';
import { BureauVoteService } from 'src/app/services/bureauVoteService';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
    private bureauVoteService: BureauVoteService,
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
    this.bureauVoteService.delete(this.data.ids).subscribe(
      (res) => {
        console.log('delete');
        // this.presentAlertConfirm();
        // this.openSnackBar("<strong>Voulez vous supprimez?</strong>" );
        // this.List.splice(index,id);
        // this.get();
        // this.dismissLoading();
      }
    );
  }

}
