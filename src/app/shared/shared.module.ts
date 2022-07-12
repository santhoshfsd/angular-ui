import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './layouts/components/column/column.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { RouterModule } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgProgressModule
  ],
  declarations:[ColumnComponent,HeaderComponent],
  exports:[
    ColumnComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
