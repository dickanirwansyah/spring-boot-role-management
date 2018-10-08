import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { TextboxControl } from './textbox';

@Component({
    selector: 'text-box',
    templateUrl: './textbox.component.html'
})
export class TextboxComponent implements AfterViewInit {

    @Input() control: TextboxControl;
    @Output() evt = new EventEmitter();

    constructor() { }

    ngAfterViewInit() {
      
    }

    onChange(value: any){
        this.evt.emit(value);
    }

}