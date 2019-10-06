import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { DailyActivityComponent } from './daily-activity/daily-activity.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import {ModalModule} from 'ngx-bootstrap';
import { NotesComponent } from './notes/notes.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { ItemComponent } from './shared/components/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DailyActivityComponent,
    ModalComponent,
    NotesComponent,
    GeneralViewComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SystemModule { }
