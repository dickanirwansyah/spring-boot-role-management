import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
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
import { presets } from '../../shared/graphs/chart-js/chart-js.presets';
import { IndividualService } from '../../service/individual.service';
import { JobManagementService } from '../../service/job-management.service';

declare var $: any;
declare var Chart: any;

@Component({
    selector: 'job-dashboard',
    templateUrl: './job-dashboard.component.html',
    styleUrls: ['./job-dashboard.component.css'],
    providers: [UtilService, LOVService, Notification, IndividualService, JobManagementService]
})

export class JobDashboardComponent implements OnInit {
    barChartJob: any;
    barChartInteractive: any;
    tipe = "bar";
    chart: any
    chartJob: any
    @ViewChild("barIndividu") barIndividu;
    @ViewChild("flot") flot;
    context: CanvasRenderingContext2D;

    constructor(private el: ElementRef, private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification, private individualService: IndividualService, private jobManagementService: JobManagementService) {

    }

    ngOnInit() {
        System.import('chart.js').then((chartJs: any) => {
            this.getBatch(0);
            this.getDashboard(0);
        })
    }

    job() {
        this.jobManagementService.cekJob().subscribe((data: any) => {
            this.setBatch(data);
        }, error => console.log("error:", error));
    }

    interactive() {
        this.individualService.cekJob().subscribe((data: any) => {
            this.setData(data);
        }, error => console.log("error:", error));
    }

    setBatch(data: any){
        this.barChartJob = {
            "labels": data['labelDate'],
            "datasets": [{ "label": 'On Progress', "data": data['onProgress'], backgroundColor: "#6D7A6F" },
                        { "label": 'Failed', "data": data['failed'], backgroundColor: "#E42020" },
                        { "label": 'Success', "data": data['success'], backgroundColor: "#36E42A" },
            ],
        }
        this.render(1);
    }

    setData(data: any) {
        this.barChartInteractive = {
            "labels": data['labelDate'],
            "datasets": [{ "label": 'On Progress', "data": data['onProgress'], backgroundColor: "#6D7A6F" },
                        { "label": 'Failed', "data": data['failed'], backgroundColor: "#E42020" },
                        { "label": 'Success', "data": data['success'], backgroundColor: "#36E42A" },
            ],
        }
        this.render(2);
    }

    render(status: any) {
        if (status == 1) {
            if(this.chart!=null){
                this.chart.destroy();
            }
            this.context = this.flot.nativeElement.getContext("2d");
            this.chart = new Chart(this.context, { type: this.tipe, data: this.barChartJob, options: presets[this.tipe] || {} });
        } else {
            if(this.chartJob!=null){
                this.chartJob.destroy();
            }
            this.context = this.barIndividu.nativeElement.getContext("2d");
            this.chartJob = new Chart(this.context, { type: this.tipe, data: this.barChartInteractive, options: presets[this.tipe] || {} });
        }
    }

    search(value: any) {
        let status = value.target.value;
        this.getDashboard(status);
    }

    searchBatch(value: any) {
        let status = value.target.value;
        this.getBatch(status);
    }

    getDashboard(status: any){
        this.individualService.search(status).subscribe((data: any) => {
            this.setData(data);
        }, error => console.log("error:", error));
    }

    getBatch(status: any){
        this.jobManagementService.search(status).subscribe((data: any) => {
            this.setBatch(data);
        }, error => console.log("error:", error));
    }
}
