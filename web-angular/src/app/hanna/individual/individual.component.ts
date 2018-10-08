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
import { IndividualService } from '../../service/individual.service';
import { Individual } from '../../model/individual';

declare var $: any;

@Component({
    selector: 'individual',
    templateUrl: './individual.component.html',
    styleUrls: ['./individual.component.css'],
    providers: [UtilService, LOVService, Notification, IndividualService]
})

export class IndividualComponent implements OnInit {
    individual: Individual = new Individual();
    list: Object[] = [];
    listPurpose: Object[] = [];
    evtProses: boolean = false;
    status: boolean = false;
    cssIdentity: String = "initial";
    cssCombination: String = "none";
    cred: UserCredential = JSON.parse(localStorage.getItem("credential")).value;
    data: Object = {}

    constructor(private lov: LOVService, private router: Router, private util: UtilService, private notif: Notification, private individualService: IndividualService) {

    }

    ngOnInit() {
        this.get();
        this.getPurpose();
    }

    get() {
        this.individualService.get().subscribe((data: Object[]) => {
            this.evtProses = true;
            this.list = data;
        }, error => console.log("error:", error));
    }

    getPurpose() {
        this.lov.purpose().subscribe((data: Object[]) => {
            this.listPurpose = data;
        }, error => console.log("error:", error));
    }

    start(value: any) {
        this.individual = value;
        this.individualService.startJob(this.individual).subscribe((data: Object[]) => {
            this.notif.msg(data);
            this.onClose();
        }, error => console.log("error:", error));
    }

    update(value: any) {
        if (value.searchType == 0) {
            this.identityNumber();
        } else {
            this.combination();
        }
        this.individual = value;
        this.status = true;
    }

    view(value: any) {
        this.data = this.listPurpose.find((val: any) => val.KODE == value.reqPurposeId);
        value.reqPurposeName = this.data['DESKRIPSI']
        this.individual = value;
    }

    create(){
        this.individual = new Individual();
        this.individual.searchType = 0;
        this.identityNumber();
    }

    save(evt: any) {
        if(evt){
            if (this.validation()) {
                this.individual.typeInteractive = "I";
                this.individual.sourceData = 1;
                if (this.status) {
                    this.individual.modifyBy = this.cred.fullName;
                    this.individual.modifyDate = new Date();
                } else {
                    this.individual.createBy = this.cred.fullName;
                    this.individual.createDate = new Date();
                }
                this.individualService.save(this.individual).subscribe((data: Object[]) => {
                    this.notif.success(data);
                    this.onClose();
                    this.util.closeModal("myModal");
                }, error => console.log("error:", error));
            } else {
                this.notif.mandatory("Mandatory Harus Diisi");
            }
        }
    }

    delete(value: any){
        this.individualService.delete(value.individualId).subscribe((data: Object[]) => {
            this.notif.success(data);
            this.onClose();
        }, error => console.log("error:", error));
    }

    onClose() {
        this.individual = new Individual();
        this.evtProses = false;
        this.router.navigate(['/individual']);
        this.get();
        this.identityNumber();
    }

    identityNumber() {
        this.cssIdentity = "initial";
        this.cssCombination = "none";
    }

    combination() {
        this.individual.combinationType = 0;
        this.individual.sexId = 0;
        this.cssIdentity = "none";
        this.cssCombination = "initial";
    }

    onChange(evt: any) {
        this.individual.reqPurposeId = evt.target.value;
    }

    setTanggalLahir(newValue: any) {
        this.individual.dateOfBirth = newValue;
    }

    jenisKelamin(evt: any) {
        this.individual.sexId = evt.target.value;
    }

    combinationType(evt: any) {
        this.individual.combinationType = evt.target.value;
    }

    download(){
        this.individualService.download(this.individual.refUserCode).subscribe((data: Object[]) => {
            this.notif.success(data);
            this.onClose();
        }, error => console.log("error:", error));
    }

    validation(): boolean{
        let valid = false;
        if (this.individual.searchType == 0) {
            if(this.individual.refUserCode != null && this.individual.reqPurposeId != null && this.individual.identityNumber != null){
                valid = true;
            }
        } else {
            if(this.individual.refUserCode != null && this.individual.reqPurposeId != null && this.individual.debiturName != null && this.individual.dateOfBirth != null && this.individual.sexId != null ){
                valid = true;
            }
        }
        return valid;
    }
}
