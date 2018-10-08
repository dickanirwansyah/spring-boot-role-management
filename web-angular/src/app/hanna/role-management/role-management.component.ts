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
import { AuthService } from '../../service/auth.service';
import { UserManagementService } from '../../service/user-management.service';
import { MenuRoleService } from '../../service/menu-role.service';
import { MenuRole } from '../../model/menu-role';

declare var $: any;

@Component({
    selector: 'role-management',
    templateUrl: './role-management.component.html',
    styleUrls: ['./role-management.component.css'],
    providers: [UtilService, LOVService, Notification, AuthService, UserManagementService, MenuRoleService]
})

export class RoleManagementComponent implements OnInit {
    list: Object[] = [];
    menu: Object[] = [];
    evtProses: boolean = false;
    statusView: boolean = false;
    id: any;

    constructor(private router: Router, private authService: AuthService, private notif: Notification, private userManagementService: UserManagementService, private menuRoleService: MenuRoleService) {

    }

    ngOnInit() {
        this.get();
    }

    get(){
        this.userManagementService.get().subscribe((data: Object[]) => {
            this.evtProses = true;
            this.list = data;
        }, error => console.log("error:", error));
    }

    toggleMenu(evt: any, value: any){
        value.visible = evt.target.checked;
        value.sub.forEach(element => {
            element.visible = false;
        });
    }

    toggleMenuSub(evt: any, value: any){
        value.visible = evt.target.checked;
    }

    view(value: any){
        this.statusView = true;
        this.id = value.loginId;
        this.authService.menu("Admin", 1).subscribe((data: any) => {
            data.forEach(element => {
               element.visible = false;
               element.sub.forEach(elementChild => {
                   elementChild.visible = false;
               });
            });
            this.menu = data;
            this.cekAccess(value);
        }, error => console.log("error:", error));
    }

    cekAccess(value: any){
        this.authService.menu(value.loginId, value.positionId).subscribe((data: any) => {
            this.menu.forEach((menu: any) => {
                data.forEach((element: any) => {
                    if(element.id === menu.id){
                        menu.visible = true;
                        menu.sub.forEach(menuSub => {
                            if(element.sub != null)
                            element.sub.forEach(elementSub => {
                                if(elementSub.id === menuSub.id){
                                    menuSub.visible = true;
                                }
                            });
                        });
                    }
                });
            });
        }, error => console.log("error:", error));
    }

    cekStatus(value: any): String{
        if(value.visible){
            return 'checked'
        }else{
            return ''
        }
    }

    save(evt: any){
        if (evt) {
            let arrayMenuRole = new Array<MenuRole>();
            this.menu.forEach((element: any) => {
                if(element.visible){
                    arrayMenuRole.push(this.createMenuRole(element));
                    element.sub.forEach(elementSub => {
                        if(elementSub.visible){
                            arrayMenuRole.push(this.createMenuRole(elementSub));
                        }
                    });
                }
            });

            if (arrayMenuRole.length > 0) {
                this.menuRoleService.save(arrayMenuRole).subscribe((data: Object[]) => {
                    this.notif.success(data);
                    this.onClose();
                }, error => console.log("error:", error));
            } else {
                this.notif.message("Management Menu Not Empty");
            }
        }
    }

    createMenuRole(value: any): MenuRole{
        let menuRole =  new MenuRole();
        menuRole.accessId = this.id;
        menuRole.menuId = value.id;
        menuRole.parentId = value.parentId;
        return menuRole;
    }

    onClose(){
        this.evtProses = false;
        this.statusView = false;
        this.id = null;
        this.router.navigate(['/role-management']);
        this.get();
    }
}
