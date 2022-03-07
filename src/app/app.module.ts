import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {AfterModule} from './after/after/after.module';
import {BeforeModule} from './before/before/before.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AfterModule,
    BeforeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
