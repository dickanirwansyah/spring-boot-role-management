import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-latihan',
  templateUrl: './latihan.component.html',
  styleUrls: ['./latihan.component.css'],
  providers: []
})
export class LatihanComponent implements OnInit {
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
    
    
  constructor() { }

  ngOnInit() {
      

  }
  

}
