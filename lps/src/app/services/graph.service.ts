
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GraphService {
    constructor(private _http: HttpClient) { }
    getData(url): Observable<any> {
      url = 'http://localhost:3000/leaseMetrics';
      let input = {"pageName":"dashboard","requestData":"leaseMetricsGraph"};
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      // url= 'http://zld06596.vci.att.com:5104/DashboardUIService/overallleases';
      return this._http.get(url);

        // return this._http.post(url,input,httpOptions);
    }
}