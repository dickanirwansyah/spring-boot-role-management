import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UtilService } from '../../service/util.service';
import { UserCredential } from '../../model/user-credential.model';
import { MonitoringBpm } from '../../model/bpm';
import { Router } from '@angular/router';
import { Configuration } from '../../service/app.constants';
import { Notification } from '../../service/notification';
import { Select2Control } from '../../shared/model/select2control';
import { UserManagementService } from '../../service/user-management.service';
import { UserManagement } from '../../model/user-management';

declare var $: any;

@Component({
    selector: 'user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.css'],
    providers: [UtilService, Notification, UserManagementService]
})

export class UserManagementComponent implements OnInit {
    list: Object[] = [];
    evtProses: boolean = false;
    userManagement: UserManagement = new UserManagement();

    constructor(private router: Router, private util: UtilService, private notif: Notification, private userManagementService: UserManagementService) {
        
    }

    ngOnInit() {
       this.get();
    }

    get() {
        this.userManagementService.get().subscribe((data: Object[]) => {
            this.evtProses = true;
            this.list = data;
        }, error => console.log("error:", error));
    }

    save(evt: any){
        if(evt){
            this.userManagementService.save(this.userManagement).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
                this.util.closeModal("myModal");
            }, error => console.log("error:", error));
        }
    }

    update(value: any){
        this.userManagement = value;
    }

    view(value: any){
        if(value.positionId == 1){
            value.positionName = "Admin"
        }
        if(value.positionId == 2){
            value.positionName = "Petugas Pelaporan"
        }
        // if(value.positionId == 3){
        //     value.positionName = "Business Analsyt"
        // }
        // if(value.positionId == 4){
        //     value.positionName = "Quality Control"
        // }
        this.userManagement = value;
    }

    delete(evt: any, value: UserManagement){
        if(evt){
            value.status = 1;
            this.userManagementService.save(value).subscribe((data: Object[]) => {
                this.notif.success(data);
                this.onClose();
            }, error => console.log("error:", error));
        }
    }

    onClose() {
        this.evtProses = false;
        this.userManagement = new UserManagement();
        this.router.navigate(['/user-management']);
        this.get();
    }

    onChange(evt: any) {
        this.userManagement.positionId = evt.target.value;
    }
}
