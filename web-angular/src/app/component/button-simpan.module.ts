import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSimpanComponent } from './button-simpan';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ButtonSimpanComponent],
    exports: [ButtonSimpanComponent],
})
export class ButtonSimpanModule { }
