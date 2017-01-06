import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site/site.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SiteComponent,
    ApplicationComponent
  ],
  declarations: [SiteComponent, ApplicationComponent]
})
export class DiscoverModule { }
