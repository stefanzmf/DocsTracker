import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ToolbarComponent, TableComponent],
  exports: [TableComponent]
})
export class DocumentsModule { }
