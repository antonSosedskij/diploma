import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {MainComponent} from "./pages/main/main.component";

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
