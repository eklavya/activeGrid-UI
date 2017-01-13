import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service'

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
  }

}
