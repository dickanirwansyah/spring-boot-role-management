import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    var token = localStorage.getItem('TOKEN');
    //    headers.append('Authorization', 'Basic ' +btoa(token)); 
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
  }

  createAuthorizationHeaderLogin(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('user:password'));
  }

  get(url) {
    let headers = new Headers({ 'Content-type': 'application/json' })
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.get(url, options);
  }

  post(url, data) {
    let headers = new Headers({ 'Content-type': 'application/json' })
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  postLogin(url, data) {
    let headers = new Headers({ 'Content-type': 'application/json' })
    this.createAuthorizationHeaderLogin(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  postUpload(url, file) {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.createAuthorizationHeader(headers);
    return this.http.post(url, formData, options);
  }

  postUploadMultiple(url, files) {
    let formData: FormData = new FormData();
    for(let i =0; i < files.length; i++){
        formData.append("file"+i, files[i], files[i]['name']);
        formData.append('id', files[i], files[i]['job_id']);
    }
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.createAuthorizationHeader(headers);
    return this.http.post(url, formData, options);
  }

  postMultiple(url, files) {
    let formData: FormData = new FormData();
    for(let i =0; i < files.length; i++){
        formData.append("file"+i, files[i], files[i]['name']);
    }
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.createAuthorizationHeader(headers);
    return this.http.post(url, formData, options);
  }
}
