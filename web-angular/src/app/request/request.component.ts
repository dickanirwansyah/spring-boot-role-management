import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {TestService} from '../service/test.service';
import {UtilService} from '../service/util.service';
import {Request} from '../model/request';
import {Router} from '@angular/router';
import {Select2Control} from '../shared/model/select2control';


@Component({
    selector: 'app-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.css'],
    providers: [TestService,UtilService]
})
export class RequestComponent implements OnInit {
    user: string;
    daftar: any = [];
    countries: Select2Control = new Select2Control();//Object[];
    jobs: Select2Control = new Select2Control();//Object[];
    bloods: Object[];
    genders: Object[];
    religions: Object[];
    maritals: Object[];
    citizens: Object[];
    
    placeHolder=
    {gender:"(Pilih Jenis Kelamin)",
    "blood":"(Pilih Golongan Darah)",
    "country":"(Pilih Negara)",
    "job":"(Pilih Pekerjaan)",
    "religion":"(Pilih Agama)",
    "status":"(Pilih Status)",
    "citizen":"(Pilih Kewarganegaraan)"};

    tes="Tesss";
    
    request: Request = new Request();

    bpm: any;
    formRequest: FormGroup;

    constructor(private testService: TestService, private util: UtilService, private router: Router) {}

    ngOnInit() {
        this.testService.getCountry().subscribe((data: Object[]) => {
            this.countries.datas = data;
            
        }, error => console.log("error getMenuActive:", error));
        
        this.testService.getJob().subscribe((data: Object[]) => this.jobs.datas = data, error => console.log("error getMenuActive:", error));
        this.jobs.placeholder="(Pilih Pekerjaan)";
        this.countries.placeholder="(Pilih Negara)";
        //    
        this.bloods = [{id: "A", desc: "A"},
        {id: "B", desc: "B"},
        {id: "AB", desc: "AB"},
        {id: "O", desc: "O"},
        {id: "AB-", desc: "AB-"}];
        this.genders = [{id: "LAKI-LAKI", desc: "Laki Laki"}, {id: "PEREMPUAN", desc: "Perempuan"}];
        this.religions = [
            {id: "ISLAM", desc: "Islam"},
            {id: "KRISTEN", desc: "Kristen"},
            {id: "KATOLIK", desc: "Katolik"},
            {id: "HINDU", desc: "Hindu"},
            {id: "BUDHA", desc: "Budha"},
            {id: "KONGHUCHU", desc: "Konghuchu"}];
        this.maritals = [{id: "BELUM MENIKAH", desc: "Belum Menikah"},
        {id: "MENIKAH", desc: "Menikah"},
        {id: "DUDA", desc: "Duda"}];
        this.citizens = [{id: "WNI", desc: "WNI"},
        {id: "WNA", desc: "WNA"}];

        this.formRequest = new FormGroup({
            ktp: new FormControl(''),
            nama: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
            ttl: new FormControl(),
            alamat: new FormControl(''),
            expireDate: new FormControl(),
            signature: new FormControl()
        });
        
        //this.request.jk = "LAKI-LAKI";
        //this.request.tgl=new Date();
    }
    
    ngAfterViewInit() {
        
        var dd=localStorage.getItem("APP 1");
        console.log("afteeerrr app",dd);
        //this.formRequest.controls['expireDate'].setValue(this.dateToString(new Date()));
    }

    onSubmit(sample) {
        console.log(sample);
        
        this.request.id = this.util.generateUUID();
        this.request.ktp = sample.ktp;
        this.request.ttl = sample.ttl;
        this.request.nama = sample.nama;
        this.request.alamat = sample.alamat;
        //this.request.tgl = sample.expireDate
        this.request.signature=sample.signature==1
        
        console.log(this.request);
        
        this.testService.insRequest(this.request).subscribe();
        this.testService.insRequestBpm(this.request).subscribe(
            (data: Object[]) => this.bpm = data,
            error => console.log("ERROR BPM:", error),
            () => console.log("BERHASIL BPM:", this.bpm));
            
            
            this.router.navigateByUrl('/task-list');


    }
    setTgl(newValue) {
        console.log(newValue);
        console.log(this.toDate(newValue));
        this.request.tgl = this.toDate(newValue);
    }
    onChangeGender(newValue) {
        this.request.jk = newValue;
    }
    onChangeBloods(newValue) {
        this.request.blood = newValue;
    }
    onChangeCountries(newValue) {
        this.request.country = newValue;
    }
    onChangeJob(newValue) {
        this.request.job = newValue;
    }
    onChangeReligions(newValue) {
        this.request.religion = newValue;
    }
    onChangeMaritals(newValue) {
        this.request.status = newValue;
    }
    onChangeCitizens(newValue) {
        this.request.citizen = newValue;
    }

    addProp1(e) {
        
        if (e.target.checked) {
            this.formRequest.controls['expireDate'].setValue("31/12/9999");
            this.request.tgl = this.toDate(this.formRequest.controls['expireDate'].value);
        } else {
            this.formRequest.controls['expireDate'].setValue(this.dateToString(new Date()));
            this.request.tgl=new Date();
        }
    }

    dateToString(d: Date): string {
        var datePipe = new DatePipe('');
        return datePipe.transform(d, 'dd/MM/yyyy');
    }
    
    dateLiteral(d: Date): string {
        var datePipe = new DatePipe('');
        return datePipe.transform(d, 'yyyy-MM-dd');
    }
    
    public toDate(dateStr):Date {
        var parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

}
