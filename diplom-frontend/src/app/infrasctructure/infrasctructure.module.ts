import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class AppInfrastructureModule {
  static forRoot(): ModuleWithProviders<AppInfrastructureModule>{
    return {
      ngModule: AppInfrastructureModule,

    }
  }
}
