import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationModule } from './navigation/navigation.module';
import { CatalogModule } from './catalog/catalog.module';
import { DiscoverModule } from './discover/discover.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NavigationModule,
    CatalogModule,
    DiscoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
