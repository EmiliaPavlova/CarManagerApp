import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ICar } from './car';

@Injectable()
export class CarService {
    private _carUrl = '../../api/cars/cars.json';
    // private _carUrl = 'api/cars/cars.json';

    constructor(private _http: Http) {}

    getCars(): Observable<ICar[]> {
        return this._http.get(this._carUrl)
            .map((response: Response) => <ICar[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}