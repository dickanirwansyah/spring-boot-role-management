import {Component, OnInit, NgZone, ElementRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TestService} from '../service/test.service';
import {UtilService} from '../service/util.service';
import {Request} from '../model/request';
import {JsonApiService} from "../core/api/json-api.service";

import {presets} from '../shared/graphs/chart-js/chart-js.presets'
//'../ /chart-js.presets'

declare var Chart: any;


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css'],
    providers: [TestService, UtilService]
})
export class ReportComponent implements OnInit {
    public chartjsData: any;
    
    user: string;
    daftar: any = [];
    countries: Object[];
    jobs: Object[];
    bloods: Object[];
    genders: Object[];
    religions: Object[];
    maritals: Object[];
    citizens: Object[];
    request: Request = new Request();

    report: Object[];
    data = [10, 2];
    tipe = "pie";
    
    
    piechart = {
        "labels": ["Jet", "Non Jet"],
        "datasets": [
            {
                "data": this.data,
                "backgroundColor": ["#FF6384", "#36A2EB"],
                "hoverBackgroundColor": ["#FF6384", "#36A2EB"]
            }]
    };

    bpm: any;
    formRequest: FormGroup;

    constructor(private testService: TestService, private util: UtilService,private jsonApiService: JsonApiService,
        private zone: NgZone, private el: ElementRef) {}
    ngOnInit() {
        
//        System.import('chart.js').then((chartJs: any) => {
//            //this.initChart();
//            this.piechart= {"labels":["Red","Blue","Yellow"],"datasets":[{"data":[300,50,100],"backgroundColor":["#FF6384","#36A2EB","#FFCE56"],"hoverBackgroundColor":["#FF6384","#36A2EB","#FFCE56"]}]}
//            this.render();
//        })
    }
    
    ngAfterContentInit() {
        System.import('chart.js').then((chartJs: any) => {
            //this.initChart();
            this.piechart= {"labels":["Red","Blue","Yellow"],"datasets":[{"data":[300,50,100],"backgroundColor":["#FF6384","#36A2EB","#FFCE56"],"hoverBackgroundColor":["#FF6384","#36A2EB","#FFCE56"]}]}
            this.render();
        })
    }

    initChart(): void {
        this.testService.getReport().subscribe(
            (data: Object[]) => {
                this.zone.run(() => {
                    this.report = data;
                    let jetScore=0;
                    let nonJetScore=0;
                    let jetCount=0;
                    let nonJetCount=0;
                    for (let i = 0; i < data.length;i++){
                        //console.log("report -- > ",data[i]);
                        //console.log(data[i]['proses']);
                        if(data[i]['proses']==1){
                            jetScore+=data[i]['score'];
                            jetCount++;
                        }else if(data[i]['proses']==2){
                            nonJetScore+=data[i]['score'];
                            nonJetCount++;
                        }
                    }
                    this.data = [jetCount, nonJetCount];

                    this.piechart = {
                        "labels": ["Jet", "Non Jet"],
                        "datasets": [
                            {
                                "data": this.data,
                                "backgroundColor": ["#FF6384", "#36A2EB"],
                                "hoverBackgroundColor": ["#FF6384", "#36A2EB"]
                            }]
                    };
                    this.render();
                });

            },
            error => console.log("error getMenuActive:", error),
            () => {
                console.log("Report :", this.report);

            });
    }


    render() {
        let ctx = this.getCtx();
        let data = this.data;

        let chart = new Chart(ctx, {type: this.tipe, data: this.piechart, options: presets[this.tipe] || {}});
        chart.update();

    }

    private getCtx() {
        return this.el.nativeElement.querySelector('canvas').getContext('2d');
        //return Chart("#graphScore");
    }

    reload() {
        
        this.initChart();
    }



    ngAfterViewInit() {

        //this.formRequest.controls['expireDate'].setValue(this.dateToString(new Date()));
    }



}
