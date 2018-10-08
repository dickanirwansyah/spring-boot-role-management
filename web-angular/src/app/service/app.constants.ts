export class Configuration {
    public static get API_ENDPOINT(): string { return 'http://localhost:8099/spring-service/'; }

    public static get MESSAGE(): string { return 'Tanggal Tidak Boleh Lebih Besar Dari Hari Ini'; }

    public static get MESSAGE2(): string { return 'Tanggal Tidak Boleh Lebih Kecil Dari Hari Ini'; }

    public static get FILE_SIZE(): string { return 'Data tidak boleh lebih dari 10MB'; }

    public static get EMPTY(): string { return 'Data tidak ditemukan'; }

    public static get TYPE_PDF(): string { return 'Data Hanya Bisa PDF'; }

    public static get DATA_REDUNDANT(): string { return 'Data Tersebut Sudah Ada'; }

    public static get NOT_EMPTY(): string { return 'Lengkapi Data Tersebut'; }
}

