import { Component, OnInit, Input } from '@angular/core';
import { TextboxControl } from "../component/textbox/textbox"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() control = new TextboxControl({ id: 'noSkp', type: 'text' });

  constructor() { }

  ngOnInit() {
  }

  onChange(value: any){
    console.log(value);
  }

}
