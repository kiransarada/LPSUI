import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ExportService {
    constructor(private _http: HttpClient) { }

    getExportGraphFile(reqData): Observable<any> {
     let url = 'http://localhost:3000/exportGraphFile';
      let input = reqData;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

      return this._http.get(url);
    }
}