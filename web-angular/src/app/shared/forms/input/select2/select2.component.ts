import {Component, Input, Output, EventEmitter, OnInit, SimpleChange} from '@angular/core'
import {FormGroup} from '@angular/forms';
import {Select2Control} from "../../../model/select2control";
import {UtilService} from "../../../../service/util.service";

declare var jQuery: any;

@Component({
    selector: 'select2',
    template:
    `
    <select style="width: 100%" class="select2_xx form-control" id="{{prop.id}}" (change)="toNumber($event)">
        <option></option>
        <option *ngFor="let opt of prop.datas; let i = index;" value="{{opt.KODE}}">{{opt.DESKRIPSI}}</option>
    </select>
    `,
    providers: [UtilService]
})
export class Select2Component implements OnInit {
    @Input() disabled: boolean;
    @Input() value: String;
    @Input() prop: Select2Control = new Select2Control();
    @Output() onChange = new EventEmitter();
    val_data: Object;

    constructor(private util: UtilService) {

    }

    ngOnInit() {
        jQuery.fn.modal.Constructor.prototype.enforceFocus = function() {};
        if (this.prop.id == 'select2') {
            this.prop.id = this.util.generateUUID();
        }
    }

    toNumber(e) {
        console.log("valll :", this.val_data);
    }

    ngAfterViewInit() {
        var setthis: any = this;
        System.import('script-loader!select2/dist/js/select2.min.js').then(() => {
            jQuery("#" + this.prop.id + "").select2({
                placeholder: setthis.prop.placeholder,
                allowClear: setthis.prop.allowClear,
                data: this.prop.datas,
                disabled: setthis.disabled
            })
            .on("change", function (e) {
                var val = jQuery("#" + setthis.prop.id).val();
                setthis.onChange.emit(val);
            });

            jQuery("#" + this.prop.id).val(this.prop.selected).trigger("change");
        });
    }

}

