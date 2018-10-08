import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { Individual } from '../model/individual';
import { Scheduler } from '../model/scheduler';

declare var xml2json;

@Injectable()
export class SchedulerService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    get(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "start-job/get").map((res: Response) => <Object[]>res.json());
    }

    save(scheduler: Scheduler): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "start-job/save", scheduler).map((res: Response) => <Object[]>res.json());
    }

    start(jobName: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "robot/start?jobName="+jobName).map((res: Response) => <Object[]>res.json());
    }

    stop(jobName: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "robot/stop?jobName="+jobName).map((res: Response) => <Object[]>res.json());
    }

}