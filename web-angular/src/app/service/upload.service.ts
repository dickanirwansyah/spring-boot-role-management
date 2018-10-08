import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';

declare var xml2json;

@Injectable()
export class UploadService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    upload(file: any): Observable<any> {
        return this.httpClient.postUpload(Configuration.API_ENDPOINT + "upload", file).map((res: Response) => <Object[]>res.json());
    }

    uploadMultiple(files: any): Observable<any> {
        return this.httpClient.postMultiple(Configuration.API_ENDPOINT + "upload-multiple", files).map((res: Response) => <Object[]>res.json());
    }

    get(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "get").map((res: Response) => <Object[]>res.json());
    }

}