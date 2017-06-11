import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';
import { DocumentsModule } from './documents/documents.module';
import { MembersModule } from './members/members.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    DocumentsModule,
    MembersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
