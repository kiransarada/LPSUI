import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';

@Injectable({
	providedIn: 'root'
})
export class LeasetableService extends DataService {

	getCharacters() {
		return this
			.get(`leaseData`);
	}
}
