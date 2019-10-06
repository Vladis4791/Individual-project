import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system.component';
import {DailyActivityComponent} from './daily-activity/daily-activity.component';
import {HomeComponent} from '../home/home.component';
import {NotesComponent} from './notes/notes.component';
import {GeneralViewComponent} from './general-view/general-view.component';

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
    {path: 'home', component: HomeComponent },
    {path: 'daily', component: DailyActivityComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'general', component: GeneralViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
