import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TestService } from '../service/test.service';
import { UtilService } from '../service/util.service';
import { InputKeberatan, InputDokumen } from '../model/inputData';
import { Router } from '@angular/router';
import { Select2Control } from '../shared/model/select2control';
import { AuthService } from '../service/auth.service';

declare var $: any;

@Component({
    selector: 'role-login',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.css'],
    providers: [AuthService, TestService, UtilService]
})

export class RoleComponent implements OnInit, AfterViewInit {
    ngOnInit() {

    }

    ngAfterViewInit() {
        
    }
}