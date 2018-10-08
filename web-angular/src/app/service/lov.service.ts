import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './http.client';
import { Permohonan, Request } from '../model/inputData';

declare var xml2json;

@Injectable()
export class LOVService {
    constructor(private _http: Http, private httpClient: HttpClient) { }

    purpose(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/purpose").map((res: Response) => <Object[]>res.json());
    }

    masaPajak(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/masa-pajak").map((res: Response) => <Object[]>res.json());
    }

    jenisPajak(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/jenis-pajak").map((res: Response) => <Object[]>res.json());
    }

    jenisPermohonan(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/jenis-permohonan").map((res: Response) => <Object[]>res.json());
    }

    jenisDokumen(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/jenis-dokumen").map((res: Response) => <Object[]>res.json());
    }

    pegawai(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/pegawai").map((res: Response) => <Object[]>res.json());
    }

    namaPelaksana(kasi: String): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/all-pelaksana?kasi="+kasi).map((res: Response) => <Object[]>res.json());
    }

    namaMenemui(menemui: String): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/all-menemui?menemui="+menemui).map((res: Response) => <Object[]>res.json());
    }

    diterimaMelalui(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/diterima-melalui").map((res: Response) => <Object[]>res.json());
    }

    loginAs(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/login-as").map((res: Response) => <Object[]>res.json());
    }
    
    namaKasiKbp(physicalDeliveryOfficeName: String): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/all-kasi?physicalDeliveryOfficeName="+physicalDeliveryOfficeName).map((res: Response) => <Object[]>res.json());
    }

    statusPersetujuan(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/status-persetujuan").map((res: Response) => <Object[]>res.json());
    }
    
    penelaahKbp(physicalDeliveryOfficeName: String, seksi: String): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/get-penelaah?physicalName="+physicalDeliveryOfficeName+"&seksi=" + seksi).map((res: Response) => <Object[]>res.json());
    }

    kategoriKasus(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/kategori-kasus").map((res: Response) => <Object[]>res.json());
    }

    klasifikasi(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/klasifikasi").map((res: Response) => <Object[]>res.json());
    }

    sifatSurat(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/sifat-surat").map((res: Response) => <Object[]>res.json());
    }

    keputusan(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/keputusan").map((res: Response) => <Object[]>res.json());
    }

    zoneTime(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/zone-time").map((res: Response) => <Object[]>res.json());
    }

    jenisDokumenUnggah(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/jenis-dokumen-unggah").map((res: Response) => <Object[]>res.json());
    }

    jenisDokumenCetakUlang(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/jenis-dokumen-cetak-ulang").map((res: Response) => <Object[]>res.json());
    }

    allPelaksanaPenelaah(pelaksana: String, penelaah: String): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/all-pelaksana-penelaah?pelaksana="+pelaksana+"&penelaah=" + penelaah).map((res: Response) => <Object[]>res.json());
    }

    noSuratTugas(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/stpengganti").map((res: Response) => <Object[]>res.json());
    }

    penelaahKeberatanPengganti(): Observable<any> {
        return this.httpClient.get(Configuration.API_ENDPOINT + "LOV/pk").map((res: Response) => <Object[]>res.json());
    }
}