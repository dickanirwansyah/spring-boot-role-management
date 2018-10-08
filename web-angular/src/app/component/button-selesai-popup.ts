import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { NotificationService } from "../shared/utils/notification.service";

declare var $: any;

@Component({
    selector: 'button-selesai-popup',
    template: `
        <button [disabled]="disabled" class="btn btn-primary" (click)="showPopup()">
            <i class="fa fa-sign-out"></i> Selesai
        </button>
    `,
    styles: []
})
export class ButtonSelesaiPopupComponent {
    @Input() disabled: boolean;
    @Output() onClick = new EventEmitter();
    constructor(private router: Router,
        private notificationService: NotificationService) { }

    showPopup() {
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-check-square-o'></i> Submit <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "Apakah anda yakin untuk men-submit data ini?",
            buttons: '[No][Yes]'

        }, (ButtonPressed) => {
            if (ButtonPressed == "Yes") {
                this.onClick.emit(true);
            }
        });
    }
}
