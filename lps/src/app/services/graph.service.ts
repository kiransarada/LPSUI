
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class GraphService {
    constructor(private _http: HttpClient) { }
    getData(url,inputNew,httpOptionsNew): Observable<any> {
      let input = {"pageName":"dashboard","requestData":"leaseMetricsGraph"};
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
        return this._http.post(url,inputNew,httpOptionsNew);
    }
}