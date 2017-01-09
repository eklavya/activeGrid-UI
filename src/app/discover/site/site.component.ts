import { Component, OnInit } from '@angular/core';

import { DiscoverService } from '../../shared/discover-service/discover.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  constructor(private discoverService: DiscoverService) { }

  ngOnInit() {
    this.discoverService.getRegions('AWS').subscribe((data) => {
      console.log(data);
    })
  }

}
