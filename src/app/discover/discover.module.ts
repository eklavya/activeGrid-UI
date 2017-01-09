import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site/site.component';
import { ApplicationComponent } from './application/application.component';
import { DiscoverService } from '../shared/discover-service/discover.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SiteComponent,
    ApplicationComponent
  ],
  providers: [
    DiscoverService
  ],
  declarations: [SiteComponent, ApplicationComponent]
})
export class DiscoverModule { }
