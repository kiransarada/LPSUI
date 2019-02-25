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
      .post(environment.leaseSearch_Api+`/leaseData`);
  }

  
  getDataForSearch(data) {
    // return this
    // .apiService
    // .get(environment.leaseSearch_Api+`/leaseData`);
     return this.http.post(environment.leaseSearch_Api+`/LeaseSearchUiService/leaseSearch`, data);
  }
  getDataForColumn(data) {
    // return this
    // .apiService
    // .get(environment.leaseSearch_Api+`/leaseData`);
     return this.http.post(environment.columnSearch_Api+`/LeaseSearchUiService/columnSearch`, data);
  }
 // return this.http.post(environment.leaseSearch_Api+`/LeaseSearchUiService/getColumns`, data); 

  getColumnListWithConditions(data) {
    
    // return this
    // .apiService
    // .get(environment.leaseSearch_Api+`/columnData`,{});
     return this.http.post(environment.leaseSearch_Api+`/LeaseSearchUiService/getColumns`, data);

    // return this
    //   .apiService
    //   .postMethod(environment.leaseSearch_Api+`/LeaseSearchUIService/getColumns`,data);
  }
  getSavedFilterList(data) {
    return this.http.post(environment.leaseSearch_Api+`/LeaseSearchUiService/filterData`,data);
  }
  filterOperations(data){
    return this.http.post(environment.leaseSearch_Api+`/LeaseSearchUiService/filterOperation`,data);
  }


}
