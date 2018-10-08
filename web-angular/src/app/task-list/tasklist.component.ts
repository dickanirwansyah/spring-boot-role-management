import { Component, OnInit } from '@angular/core';
import {TestService} from '../service/test.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  providers: [TestService]
})
export class TaskListComponent implements OnInit {
    user:string;
    daftar:any=[];
    country:any=[];
    
  test= [
    {
      "id": "1",
      "name": "Jennifer",
      "phone": "1-342-463-8341",
      "company": "Et Rutrum Non Associates",
      "zip": "35728",
      "city": "Fogo",
      "tgl": "03/04/14"
    },
    {
      "id": "2",
      "name": "Clark",
      "phone": "1-516-859-1120",
      "company": "Nam Ac Inc.",
      "zip": "7162",
      "city": "Machelen",
      "tgl": "03/23/13"
    }];
    
    
  constructor(private testService: TestService) { }

  ngOnInit() {
      this.testService.getCountry().subscribe((data: Object[]) => this.country = data, error => console.log("error SEARCH:", error));

  }
  
  pilihUser(data) {

        if (data != null) {
            this.user = data;
            this.testService.getRequest(this.user).subscribe((data: Object[]) => this.daftar = data, error => console.log("error SEARCH:", error));

        }
        
        

    }

    ngApprove(val) {
        console.log("DATA -->", val);
        let status:string;
        this.testService.approveReq(val.taskId, this.user).subscribe(
            (data: any) => status = data,
            error => console.log("error APPROVE:", error),
            () => {
                 this.daftar.splice(this.daftar.indexOf(val), 1);
                console.log("STATUS -- > ",status);
            }
        );


    }

}
