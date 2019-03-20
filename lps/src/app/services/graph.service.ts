
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class GraphService {
    constructor(private _http: HttpClient) { }
    getData(url,inputNew,httpOptionsNew): Observable<any> {
      // url = 'http://localhost:3201/leaseMetrics'
      let input = {"pageName":"dashboard","requestData":"leaseMetricsGraph"};
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
       //return this._http.get(url);
        return this._http.post(url,inputNew,httpOptionsNew);
    }
    getGraphData(url,inputNew,httpOptionsNew): Observable<any> {
      // url = 'http://localhost:3201/leaseMetrics'
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
       return this._http.get(url);
       // return this._http.post(url,inputNew,httpOptionsNew);
    }
    // getDropdownData(url,inputNew,httpOptionsNew): Observable<any> {
    //   let input = {"pageName":"dashboard","requestData":"staticData"};
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization': 'my-auth-token'
    //     })
    //   };
    //   return this._http.post(url,inputNew,httpOptionsNew);
    // }
    getDropdownData(url): Observable<any> {
      url = 'assets/JSON/dropdown-select.json';
      let input = {"pageName":"dashboard","requestData":"leaseMetricsGraph"};
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      // url= 'http://zld06596.vci.att.com:5104/DashboardUIService/overallleases';
      return this._http.get(url);
    }
}