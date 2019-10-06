import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {SystemComponent} from './system/system.component';
import {HomeComponent} from './home/home.component';
import {DailyActivityComponent} from './system/daily-activity/daily-activity.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'system', children: [
    {path: 'daily', component: DailyActivityComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
