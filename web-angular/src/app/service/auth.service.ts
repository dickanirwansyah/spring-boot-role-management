import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import { TestService } from './test.service';
import { tokenNotExpired } from 'angular2-jwt';
import { Configuration } from './app.constants';
import { Observable } from 'rxjs/Observable';
import { UserCredential } from '../model/user-credential.model';
import { HttpClient } from './http.client';
import { NotificationService } from "../shared/utils/notification.service";
import { AuthServiceGoggle, AppGlobals } from 'angular2-google-login';

@Injectable()
export class AuthService {
    public navs: Object[];
    constructor(
        private http: Http,
        private router: Router,
        private httpClient: HttpClient,
        private notificationService: NotificationService
        //private authHttp:AuthHttp
    ) { }


    login(cred: UserCredential) {
        var loginData: any;
        var userCred: UserCredential;
        this.postLogin(cred).subscribe((data) => loginData = data, error => console.log("error login:", error), () => {
            // console.log("SUCCESS LLOGIN:", loginData);
            if (loginData.status) {
                userCred = loginData.data;
                var nav = [];
                localStorage.setItem('TOKEN', userCred.token);
                this.menu(loginData.userId, loginData.roleId).subscribe(
                    (data: Object[]) => nav = data,
                    error => console.log("error menu:", error),
                    () => {
                        localStorage.setItem('_MENU', JSON.stringify(nav));
                        this.createCredential(userCred);
                        this.router.navigate(['/home']);
                    });
            } else {
                // alert(loginData.message);
                this.errorLogin(loginData);
            }
        });
    }

    postLogin(credentials: any): Observable<Object> {
        return this.httpClient.postLogin(Configuration.API_ENDPOINT + "auth/login", credentials).map((res: Response) => <UserCredential>res.json());
    }

    menu(user: any, role: any): Observable<Object[]> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "menu/menu-active?user=" + user + "&role=" + role).map((res: Response) => <Object[]>res.json());
    }

    loggedIn() {
        var rec = JSON.parse(localStorage.getItem("credential"));
        if (!rec) { return false }
        if (!rec.value) { return false }
        var cred = this.loadCredential();
        if (!cred.loginStatus) { return false }
        if (new Date().getTime() > rec.timestamp) {
            this.logout();
            return false;
        }

        this.createCredential(cred);

        return true;
    }

    logout() {
        localStorage.clear();
    }

    private createCredential(userCred: UserCredential) {
        var expirationMS = 10 * 60 * 1000;
        var record = { value: userCred, timestamp: new Date().getTime() + expirationMS }
        localStorage.setItem("credential", JSON.stringify(record));
    }

    loadCredential(): UserCredential {
        var rec = JSON.parse(localStorage.getItem("credential"));
        return rec.value;
    }

    errorLogin(value: any) {
        this.notificationService.smallBox({
            title: "Pemberitahuan",
            content: value.message,
            color: "#C46A69",
            timeout: 3000,
            icon: "fa fa-warning shake animated"
        });
    }

}