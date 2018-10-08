import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSaveComponent } from './button-save';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ButtonSaveComponent],
    exports: [ButtonSaveComponent],
})
export class ButtonSaveModule { }
