import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) { }
    public post(url: string, body?: Object): Observable<any> {
        let headers = new HttpHeaders();
        return this.httpClient.post<any>(url, body,{ headers });
    }

    public delete(url: string, body?: Object): Observable<any> {
        let headers = new HttpHeaders();
        return this.httpClient.delete<any>(url, { headers });
    }

    public get(url: string, query: Object = {}): Observable<any> {
        let headers = new HttpHeaders();
        return this.httpClient.get<any>(url, { params: <HttpParams>query, headers })
    }
    public put(url: string, body?: Object): Observable<any> {
        let headers = new HttpHeaders();
        return this.httpClient.put<any>(url, body);
    }


}
