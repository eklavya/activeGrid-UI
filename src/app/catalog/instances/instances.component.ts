import { Component, OnInit } from '@angular/core';

import { Instance } from '../data-models/instance.model';
import { CatalogService } from '../catalog.service'


@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss']
})
export class InstancesComponent implements OnInit {

  constructor(private catalogService: CatalogService) {
    this.catalogService.getInstances(16)
  }

  ngOnInit() {
  }

}
