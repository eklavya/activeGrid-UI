/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiscoverService } from './discover.service';

describe('DiscoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoverService]
    });
  });

  it('should ...', inject([DiscoverService], (service: DiscoverService) => {
    expect(service).toBeTruthy();
  }));
});
