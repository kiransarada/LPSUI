import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../../src/environments/environment';

@Injectable()
export class LeaseBasicService {
    constructor(private http: HttpClient) { }
    leaseurl = 'http://localhost:22561/LeaseDataSheetUIService/leasedatasheet';
   urlsample = 'http://localhost:3000/leaseDataSheet';

    getleasedatasheet(){
        let input = {"Agreement" :102613};
        // console.log(this.http.post('http://localhost:22561/LeaseDataSheetUIService/leasedatasheet',input));
        console.log(environment.leaseDatasheet+'/LeaseDataSheetUIService/leasedatasheet');
        return this.http.post(environment.leaseDatasheet+'/LeaseDataSheetUIService/leasedatasheet',input);
    }

  }