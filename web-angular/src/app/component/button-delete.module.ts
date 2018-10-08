import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDeleteComponent } from './button-delete';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ButtonDeleteComponent],
    exports: [ButtonDeleteComponent],
})
export class ButtonDeleteModule { }
