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
import { ParameterService } from '../../service/parameter.service';
import { Parameter } from '../../model/parameter';


declare var $: any;

@Component({
    selector: 'parameter',
    templateUrl: './parameter.component.html',
    styleUrls: ['./parameter.component.css'],
    providers: [UtilService, LOVService, Notification, ParameterService]
})

export class ParameterComponent implements OnInit {
    list: Object[] = [];
    evtProses: boolean = false;
    parameter: Parameter = new Parameter();

    constructor(private http: Http, private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification, private parameterService: ParameterService) {

    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.parameterService.get().subscribe((data: Object[]) => {
            this.evtProses = true;
            this.list = data;
        }, error => console.log("error:", error));
    }

    update(val: any){
        this.parameter = val;
    }

    save(evt: any) {
        if(evt){
            this.parameterService.save(this.parameter).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
                this.util.closeModal("myModal");
            }, error => console.log("error:", error));
        }
    }

    onClose() {
        this.parameter = new Parameter();
        this.evtProses = false;
        this.router.navigate(['/parameter']);
        this.get();
    }

}
