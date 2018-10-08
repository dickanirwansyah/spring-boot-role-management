import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { NotificationService } from "../shared/utils/notification.service";

declare var $: any;

@Component({
    selector: 'button-delete',
    template: `
    <a class="btn btn-warning btn-sm" data-toggle="modal" (click)="showPopup()"><i class="fa fa-trash"></i> Delete</a>
  `,
    styles: []
})
export class ButtonDeleteComponent {
    @Input() disabled: boolean;
    @Output() onClick = new EventEmitter();
    constructor(private router: Router,
        private notificationService: NotificationService) { }

    showPopup() {
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-trash'></i> Delete <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "Apakah anda yakin untuk menghapus data ini?",
            buttons: '[No][Yes]'

        }, (ButtonPressed) => {
            if (ButtonPressed == "Yes") {
                this.onClick.emit(true);
            }
        });
    }
}
