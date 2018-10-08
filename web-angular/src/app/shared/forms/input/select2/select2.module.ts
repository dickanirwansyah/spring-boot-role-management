import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Select2Directive} from "./select2.directive";
import {Select2Component} from "./select2.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Select2Directive,Select2Component],
  exports: [Select2Directive,Select2Component],
})
export class Select2Module { }
