import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LeasetableService {

  constructor(private http: HttpClient,private apiService:ApiService) { }
  getCharacters() {
    return this
      .apiService
      .get(environment.leaseSearch_Api+`/leaseData`);
  }

  
  getDataForSearch(data) {
    return this
    .apiService
    .get(`http://localhost:3000`+`/leaseData`);
    // return this.http.post(environment.leaseSearch_Api+`/LeaseSearchUIService/leaseSearch`, data);
  }

  getColumnListWithConditions(data) {
    
    return this
    .apiService
    .get(`http://localhost:4000`+`/columnData`);
    // return this.http.post(environment.leaseSearch_Api+`/LeaseSearchUIService/getColumns`, data);

    // return this
    //   .apiService
    //   .postMethod(environment.leaseSearch_Api+`/LeaseSearchUIService/getColumns`,data);
  }
  getSavedFilterList() {
    return this
      .apiService
      .get(environment.apiUrl+`/type/`);
  }
  saveFilter(data){
    return this
    .apiService
    .post(environment.apiUrl+`/type/`,data);
  }
  deleteSavedFilter() {
    return this
      .apiService
      .get(environment.apiUrl+`/type/`);
  }
  editSavedFilter() {
    return this
      .apiService
      .get(environment.apiUrl+`/type/`);
  }


}
