import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeasetableService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
  getCharacters() {
    return this
      .http
      .get(`${this.url}/leaseData`);
  }

  getColumnListWithConditions(type) {
    return this
      .http
      .get(`${this.url}/type/` + type);
  }
  getSavedFilterList() {
    return this
      .http
      .get(`${this.url}/type/`);
  }
  saveFilter(data){
    return this
    .http
    .post(`${this.url}/type/`,data);
  }
  deleteSavedFilter() {
    return this
      .http
      .get(`${this.url}/type/`);
  }
  editSavedFilter() {
    return this
      .http
      .get(`${this.url}/type/`);
  }


}
