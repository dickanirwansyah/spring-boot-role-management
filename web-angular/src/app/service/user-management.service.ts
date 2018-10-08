import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { UserManagement } from '../model/user-management';

declare var xml2json;

@Injectable()
export class UserManagementService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    get(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "user-management/get").map((res: Response) => <Object[]>res.json());
    }

    save(userManagement: UserManagement): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "user-management/save", userManagement).map((res: Response) => <Object[]>res.json());
    }

    delete(id: any): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "user-management/delete", id).map((res: Response) => <Object[]>res.json());
    }

}