import { Injectable } from "@angular/core";
import { DatePipe, DecimalPipe } from '@angular/common';

declare var $: any;

@Injectable()
export class UtilService {
    generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    getDeskripsiLOV(value: any, listLOV: any): string {
        for (let idx = 0; idx < listLOV.length; idx++) {
            let val = listLOV[idx].KODE;

            if (val == value) {
                return listLOV[idx].DESKRIPSI;
            }
        }
        return "";
    }

    dateToString(d: Date): string {
        var datePipe = new DatePipe("new");
        return datePipe.transform(d, 'yyyy-MM-dd');
    }

    dateToStringFormat(d: Date, format: string): string {
        var datePipe = new DatePipe("new");
        return datePipe.transform(d, format);
    }

    dateLiteral(d: Date): string {
        var datePipe = new DatePipe("new");
        return datePipe.transform(d, 'dd-MM-yyyy');
    }

    moneyLiteral(value: any): any {
        let name = new DecimalPipe('new');
        return name.transform(value, '1.0-0');
    }

    toDate(dateStr): Date {
        var parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    masaPajakName(id: any): string {
        if (id === '1') {
            return 'Januari'
        } else if (id === '2') {
            return 'Februari'
        } else if (id === '3') {
            return 'Maret'
        } else if (id === '4') {
            return 'April'
        } else if (id === '5') {
            return 'Mei'
        } else if (id === '6') {
            return 'Juni'
        } else if (id === '7') {
            return 'Juli'
        } else if (id === '8') {
            return 'Agustus'
        } else if (id === '9') {
            return 'September'
        } else if (id === '10') {
            return 'Oktober'
        } else if (id === '11') {
            return 'November'
        } else if (id === '12') {
            return 'Desember'
        } else {
            return 'Tahunan'
        }
    }

    formatUang(nilai: any) {
        var number_string = nilai.replace(/[^,\d]/g, '').toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{1,3}/gi),
            prefix;

        if (ribuan) {
            var separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? rupiah : '');
    }

    cekNumber(nilai: any): boolean {
        return nilai.match(/^[0-9]/);
    }

    sizeFile(value: any): boolean {
        return value > 10485760 ? true : false;
    }

    typeFile(value: any): boolean {
        return value == "application/pdf" ? true : false;
    }

    setValueSelect2(id: any, value: any) {
        jQuery("#" + id).val(value).trigger("change");
    }

    closeModal(id: any) {
        jQuery("#" + id).modal('toggle');
    }

    getKode(value: any): any {
        var arrKode = value.split('-');
        return arrKode[0]
    }

    getPangkat(value: any): any {
        var arrKode = value.split('/');
        return arrKode[1]
    }

    noCommaValue(nilai: any): any {
        return nilai.replace(/,/g, "");
    }

    sort(value: any): any {
        value.sort(function (a: any, b: any) {
            if (a.KODE < b.KODE) {
                return -1;
            } else if (a.KODE > b.KODE) {
                return 1;
            } else {
                return 0;
            }
        })
        return value;
    }

    disableSelect2(id: any, status: boolean) {
        jQuery("#" + id).prop('disabled',status);
    }

    setDefaultModal() {
        $.fn.modal.Constructor.prototype.enforceFocus = function () { };
    }

    cekError(value: any): String{
        if(value.statusSend == 0){
            return ""
        }else if(value.statusSend == 1){
            return "success"
        }else if(value.statusSend == 2){
            return "converted"
        }else if(value.statusSend == 5){
            return "error fill data"
        }else if(value.statusSend == 6){
            return "error click menu individual"
        }else if(value.statusSend == 7){
            return "not found"
        }else if(value.statusSend == 8){
            return "gagal download"
        }else if(value.statusSend == 9){
            return "error conditional"
        }
    }

    newDownload(data: any, filename: string) {
        var csvData = this.newConvertToCSV(data);
        // var a: any = document.createElement("a");
        // a.setAttribute('style', 'display:none;');
        // document.body.appendChild(a);
        // var blob = new Blob([csvData], { type: 'text/csv' });
        // var url = window.URL.createObjectURL(blob);
        // a.href = url;

        // var isIE = /*@cc_on!@*/false || !!(<any>document).documentMode;

        // if (isIE) {
        //     var retVal = navigator.msSaveBlob(blob, filename + '.csv');
        // }
        // else {
        //     a.download = filename + '.csv';
        // }
        // // If you will any error in a.download then dont worry about this. 
        // a.click();
    }

    // convert Json to CSV data
    newConvertToCSV(objArray: any) {
        var csvNew = '';
        for (var idx = 0; idx < objArray.length; idx++) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray[idx]) : objArray[idx];
            var str = '';
            var row = "";

            for (var index in array[0]) {
                //Now convert each value to string and comma-seprated
                row += index + ',';
            }

            row = row.slice(0, -1);
            //append Label row with line break
            str += row + '\r\n';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += '"' + array[i][index] + '"';
                }

                str += line + '\r\n';
            }

            if(objArray.length - 1 != idx){
                str += "\r\n Report \r\n"
                // if(idx == 0){
                //     str += "\r\n Report 1 \r\n"
                // }else if(idx == 1){
                //     str += "\r\n Report 2 \r\n"
                // }
            }
            csvNew += str;
        }
        console.log(csvNew)
        return csvNew;
    }

    download(data: any, filename: string) {
        var csvData = this.ConvertToCSV(data);
        var a: any = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;

        var isIE = /*@cc_on!@*/false || !!(<any>document).documentMode;

        if (isIE) {
            var retVal = navigator.msSaveBlob(blob, filename + '.csv');
        }
        else {
            a.download = filename + '.csv';
        }
        // If you will any error in a.download then dont worry about this. 
        a.click();
    }

    // convert Json to CSV data
    ConvertToCSV(objArray: any) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";

        for (var index in objArray[0]) {
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += '"' + array[i][index] + '"';
            }

            str += line + '\r\n';
           
        }

        return str;
    }
}

