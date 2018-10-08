import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';

declare var xml2json;

//import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
@Injectable()
export class TestService {
    constructor(private _http: Http, private httpClient: HttpClient) { }
    getHeroes(): string {
        console.log(Configuration.API_ENDPOINT);
        return 'Hello test';
    }

    getMenus(): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "menu/menu-active").map((res: Response) => <Object[]>res.json());
    }

    getCountry(): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "sample/list-country").map((res: Response) => <Object[]>res.json());
    }
    getJob(): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "sample/list-job").map((res: Response) => <Object[]>res.json());
    }
    getReport(): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "sample/list-report").map((res: Response) => <Object[]>res.json());
    }
    getRequest(user: string): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "sample/list-request?user=" + user).map((res: Response) => <Object[]>res.json());
    }

    insBook(request: any) {
        return this.httpClient.post(Configuration.API_ENDPOINT + "sample/ins-book", JSON.stringify(request))
    }

    insRequest(request: any): Observable<Object[]> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "sample/ins-request", request).map((res: Response) => <Object[]>res.json());
    }

    insRequestBpm(request: any): Observable<Object[]> {
        //        let data ={"customer":
        //                        {"customer":
        //                                {"address":request.alamat,
        //                                "country":request.country,
        //                                "employment":request.job,
        //                                "expiryDate":request.tgl,
        //                                "identityNumber":request.ktp,
        //                                "signature":false}
        //                         }
        //                  }
        //        let header = new Headers();
        //        let en=btoa("admin:password.1");
        //        //header.append("Authorization", "Basic " + en); 
        //        header.append("Content-Type", "application/x-www-form-urlencoded");
        //        //header.append('Content-type', 'application/json');
        //        console.log("EN:",en);
        //        console.log("header",header);
        //        console.log("data -->",data);
        //        
        //        
        //        let link="http://192.168.1.108:9080/rest/bpm/wle/v1/process?action=start&bpdId=25.75688511-f067-4ef6-8269-24d06dc41033&processAppId=2066.bd599406-dfeb-400c-a690-c51ad072c4a8&parts=all";
        //        return this._http.post(link, data,{headers : header}).map((res:Response) => <Object[]>res.json());
        return this.httpClient.post(Configuration.API_ENDPOINT + "sample/ins-request-bpm", request).map((res: Response) => <Object[]>res.json());

    }

    approveReq(taskId: number, user: string): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "sample/approve-task?taskId=" + taskId + "&user=" + user).map((res: Response) => <Object[]>res.json());
    }

    getData(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "sample/list-pegawai").map((res: Response) => <Object[]>res.json());
    }

    insPermohonan(request: any): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "sample/ins-permohonan", request).map((res: Response) => <Object[]>res.json());
    }

    sample(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "sample/list").map((res: Response) => <Object[]>res.json());
    }

}