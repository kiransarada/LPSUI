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
      .get(environment.apiUrl+`/leaseData`);
  }

  getColumnListWithConditions(type) {
    return this
      .apiService
      .get(environment.apiUrl+`/type/` + type);
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
