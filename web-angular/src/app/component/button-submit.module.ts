import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSubmitComponent } from './button-submit';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ButtonSubmitComponent],
    exports: [ButtonSubmitComponent],
})
export class ButtonSubmitModule { }
