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
import { JobManagementService } from '../../service/job-management.service';
import { JobManagement } from '../../model/job-management';

declare var $: any;

@Component({
    selector: 'job-management',
    templateUrl: './job-management.component.html',
    styleUrls: ['./job-management.component.css'],
    providers: [UtilService, LOVService, Notification, JobManagementService]
})

export class JobManagementComponent implements OnInit {
    list: Object[] = [];
    listDetail: Object[] = [];
    fileTemp: any;
    fileTempMultiple: any;
    evtProses: boolean = false;
    statusUpload: boolean = false;
    job: JobManagement = new JobManagement();
    cred: UserCredential = JSON.parse(localStorage.getItem("credential")).value;

    constructor(private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification, private jobManagementService: JobManagementService) {

    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.jobManagementService.get().subscribe((data: Object[]) => {
            this.evtProses = true;
            this.list = data;
        }, error => console.log("error:", error));
    }

    view(value: any) {
        this.job = value;
        this.jobManagementService.getDetail(this.job.jobId).subscribe((data: Object[]) => {
            this.listDetail = data;
        }, error => console.log("error:", error));
    }

    download(value: any){
        this.jobManagementService.downloadFile(value.fileName).subscribe((data: Object[]) => {
            this.notif.success(data);
        }, error => console.log("error:", error));
    }

    downloadAll(){
        this.jobManagementService.downloadAll(this.job.jobId).subscribe((data: Object[]) => {
            this.notif.success(data);
        }, error => console.log("error:", error));
    }

    save() {
        if (this.statusUpload) {
            this.jobManagementService.uploadMultiple(this.fileTempMultiple).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
            }, error => console.log("error:", error));
        } else {
            this.job.createBy = this.cred.fullName;
            this.job.createDate = new Date();
            this.jobManagementService.savejob(this.job).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
            }, error => console.log("error:", error));
        }
    }

    update(value: any) {
        this.statusUpload = true;
        this.job = value;
    }

    onClose() {
        this.fileTemp = null;
        this.evtProses = false;
        this.statusUpload = false;
        this.job = new JobManagement();
        this.router.navigate(['/job-management']);
        this.get();
    }

    fileEvent(fileInput: any) {
        let file = fileInput.target.files[0];
        this.fileTemp = file;
    }

    fileEventMultiple(fileInput: any) {
        let files = [].slice.call(fileInput.target.files);
        files.forEach(element => {
            element.job_id = this.job.jobId
        });
        this.fileTempMultiple = files;
    }

    start(value: any) {
        this.jobManagementService.startJob(value.jobId).subscribe((data: Object[]) => {
            this.notif.success(data);
            this.onClose();
        }, error => console.log("error:", error));
    }
}
