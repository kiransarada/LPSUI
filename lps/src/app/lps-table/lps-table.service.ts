import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaseTableService {
    constructor(private http: HttpClient) { }
    url = 'http://localhost:4001';
    getLeasePackageTableHeaders() {        
      return this
              .http
              .get(`${this.url}/LeasePackage`);              
          }

    getLeasePackageTableData(){
        return this
              .http
              .get(`${this.url}/LeasePackageData`);  
    }

    getMLATableHeaders() {        
        return this
                .http
                .get(`${this.url}/MLA`);              
            }
  
      getMLATableData(){
          return this
                .http
                .get(`${this.url}/MLAData`);  
      }

      getNotesNotifications() {        
        return this
                .http
                .get(`${this.url}/LeaseNotesNotifications`);              
            }
  
    getNotesNotificationsTableData(){
          return this
                .http
                .get(`${this.url}/LeaseNotesNotificationsTableData`);  
      }

      getContractAdmin() {        
        return this
                .http
                .get(`${this.url}/ContractAdministrator`);              
            }
  
            getContractAdminTableData(){
          return this
                .http
                .get(`${this.url}/ContractAdministratorTableData`);  
      }

    //   getOtherContactinfo() {        
    //     return this
    //             .http
    //             .get(`${this.url}/OtherContactInfo`);              
    //         }
  
    //         getOtherContactinfoData(){
    //       return this
    //             .http
    //             .get(`${this.url}/OtherContactInfoData`);  
    //   }
    
  }