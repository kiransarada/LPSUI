import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    // baseUrl: string = "assets/JSON/criticalDates.json";
  
    
    constructor(private httpClient: HttpClient) {

    }

    getAmmendmentHistoryModalData(url, agreeID){   
      let input ={
        "Agreement": agreeID,
        "Section": "General"
      }  
      return this.httpClient.post(url, input);
    }


    getConfig(url) {
        return this.httpClient.get(url);
      }
      

      getGeneralPopup(url,agrId){
        let input = {
          "Agreement": agrId,
          "Section": "Contact Information"
        }
        return this.httpClient.post(url,input);
      }
      

      getSectionPost(url,section,agrId){       
        console.log("service",url,section,agrId);        
        let input = {  
        "Agreement":agrId,
        "Section":"lease"   
        }
        return this.httpClient.post(url,input);
      }

      getContactLookupModal(url, agreementID){
        let input = {
          "Agreement": agreementID,
          "Section": "Contact Information"
        }
        return this.httpClient.post(url,input);
      }

      getMlaDetailsModal(url,mlaId){
        let input = {
         "MlaId": mlaId,
        "Section": "MLA"
        }
        return this.httpClient.post(url,input);
      }
      

      getShowMoreGeneral(url, agreementID){
        let input = {
          "Agreement": agreementID,
          "Section": "showMoreGenaral"
        }
        return this.httpClient.post(url,input);
      }

      getSectionData(url, section, agrId){  
            
        let input = {
          "Agreement": agrId,
          "Section": "Contract Manager"
        }
      
        let op = this.httpClient.post(url,input); 
        
        return op;
      }

     
      
}
