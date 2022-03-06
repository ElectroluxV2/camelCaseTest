import { TestBed } from '@angular/core/testing';

import { ReformatHttpResponseInterceptor } from './reformat-http-response.interceptor.service';

describe('ReformatHttpResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReformatHttpResponseInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: ReformatHttpResponseInterceptor = TestBed.inject(ReformatHttpResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
