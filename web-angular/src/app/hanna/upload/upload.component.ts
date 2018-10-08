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
import { UploadService } from '../../service/upload.service';
import { Upload } from '../../model/upload.model';
import { IndividualService } from '../../service/individual.service';
import { Individual } from '../../model/individual';
import { UserSlikService } from '../../service/user-slik.service';

declare var $: any;

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css'],
    providers: [UtilService, LOVService, Notification, UploadService, IndividualService, UserSlikService]
})

export class UploadComponent implements OnInit {
    list: Object[] = [];
    listUser: Object[] = [];
    fileTemp: any;
    fileTempMultiple: any;
    evtProses: boolean = false;
    individual: Individual = new Individual();
    data: Object = {};

    constructor(private http: Http, private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification, private uploadService: UploadService, private individualService: IndividualService, private userSlikService: UserSlikService) {
       
    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.userSlikService.get().subscribe((data: Object[]) => {
            this.listUser = data;
            this.individualService.getMultiIndividu().subscribe((data: Object[]) => {
                this.evtProses = true;
                this.list = this.sorting(data);
            }, error => console.log("error:", error));
        }, error => console.log("error:", error));
    }

    save(evt: any) {
        if (evt) {
            this.uploadService.uploadMultiple(this.fileTempMultiple).subscribe((data: Object[]) => {
                this.notif.msg(data)
                this.onClose();
                this.util.closeModal("myModal");
            }, error => console.log("error:", error));
        }
    }

    onClose() {
        this.individual = new Individual();
        this.fileTemp = null;
        this.evtProses = false;
        this.router.navigate(['/upload']);
        this.get();
    }

    fileEvent(fileInput: any) {
        let file = fileInput.target.files[0];
        this.fileTemp = file;
    }

    fileEventMultiple(fileInput: any) {
        let files = [].slice.call(fileInput.target.files);
        this.fileTempMultiple = files;
    }

    start(value: any) {
        this.individual = value;
        this.individualService.startJob(this.individual).subscribe((data: Object[]) => {
            this.notif.msg(data);
            this.onClose();
        }, error => console.log("error:", error));
    }

    cekStatus(value: any): String{
        return this.util.cekError(value);
    }

    cekUser(value: any): String{
        this.data = this.listUser.find((val: any) => val.id == value.idUser);
        return this.data['detail'];
    }

    sorting(value: any): any{
        return value.sort((value1: Individual, value2: Individual) => value1.individualId > value2.individualId);
    }
}
