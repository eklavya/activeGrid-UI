import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

@Injectable()
export class CatalogService {
  private baseUrl: string = '/api/v1/';

  constructor(private http: Http) { }

  getInstances(siteId: Number) : Observable<any> {
    return this.http.get(`${this.baseUrl}catalog/instanceTypes?siteId=${siteId}`)
                    .map(this.extractData);
  }

  getApplications(siteId: Number) : Observable<any> {
    return this.http.get(`${this.baseUrl}sites/{siteId}/applications`)
                    .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
