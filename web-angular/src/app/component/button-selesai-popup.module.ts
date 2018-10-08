import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSelesaiPopupComponent } from './button-selesai-popup';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ButtonSelesaiPopupComponent],
    exports: [ButtonSelesaiPopupComponent],
})
export class ButtonSelesaiPopupModule { }
