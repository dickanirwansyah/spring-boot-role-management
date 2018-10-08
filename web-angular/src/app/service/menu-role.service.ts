import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { MenuRole } from '../model/menu-role';

declare var xml2json;

@Injectable()
export class MenuRoleService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    save(lsRole: any): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "role/save", lsRole).map((res: Response) => <Object[]>res.json());
    }

    menuRole(user: any, role: any): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "role/menu-role-active?user=" + user + "&role=" + role).map((res: Response) => <Object[]>res.json());
    }

}