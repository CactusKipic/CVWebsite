import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialmoduleImport } from './materialmodule-import.module';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    MaterialmoduleImport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
