import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    // baseUrl: string = "assets/JSON/criticalDates.json";
  
    
    constructor(private httpClient: HttpClient) {

    }

    getAmmendmentHistoryModalData(url){   
      let input ={
        "Agreement": 1201346,
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
       // alert(section);
        // if(section == 'contractManager'){
        //   input = {
        //     "Agreement": 103436,
        //     "Section": "Contract Manager"
        //   }
        // } else 

        // if(section == 'revisionHistory' || section == 'amendmentHistory'|| section == 'faChangeAudit'|| section == 'mlaAssociationAudit'){
        //   // input = {
        //   //   "Agreement": agrId,
        //   //   "Section": "Contract Manager"
        //   // }
        // }
        // else if(section == 'mlaApplyTemplateAudit'){
           
        //   // input = {
        //   //   "Agreement": agrId,
        //   //   "Section": "Contract Manager"
        //   // }
        // }else if(section == 'unretireAudit'){
        //   input = {
        //     "Agreement": agrId,
        //     "Section": "Contract Manager"
        //   }
        // }else if(section == 'terminationAudit'){
        //   input = {
        //     "Agreement": agrId,
        //     "Section": "Contract Manager"
        //   }
        // }

        // console.log(input);
        let op = this.httpClient.post(url,input); 
        // console.log(url);    
        // console.log(op);
        
        return op;
      }

     
      
}
