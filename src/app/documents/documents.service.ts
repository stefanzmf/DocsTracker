import { Injectable } from '@angular/core';

@Injectable()
export class DocumentsService {
  private documents = [];

  constructor() {
  }

  public getTableSettings() {
    return {
      hideSubHeader: true,
      columns: {
        idDoc: {
          title: 'ID Documnet',
          editable: false
        },
        owner: {
          title: 'Titular'
        },
        date: {
          title: 'Din data'
        },
        status: {
          title: 'Status'
        }
      }
    }
  }

  public getAllDocuments() {
    return [{
      id: '1',
      idDoc: 'Document 1',
      owner: 'Popescu Andrei',
      date: new Date(1496869200000).toDateString(),
      status: 'Inchis'
    },
    {
      id: '2',
      idDoc: 'Document #2',
      owner: 'Popescu Andrei',
      date: new Date(1497128400000).toDateString(),
      status: 'In progres'
    }];
  }

}
