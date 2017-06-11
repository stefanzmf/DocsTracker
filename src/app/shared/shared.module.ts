import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './nav/nav.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [NavComponent, UserPanelComponent],
  exports: [NavComponent, UserPanelComponent]
})
export class SharedModule { }
