import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { Parameter } from '../model/parameter';

declare var xml2json;

@Injectable()
export class ParameterService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    get(): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "param/get").map((res: Response) => <Object[]>res.json());
    }

    save(parameter: Parameter): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "param/save", parameter).map((res: Response) => <Object[]>res.json());
    }

}