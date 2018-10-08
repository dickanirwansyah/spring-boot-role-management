import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSubmitPopupComponent } from './button-submit-popup';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ButtonSubmitPopupComponent],
    exports: [ButtonSubmitPopupComponent],
})
export class ButtonSubmitPopupModule { }
