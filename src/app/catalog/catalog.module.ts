import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { ImagesComponent } from './images/images.component';
import { InstancesComponent } from './instances/instances.component';
import { ApplicationsComponent } from './applications/applications.component';
import { InstanceTypesComponent } from './instance-types/instance-types.component';
import  { CatalogService } from "./catalog.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    InventoryComponent,
    ImagesComponent,
    InstancesComponent,
    ApplicationsComponent,
    InstanceTypesComponent
  ],
  providers: [CatalogService],
  declarations: [InventoryComponent, ImagesComponent, InstancesComponent, ApplicationsComponent, InstanceTypesComponent]
})
export class CatalogModule { }
