import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {MainComponent} from "./pages/main/main.component";
import {AiScanComponent} from "./pages/ai-scan/ai-scan.component";
import {SpecialComponent} from "./pages/special/special.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'main',
            pathMatch: 'full',
            component: MainComponent,
            title: 'Главная'
          },
          {
            path: 'ai-scan',
            pathMatch: 'full',
            component: AiScanComponent,
            title: 'AiScan'
          },
          {
            path: 'special',
            pathMatch: 'full',
            component: SpecialComponent,
            title: 'Польза дня'
          },
          {
            path: 'profile',
            pathMatch: 'full',
            component: ProfileComponent,
            title: 'Профиль'
          }
        ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PresentationRoutingModule {

}
