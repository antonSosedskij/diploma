import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppInfrastructureModule } from "./infrasctructure/infrasctructure.module";
import { PresentationModule } from "./presentation/presentation.module";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppInfrastructureModule.forRoot(),
    PresentationModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
