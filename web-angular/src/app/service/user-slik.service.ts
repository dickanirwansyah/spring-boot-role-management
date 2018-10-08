import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { UserSlik } from '../model/user-slik';

declare var xml2json;

@Injectable()
export class UserSlikService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    get(): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "user-slik/get").map((res: Response) => <Object[]>res.json());
    }

    save(userSlik: UserSlik): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "user-slik/save", userSlik).map((res: Response) => <Object[]>res.json());
    }

    delete(userSlik: UserSlik): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "user-slik/delete", userSlik).map((res: Response) => <Object[]>res.json());
    }

}