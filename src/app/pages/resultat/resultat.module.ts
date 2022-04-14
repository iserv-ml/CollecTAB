import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatPageRoutingModule } from './resultat-routing.module';

import { ResultatPage } from './resultat.page';
import { MatPaginatorModule } from '@angular/material/paginator';
// import  { NgxDatatableModule }  from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatPageRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    // NgxDatatableModule,
    MatTableModule
  ],
  declarations: [ResultatPage]
})
export class ResultatPageModule {}
