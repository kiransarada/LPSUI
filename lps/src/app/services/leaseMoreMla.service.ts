import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LeaseMoreMlaService {

  constructor(private _http:HttpClient ) { }
    private _mlaURL = 'assets/JSON/basicMoreMla.json';
    private _mlaTableURL = 'assets/JSON/basicMoreMlaTable.json';
    
    getMlaDetails(): Observable<any> {
        return this._http.get(this._mlaURL)
}
getMlaTableDetails(): Observable<any> {
  return this._http.get(this._mlaTableURL)
}
}