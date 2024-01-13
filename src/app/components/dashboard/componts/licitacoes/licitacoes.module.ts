import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicitacoesComponent } from './licitacoes.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {  FileUploadModule } from 'primeng/fileupload';



@NgModule({
  declarations: [
    LicitacoesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LicitacoesComponent }]),
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    FileUploadModule
  ],
  exports: [
    LicitacoesComponent
  ]
})
export class LicitacoesModule { }
