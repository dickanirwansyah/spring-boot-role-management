import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { NotificationService } from "../shared/utils/notification.service";

declare var $: any;

@Component({
    selector: 'message',
    template: `
    <button [disabled]="disabled" type="submit" class="btn btn-primary" (click)="showPopup()" data-dismiss="modal">
        <i class="fa fa-save"></i> Simpan
    </button>
  `,
    styles: []
})
export class MessageComponent {
    @Input() disabled: boolean;
    @Output() onClick = new EventEmitter();
    constructor(private router: Router,
        private notificationService: NotificationService) { }

    showPopup() {
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-save txt-color-orangeDark'></i> Simpan <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "Apakah anda yakin untuk menyimpan data ini??",
            buttons: '[No][Yes]'

        }, (ButtonPressed) => {
            if (ButtonPressed == "Yes") {
                this.onClick.emit(true);
            }
        });
    }
}
