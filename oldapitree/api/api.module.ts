import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  Provider,
  SkipSelf,
} from '@angular/core';

import { ApiService } from './api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ApiService],
})
export class ApiModule {
  constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
    if (parentModule) {
      throw new Error(
        'ApiModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(implementationUrls: Provider): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [implementationUrls],
    };
  }
}
