import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SystemModule} from './system/system.module';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { MenuComponent } from './system/shared/components/menu/menu.component';
import { SidebarComponent } from './system/shared/components/sidebar/sidebar.component';
import { EditModeComponent } from './system/shared/components/edit-mode/edit-mode.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MenuComponent,
    SidebarComponent,
    EditModeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SystemModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
