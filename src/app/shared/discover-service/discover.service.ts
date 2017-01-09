import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DiscoverService {

  constructor(private http: Http) { }

  getRegions(provider) : Observable<any> {
    return this.http.get('/discover/regions?provider='+provider).map((r: Response) => r.json());
  }

}
