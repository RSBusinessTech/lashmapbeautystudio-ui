import { TestBed } from '@angular/core/testing';

import { TrackBookingService } from './track-booking.service';

describe('TrackBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackBookingService = TestBed.get(TrackBookingService);
    expect(service).toBeTruthy();
  });
});
