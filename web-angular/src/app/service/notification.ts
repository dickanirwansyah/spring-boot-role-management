import { Injectable } from '@angular/core';
import { NotificationService } from "../shared/utils/notification.service";

@Injectable()
export class Notification {
    constructor(private notificationService: NotificationService) { }

    success(value: any) {
        this.notificationService.smallBox({
            title: "Information",
            content: value.message,
            color: "#739E73",
            timeout: 3000,
            icon: "fa fa-check shake animated"
        });
    }

    error(value: any) {
        this.notificationService.smallBox({
            title: "Information",
            content: value.message,
            color: "#C46A69",
            timeout: 3000,
            icon: "fa fa-warning shake animated"
        });
    }

    date(value: any) {
        this.notificationService.smallBox({
            title: "Information",
            content: value,
            color: "#2f6ace",
            timeout: 3000,
            icon: "fa fa-warning shake animated"
        });
    }

    mandatory(value: any) {
        this.notificationService.smallBox({
            title: "Information",
            content: value,
            color: "#2f6ace",
            timeout: 3000,
            icon: "fa fa-warning shake animated"
        });
    }

    message(value: any) {
        this.notificationService.smallBox({
            title: "Information",
            content: value,
            color: "#2f6ace",
            timeout: 3000,
            icon: "fa fa-warning shake animated"
        });
    }

    msg(value: any) {
        this.notificationService.smallBox({
            title: "Information",
            content: value.message,
            color: "#2f6ace",
            timeout: 3000,
            icon: "fa fa-check shake animated"
        });
    }
}