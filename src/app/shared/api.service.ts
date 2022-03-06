import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiItem {
  name: string;
}

export interface ApiResponse {
  type: number;
  listValues: ApiItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public getFilters(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:5000/Public/Data/Filters',
      {seLecTiOnS: {attributes: [], timeRanges:
            [{customEndName: 'End of Forecast', customStartName: 'Current Year', frequencyType: 'Years', FROM: '2022-01-01', to: '2033-01-01', position: 0}],
          conceptId: 117, currentTab: null, sortBy: null}, attributeId: 2172});
  }
}
