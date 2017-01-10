import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SiteData } from '../classes/site-data';
import 'rxjs/add/operator/map'

@Injectable()
export class DiscoverService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getRegions(provider) : Observable<any> {
    return this.http.get('/api/v1/discover/regions?provider='+provider).map((r: Response) => r.json());
  }

  discoverSite(siteData: SiteData) : Observable<any> {
    const data: Object = {
      instances:[],
      filters:[{
        accountInfo: {
          accountId: '123',
          providerType: 'AWS',
          accessKey: siteData.accessKey,
          secretKey: siteData.secretKey,
          regionName: siteData.region,
          regions: ['us-west-2'],
          networkCIDR: 'undefined'
        },
        filters:[{
          filterType: 'STATUS',
          values: ['All']
        }]
      }],
      siteName: siteData.siteName,
      reservedInstanceDetails: [],
      loadBalancers: [],
      scalingGroups: [],
      groupsList: []
    };

    return this.http.put('/api/v1/discover/site', JSON.stringify(data), { headers: this.headers })
      .map((r: Response) => r.json());
  }

}
