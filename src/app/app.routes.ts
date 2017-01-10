import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './catalog/inventory/inventory.component';
import { ImagesComponent } from './catalog/images/images.component';
import { InstanceTypesComponent } from './catalog/instance-types/instance-types.component';
import { InstancesComponent } from './catalog/instances/instances.component';
import { ApplicationsComponent } from './catalog/applications/applications.component';
import { SiteComponent } from './discover/site/site.component';
import { ApplicationComponent } from './discover/application/application.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'catalog',
    children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: InventoryComponent },
      { path: 'images', component: ImagesComponent },
      { path: 'instance-types', component: InstanceTypesComponent },
      { path: 'instances', component: InstancesComponent },
      { path: 'applications', component: ApplicationsComponent }
    ]
  },
  {
    path: 'discover',
    children: [
      { path: '', redirectTo: 'site', pathMatch: 'full' },
      { path: 'site', component: SiteComponent },
      { path: 'application', component: ApplicationComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
