import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-after',
  templateUrl: './after.component.html',
  styleUrls: ['./after.component.css']
})
export class AfterComponent {

  formatted$: Observable<string>;
  property$: Observable<string>;

  constructor(api: ApiService) {
    this.formatted$ = api.getFilters().pipe(map(r => {
      console.log('Response', r);
      return JSON.stringify(r, null, 2);
    }));

    this.property$ = api.getFilters().pipe(
      map(response => response.listValues[0].name)
    );
  }
}
