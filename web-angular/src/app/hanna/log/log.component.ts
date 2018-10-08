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

declare var $: any;

@Component({
    selector: 'log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.css'],
    providers: [UtilService, LOVService, Notification]
})

export class LogComponent implements OnInit {

    constructor(private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification) {
        
    }

    ngOnInit() {
       
    }
}
