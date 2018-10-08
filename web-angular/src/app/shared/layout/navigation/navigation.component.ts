import {Component, OnInit} from '@angular/core';
import {LoginInfoComponent} from "../../user/login-info/login-info.component";
import {TestService} from '../../../service/test.service';


@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html',
  providers:[TestService]
})
export class NavigationComponent implements OnInit {
public navs:Object[];
   constructor(private testService: TestService) { }

  ngOnInit() {
//      this.navs=
//    [{"id":"M0002","active":1,"name":"Home","parent":"M0001","tipe":2,"path":"/home","style":"fa fa-lg fa-fw fa-home","levelMenu":1,"sub":[]},
//     {"id":"M0003","active":1,"name":"Task List","parent":"M0001","tipe":2,"path":"/task-list","style":"fa fa-lg fa-fw fa-tasks","levelMenu":1,"sub":[]},
//     {"id":"M0004","active":1,"name":"Request","parent":"M0001","tipe":2,"path":"/request","style":"fa fa-lg fa-fw fa-magic","levelMenu":1,"sub":[]},
//     // {"id":"M0009","active":1,"name":"Knowledge","parent":"M0001","tipe":2,"path":"knowledgeView","style":"fa fa-globe","levelMenu":1,"sub":[]},
//     {"id":"M0005","active":1,"name":"Report","parent":"M0001","tipe":2,"path":"/report","style":"fa fa-lg fa-fw fa-bar-chart-o","levelMenu":1,"sub":[]},
//     {"id":"M0006","active":1,"name":"Forms","parent":"M0001","tipe":1,"path":"forms","style":"fa fa-edit","levelMenu":1,
//     "sub":
//     [{"id":"M0007","active":1,"name":"Basic Form","parent":"M0006","tipe":2,"path":"/forms/basicFormView","style":"fa fa-edit","levelMenu":2},
//     {"id":"M0008","active":1,"name":"Sample Form","parent":"M0006","tipe":2,"path":"/forms/sampleFormView","style":"fa fa-edit","levelMenu":2}]}];

//this.testService.getMenus().subscribe(
//(data:Object[])=>this.navs=data,
//error => console.log("error getMenuActive:",error),
//()=> console.log("SUCCESS:",this.navs));
//    
//  }
this.navs=JSON.parse(localStorage.getItem("_MENU"));

//console.log("indxxxx app",menu);
}
}
