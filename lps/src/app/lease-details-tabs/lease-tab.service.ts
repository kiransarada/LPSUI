import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaseBasicService {
    constructor(private http: HttpClient) { }
    url = 'http://localhost:4000';
    leaseurl = 'http://localhost:3000';
    charturl = "http://localhost:3000/summaryLease"
    getGeneral() {        
      return this
              .http
              .get(`${this.url}/General`);              
          }

    getCriticalDates(){
        return this
                .http
                .get(`${this.url}/CriticalDates`);
    }

    getManagementCompany(){
        return this
                .http
                .get(`${this.url}/ManagementCompany`);
    }
    
    getLinkToFileNetDocs(){
        return this
                .http
                .get(`${this.url}/LinkToFileNetDoc`);
    }

    getSiteInfo(){
        return this
                .http
                .get(`${this.url}/SiteInfo`);
    }

    getAssetLessee(){        
        return this
                .http
                .get(`${this.url}/AssetLessee`);
    }

    getAssetLessor(){        
        return this
                .http
                .get(`${this.url}/AssetLessor`);
    }

    getOtherContactInfo(){        
        return this
                .http
                .get(`${this.url}/OtherContactInfo`);
    }

    getGraphData(){
        return this
        .http
        .get(`${this.leaseurl}/leaseChartData`);
    }
    getGraphData1(){
        return this
        .http
        .get(`${this.leaseurl}/leaseChartData1`);
    }

    getNestedJSOn(){
        return this
        .http
        .get(`${this.url}/Nest`);
    }
    
    getSummaryLease(){        
        return this
                .http
                .get(`${this.leaseurl}/summaryLease`);
    }
    getLesseeLessorInfo(){        
        return this
                .http
                .get(`${this.leaseurl}/lesseeLessorInfo`);
    }
    getProvisionInformation(){        
        return this
                .http
                .get(`${this.leaseurl}/provisionInformation`);
    }
    getSummarySite(){        
        return this
                .http
                .get(`${this.leaseurl}/sitesummary`);
    }
    getlessorassignment(){        
        return this
                .http
                .get(`${this.leaseurl}/lessorassignment`);
    }
    getmaindocumentinfo(){        
        return this
                .http
                .get(`${this.leaseurl}/maindocumentinfo`);
    }
    getcriticaldates(){        
        return this
                .http
                .get(`${this.leaseurl}/criticaldates`);
    }

    getfilenet(){        
        return this
                .http
                .get(`${this.leaseurl}/linktofilenet`);
    }
    getlegalnoticeinfo(){
        return this
        .http
        .get(`${this.leaseurl}/legalnoticeinfo`);
    }
    getcontractterminfo(){
        return this
        .http
        .get(`${this.leaseurl}/contractterminfo`);
    }

    getleasedatasheet(){
        return this
        .http
        .get(`${this.leaseurl}/leaseDataSheet`);
    }

    getpdffile(){
        return this
        .http
        .get(`${this.leaseurl}`);
    }
  }