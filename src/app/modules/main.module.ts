import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';

@NgModule({
  declarations: [
    MainComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRouting,
    ReactiveFormsModule,
    MaterialModule,
  ]
})

export class MainModule {}
