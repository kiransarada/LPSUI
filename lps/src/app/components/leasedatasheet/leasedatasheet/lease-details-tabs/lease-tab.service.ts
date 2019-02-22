import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaseBasicService {
    constructor(private http: HttpClient) { }
    leaseurl = 'http://localhost:22561/LeaseDataSheetUIService/leasedatasheet';
   urlsample = 'http://localhost:3000/leaseDataSheet';

    getleasedatasheet(){
        let input = {"Agreement" :102613};
        console.log(this.http.post('http://localhost:22561/LeaseDataSheetUIService/leasedatasheet',input));
        
        return this.http.post('http://localhost:22561/LeaseDataSheetUIService/leasedatasheet',input);
    }

  }