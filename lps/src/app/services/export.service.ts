import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ExportService {
    constructor(private _http: HttpClient) { }

    getExportGraphFile(reqData): Observable<any> {
     let url = 'http://130.6.149.41:5106/ExportDataService/generateExcelReportAndSendStatus';
      let input = {"pageName":"dashboard","requestData":"exportGraph", "category":"Management Company","subCategory":["5 STAR COMM", "ATC"], "graphName": "Overall Leases", "userName":"LPSUser"};
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token',
          'Access-Control-Allow-Origin' : '**' 
        })
      };

      return this._http.post(url, reqData);
    }
}