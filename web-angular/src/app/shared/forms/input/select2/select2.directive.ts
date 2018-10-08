import { Directive, ElementRef, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { addClassName, removeClassName } from "../../../utils/dom-helpers";

declare var $: any;

@Directive({
  selector: '[select2]'
})
export class Select2Directive implements OnInit {
  @Input() selectedval: any;
  @Input() placeholder: string;
  @Input() disabled: any;
  @Output() change = new EventEmitter();

  constructor(private el: ElementRef) {
    addClassName(this.el.nativeElement, ['sa-cloak', 'sa-hidden'])
  }

  ngOnInit() {
    System.import('script-loader!select2/dist/js/select2.min.js').then(() => {
      $(this.el.nativeElement).select2({
        placeholder: this.placeholder,
        allowClear: true,
        disabled: this.disabled
      })
      $(this.el.nativeElement).on(
        'change',
        (e) => {
          this.change.emit(jQuery(e.target).val());
        }
      );
      jQuery(this.el.nativeElement).val(this.selectedval).trigger("change");
      removeClassName(this.el.nativeElement, ['sa-hidden'])
    })
  }

}
