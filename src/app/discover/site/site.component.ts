import { Component, OnInit } from '@angular/core';

import { DiscoverService } from '../../shared/discover-service/discover.service';
import { SiteData } from '../../shared/classes/site-data';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  public regions: any[];

  constructor(private discoverService: DiscoverService) { }

  ngOnInit() {
    this.discoverService.getRegions('AWS').subscribe((data) => {
      console.log(data);
      this.regions = data;
    });
  }

  discoverSite() {
    const siteData: SiteData = {
      siteName: '',
      accessKey: '',
      secretKey: '',
      region: 'us-east-1'
    };
    this.discoverService.discoverSite(siteData).subscribe((data) => {
      console.log(data);
    });
  }

}
