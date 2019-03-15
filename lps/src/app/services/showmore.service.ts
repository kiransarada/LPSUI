import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ShowMoreService {

  constructor(private _http:HttpClient ) { }
    // private _showURL = 'assets/JSON/leaseBasicGeneralMore.json';
    
//     getMoreDetails(): Observable<any> {
//         return this._http.get(this._showURL)
// }
}