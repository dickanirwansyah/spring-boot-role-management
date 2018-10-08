import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[saUiDatepicker]'
})
export class UiDatepickerDirective implements OnInit {

  @Input() saUiDatepicker: any;
  @Output() changeDate = new EventEmitter();
  valueDefault: any = null;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let onSelectCallbacks = [];
    let saUiDatepicker = this.saUiDatepicker || {};
    let element = $(this.el.nativeElement);

    if (saUiDatepicker.minRestrict) {
      onSelectCallbacks.push((selectedDate) => {
        $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
      });
    }
    if (saUiDatepicker.maxRestrict) {
      onSelectCallbacks.push((selectedDate) => {
        $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
      });
    }

    //Let others know about changes to the data field
    onSelectCallbacks.push((selectedDate) => {
      element.triggerHandler("change");

      let form = element.closest('form');

      if (typeof form.bootstrapValidator == 'function') {
        try {
          form.bootstrapValidator('revalidateField', element);
        } catch (e) {
          console.log(e.message)
        }
      }
    });

    let options = $.extend(saUiDatepicker, {
      changeMonth: true,
      changeYear: true,
      yearRange: '1900:2999',
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>',
      onSelect: (selectedDate) => {
        onSelectCallbacks.forEach((callback) => {
          callback.call(callback, selectedDate);

          this.changeDate.emit(this.toDate(selectedDate));
          jQuery(this.el.nativeElement).val(this.valueDefault).trigger("change");
        })
      }
    });

    element.datepicker(options);


  }

  public toDate(dateStr): Date {
    var parts = dateStr.split("/");
    return new Date(parts[2], parts[0] - 1, parts[1]);
    //  return new Date(2017, parts[1] - 1, parts[0]);
  }

}
