import { Component, OnInit } from '@angular/core';

import { DocumentsService } from '../documents.service';

@Component({
  selector: 'docs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DocumentsService]
})
export class TableComponent implements OnInit {
  private settings = {};
  private data = [];

  constructor(docsService: DocumentsService) {
    this.settings =  docsService.getTableSettings();
    this.data = docsService.getAllDocuments();
  }

  ngOnInit() {
  }

}
