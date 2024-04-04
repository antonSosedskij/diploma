import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

import {PresentationRoutingModule} from "./presentation-routing.module";

import {AvatarModule} from "primeng/avatar";

import {LayoutComponent} from "./layout/layout.component";
import {MainComponent} from "./pages/main/main.component";
import {NavMenuBarComponent} from "./components/nav-menu-bar/nav-menu-bar.component";
import {RandomColorPipe} from "./pipes/random-color/random-color.pipe";
import { AiScanComponent } from './pages/ai-scan/ai-scan.component';
import { SpecialComponent } from './pages/special/special.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent,
    NavMenuBarComponent,
    AiScanComponent,
    SpecialComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    PresentationRoutingModule,
    RandomColorPipe,
    AvatarModule,
  ],
  bootstrap: []
})
export class PresentationModule { }
