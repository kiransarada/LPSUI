import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ConnectionBackend, Headers, Http, RequestOptions, RequestOptionsArgs, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
	// baseUrl: string = "assets/JSON/criticalDates.json";

	constructor(private httpClient: HttpClient) {

	}
	getConfig(url) {
		return this.httpClient.get(url);
	}

	private getFullUrl(url: string): string {
		// return full URL to API here
		return environment.API_GW + url;
	}

	private requestInterceptor(): void {

	}
	/**
	 * Request options.
	 * @param options
	 * @returns {RequestOptionsArgs}
	 */
	private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
		if (options == null) {
			options = new RequestOptions();
		}
		options.headers = new Headers({ 'Content-Type': 'application/json' });
		return options;
	}


	get(url: string, options?: RequestOptionsArgs): Observable<any> {
		this.requestInterceptor();
		return this.httpClient.get(this.getFullUrl(url));

	}

}
