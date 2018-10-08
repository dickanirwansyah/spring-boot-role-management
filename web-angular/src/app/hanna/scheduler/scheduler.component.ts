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
import { SchedulerService } from '../../service/scheduler.service';
import { LOV } from '../../model/lov';
import { Scheduler } from '../../model/scheduler';

declare var $: any;

@Component({
    selector: 'scheduler',
    templateUrl: './scheduler.component.html',
    styleUrls: ['./scheduler.component.css'],
    providers: [UtilService, LOVService, Notification, SchedulerService]
})

export class SchedulerComponent implements OnInit {
    list: Object[] = [];
    evtProses: boolean = false;
    scheduler: Scheduler = new Scheduler();
    // min: any;
    // hour: any;
    // day: any;
    // week: any;
    // month: any;
    listMin: Object[] = [];
    listHour: Object[] = [];
    listDay: Object[] = [];
    listWeek: Object[] = [];
    listMonth: Object[] = [];

    constructor(private http: Http, private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification, private schedulerService: SchedulerService) {

    }

    ngOnInit() {
        this.get();
        this.setCombo(1);
        this.setCombo(2);
        this.setCombo(3);
        this.setCombo(4);
        this.setCombo(5);
    }

    setCombo(status) {
        let letAll = new LOV();
        letAll.KODE =  "*"
        letAll.DESKRIPSI =  "ALL"

        if (status == 1) {
            this.listMin.push(letAll);
            for (var index = 0; index < 60; index++) {
                let array = new LOV();
                array.KODE = index;
                array.DESKRIPSI = "" + index;
                this.listMin.push(array);
            }
        }
        if (status == 2) {
            this.listHour.push(letAll);
            for (var index = 0; index < 24; index++) {
                let array = new LOV();
                array.KODE = index;
                array.DESKRIPSI = "" + index;
                this.listHour.push(array);
            }
        }
        if (status == 3) {
            this.listDay.push(letAll);
            for (var index = 1; index <= 31; index++) {
                let array = new LOV();
                array.KODE = index;
                array.DESKRIPSI = "" + index;
                this.listDay.push(array);
            }
        }
        if (status == 4) {
            this.listWeek.push(letAll);
            for (var index = 1; index <= 7; index++) {
                let array = new LOV();
                let date = new Date();
                var weekday = new Array(7);
                weekday[1] = "Sunday";
                weekday[2] = "Monday";
                weekday[3] = "Tuesday";
                weekday[4] = "Wednesday";
                weekday[5] = "Thursday";
                weekday[6] = "Friday";
                weekday[7] = "Saturday";
                array.KODE = index;
                array.DESKRIPSI = "" + weekday[index];
                this.listWeek.push(array);
            }
        }
        if (status == 5) {
            this.listMonth.push(letAll);
            for (var index = 1; index <= 12; index++) {
                let array = new LOV();
                array.KODE = index;
                array.DESKRIPSI = "" + index;
                this.listMonth.push(array);
            }
        }
        this.reload();
    }

    reload(){
        let value = "*";
        this.scheduler.min = value;
        this.scheduler.hour = value;
        this.scheduler.day = value;
        this.scheduler.week = value;
        this.scheduler.month = value;
    }

    update(value: any){
        this.scheduler.schedName = value.id.schedName;
        this.scheduler.triggerGroup = value.id.triggerGroup;
        this.scheduler.triggerName = value.id.triggerName;
    }

    onChangeMin(evt: any) {
        this.scheduler.min = evt.target.value;
    }

    onChangeHour(evt: any) {
        this.scheduler.hour = evt.target.value;
    }

    onChangeDay(evt: any) {
        this.scheduler.day = evt.target.value;
    }

    onChangeWeek(evt: any) {
        this.scheduler.week = evt.target.value;
    }

    onChangeMonth(evt: any) {
        this.scheduler.month = evt.target.value;
    }

    save(evt: any){
        if(evt){
            this.schedulerService.save(this.scheduler).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
                this.util.closeModal("myModal");
            }, error => console.log("error:", error));
        }
    }

    get() {
        this.schedulerService.get().subscribe((data: Object[]) => {
            this.evtProses = true;
            this.list = data;
        }, error => console.log("error:", error));
    }

    onClose() {
        this.scheduler = new Scheduler();
        this.evtProses = false;
        this.router.navigate(['/scheduler']);
        this.get();
        this.reload();
    }

    start(value: any) {
        this.schedulerService.start(value.jobName).subscribe((data: Object[]) => {
            this.onClose();
        }, error => console.log("error:", error));
    }

    stop(value: any) {
        this.schedulerService.stop(value.jobName).subscribe((data: Object[]) => {
            this.onClose();
        }, error => console.log("error:", error));
    }
}
