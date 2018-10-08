import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { Individual } from '../model/individual';

declare var xml2json;

@Injectable()
export class IndividualService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    get(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "individual/get-individual").map((res: Response) => <Object[]>res.json());
    }

    getMultiIndividu(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "individual/get-multi-individu").map((res: Response) => <Object[]>res.json());
    }

    getMultiCorporate(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "individual/get-multi-corporate").map((res: Response) => <Object[]>res.json());
    }

    getCorporate(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "individual/get-corporate").map((res: Response) => <Object[]>res.json());
    }

    save(individual: Individual): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "individual/save", individual).map((res: Response) => <Object[]>res.json());
    }

    delete(id: any): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "individual/delete", id).map((res: Response) => <Object[]>res.json());
    }

    startJob(individual: Individual): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "ideb-interaktif/individual", individual).map((res: Response) => <Object[]>res.json());
    }

    download(refCode: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "convert/convertByIdeb?idebFile="+ refCode).map((res: Response) => <Object[]>res.json());
    }

    cekJob(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "individual/get-interactive-dashboard").map((res: Response) => <Object[]>res.json());
    }

    search(status: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "individual/search-dashboard?status="+ status).map((res: Response) => <Object[]>res.json());
    }

}