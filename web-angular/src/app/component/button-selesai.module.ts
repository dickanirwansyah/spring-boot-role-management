import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSelesaiComponent } from './button-selesai';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ButtonSelesaiComponent],
    exports: [ButtonSelesaiComponent],
})
export class ButtonSelesaiModule { }
