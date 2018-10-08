import { Directive, ElementRef, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { addClassName, removeClassName } from "../../../utils/dom-helpers";

declare var $: any;

@Directive({
    selector: '[datatableNew]'
})
export class DataTableDirective implements OnInit {
    @Input() public options: any;
    @Input() public filter: any;
    @Input() public detailsFormat: any;

    @Input() public paginationLength: boolean;
    @Input() public columnsHide: boolean;
    @Input() public tableClass: string;
    @Input() public width: string = '100%';

    @Input() public statusToolbar: boolean;

    constructor(private el: ElementRef) {
        addClassName(this.el.nativeElement)
    }

    ngOnInit() {
        Promise.all([
            System.import('script-loader!smartadmin-plugins/datatables-bundle/datatables.min.js'),
        ]).then(() => {
            this.render()
        })
    }

    render() {
        let element = $(this.el.nativeElement.children[0]);
        let options = this.options || {}

        let toolbar = '';
        if (options.buttons)
            toolbar += 'B';
        if (this.paginationLength)
            toolbar += 'l';
        if (this.columnsHide)
            toolbar += 'C';

        options = $.extend(options, {

            "dom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
            oLanguage: {
                "sSearch": "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
                "sLengthMenu": "_MENU_"
            },
            "autoWidth": false,
            retrieve: true,
            responsive: true,
            initComplete: (settings, json) => {
                console.log("OPT:", options);
                //console.log("JSON:",json);
                //console.log("settings",settings);
                element.parent().find('.input-sm', ).removeClass("input-sm").addClass('input-md');
            }
        });

        const _dataTable = element.DataTable(options);

        if (this.filter) {
            // Apply the filter
            element.on('keyup change', 'thead th input[type=text]', function () {
                _dataTable
                    .column($(this).parent().index() + ':visible')
                    .search(this.value)
                    .draw();

            });
        }


        if (!toolbar) {
            element.parent().find(".dt-toolbar").append('<div class="text-right"><img src="assets/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
        }

        if (this.statusToolbar) {
            element.parent().find(".dt-toolbar").hide();
        }

        if (this.detailsFormat) {
            let format = this.detailsFormat
            element.on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = _dataTable.row(tr);
                console.log("ROW:", row)
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    row.child(format(row.data())).show();
                    tr.addClass('shown');
                }
            })
        }

    }

}
