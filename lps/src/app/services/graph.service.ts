
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GraphService {
    constructor(private _http: HttpClient) { }
    getData(url): Observable<any> {
      url = 'http://localhost:3000/commonChart';
        return this._http.get(url);
    }
}