import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LayoutComponent} from "./layout/layout.component";
import {RouterOutlet} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";
import {PresentationRoutingModule} from "./presentation-routing.module";

@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    PresentationRoutingModule
  ],
  bootstrap: []
})
export class PresentationModule { }
