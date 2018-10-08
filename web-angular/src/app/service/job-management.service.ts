import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { JobManagement } from '../model/job-management';

declare var xml2json;

@Injectable()
export class JobManagementService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    upload(file: any): Observable<any> {
        return this.httpClient.postUpload(Configuration.API_ENDPOINT + "job-management/upload", file).map((res: Response) => <Object[]>res.json());
    }

    uploadMultiple(files: any): Observable<any> {
        return this.httpClient.postUploadMultiple(Configuration.API_ENDPOINT + "job-management/upload-multiple", files).map((res: Response) => <Object[]>res.json());
    }

    get(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "job-management/get").map((res: Response) => <Object[]>res.json());
    }

    getDetail(jobId: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "job-management/get-detail?jobId="+jobId).map((res: Response) => <Object[]>res.json());
    }

    startJob(jobId: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "ideb-batch/batch?jobId="+jobId).map((res: Response) => <Object[]>res.json());
    }

    savejob(job: JobManagement): Observable<any> {
        return this.httpClient.post(Configuration.API_ENDPOINT + "job-management/save-job", job).map((res: Response) => <Object[]>res.json());
    }

    downloadFile(name: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "convert/convertByIdeb?idebFile="+name).map((res: Response) => <Object[]>res.json());
    }

    downloadAll(jobId: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "convert/convertByJob?jobId="+jobId).map((res: Response) => <Object[]>res.json());
    }

    cekJob(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "job-management/get-job-dashboard").map((res: Response) => <Object[]>res.json());
    }

    search(status: any): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "job-management/search-dashboard?status="+ status).map((res: Response) => <Object[]>res.json());
    }

}