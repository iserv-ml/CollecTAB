import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroupDirective, UntypedFormBuilder, UntypedFormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { incidentService } from 'src/app/services/incidentService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-incident-update',
  templateUrl: './incident-update.component.html',
  styleUrls: ['./incident-update.component.scss']
})
export class IncidentUpdateComponent implements OnInit {

  List = [];
  Listid: any;

  isSubmitted = false;
  isLoading = false;
  Form!: UntypedFormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  
  matcher = new MyErrorStateMatcher();
  valider = new FormControl('', [Validators.required,  Validators.minLength(3)]);

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private incidentService: incidentService,
    public dialog: MatDialog,
    // private loadingController: LoadingController,
    public dialogRef: MatDialogRef<IncidentUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    this.Form = this.formBuilder.group({
      // suffrage: this.statistiqueService.getById(this.id).subscribe((res) => {
      //   return res.suffrage
      // }),
        valider: this.valider,
        // valider: ['', Validators.required],
        dateIncident: Date.now(),
    });
    console.log(this.Form, this.Form.errors, this.get(), this.data.ids);
  }

  get(){
    this.incidentService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  submit(values: any) {

    this.incidentService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as string;
        console.log(this.Listid);
        this.data = this.List;

        const deta = {
          idincident: this.Listid.idincident,
          description : this.Listid.description,
          code : this.Listid.code,
          // valider : this.Listid.valider,
          // description : this.Form.get('description').value,
          dateIncident : this.Form.get('dateIncident')?.value,
          valider : this.Form.get('valider')?.value,
          type_incidentEntity : {
            idTypeIncident: this.Listid.typeincidentEntity.idTypeIncident,
          },
          affectationagentEntity : {
            idAffectation: this.Listid.affectationagentEntity.idAffectation,
          },
          version : this.Listid.version,
          createdBy : this.Listid.createdBy,
          updatedBy : this.Listid.updatedBy,
        };
      
        this.isSubmitted = true;
        console.log(this.Form, this.data, deta);
        if(this.Form.valid)
        {
          this.incidentService.update(this.Listid.idincident, deta).subscribe(
            (res) => {
              this.formDirective.resetForm();
              // this.presentLoading();
              // this.List.unshift(data);
              this.get();
              this.close();
              // this.router.navigate(['/pays', {List: this.List}]);
              // this.dismissLoading();
            }
          )
        }

      }
    );

  
}

close() {
  const dialogRef = this.dialog.closeAll();
  this.get()
}

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}
