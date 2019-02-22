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

      getGeneralPopup(url){
        let input = {
          "Agreement": 103436,
          "Section": "Contact Information"
        }
        return this.httpClient.post(url,input);
      }
      


      getContactLookupModal(url){
        let input = {
          "Agreement": 1006,
          "Section": "Contact Information"
        }
        return this.httpClient.post(url,input);
      }

      getMlaDetailsModal(url){
        let input = {
         "MlaId": 11177,
  "Section": "MLA"
        }
        return this.httpClient.post(url,input);
      }

      getShowMoreGeneral(url){
        let input = {
          "Agreement": 1006,
          "Section": "showMoreGenaral"
        }
        return this.httpClient.post(url,input);
      }

      getSectionData(url, section){        
        let input = {
          "Agreement": 103436,
          "Section": "Contract Manager"
        }
         return this.httpClient.post(url,input);
      }

     
      
}
