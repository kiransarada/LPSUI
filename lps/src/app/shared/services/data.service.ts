import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    // baseUrl: string = "assets/JSON/criticalDates.json";

    constructor(private httpClient: HttpClient) {

    }
    getConfig(url) {
        return this.httpClient.get(url);
      }
}
