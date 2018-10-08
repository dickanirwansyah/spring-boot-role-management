import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UtilService } from '../../service/util.service';
import { ValidationService } from '../../validation/validation.service';
import { UserCredential } from '../../model/user-credential.model';
import { LOVService } from '../../service/lov.service';
import { MonitoringBpm } from '../../model/bpm';
import { Router } from '@angular/router';
import { Configuration } from '../../service/app.constants';
import { Notification } from '../../service/notification';
import { Select2Control } from '../../shared/model/select2control';
import * as FileSaver from 'file-saver';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserSlikService } from '../../service/user-slik.service';
import { UserSlik } from '../../model/user-slik';


declare var $: any;

@Component({
    selector: 'user-slik',
    templateUrl: './user-slik.component.html',
    styleUrls: ['./user-slik.component.css'],
    providers: [UtilService, LOVService, Notification, UserSlikService]
})

export class UserSlikComponent implements OnInit {
    list: Object[] = [];
    evtProses: boolean = false;
    user: UserSlik = new UserSlik();
    auth1: String;
    auth2: String;
    event: boolean = false;

    constructor(private http: Http, private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification, private userSlikService: UserSlikService) {

    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.userSlikService.get().subscribe((data: Object[]) => {
            this.evtProses = true;
            this.list = data;
        }, error => console.log("error:", error));
    }

    update(val: any) {
        this.user = val;
        var arrKode = this.user.auth.split("-");
        this.auth1 = arrKode[0];
        this.auth2 = arrKode[1];
        this.event = true;
    }

    save(evt: any) {
        if(evt){
            this.user.id = this.event ? this.user.id : null;
            this.user.auth = this.auth1 + "-" + this.auth2;
            this.user.status = 0;
            this.userSlikService.save(this.user).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
                this.util.closeModal("myModal");
            }, error => console.log("error:", error));
        }
    }

    delete(evt: any, value: UserSlik) {
        if(evt){
            value.status = 1;
            this.userSlikService.save(value).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
            }, error => console.log("error:", error));
        }
    }

    onClose() {
        this.user = new UserSlik();
        this.auth1 = "";
        this.auth2 = "";
        this.evtProses = false;
        this.router.navigate(['/user-slik']);
        this.get();
    }

}
