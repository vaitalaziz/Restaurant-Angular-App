import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';


import {
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatTabsModule,
  MatSelectModule,
  MatTreeModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from '@angular/material';

const modules = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatTabsModule,
  MatSelectModule,
  MatTreeModule,
  MatCheckboxModule,
  CdkTreeModule,
  MatRadioModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: modules
})

export class MaterialModule { }
