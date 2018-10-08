export class Select2Control  {
    datas:Object[];               
    id:string;
    selected:string;
    tipe:number;
    multiple=false;
    placeholder:string;
    allowClear=true;

    constructor(options: {} = {}) {

        this.datas=[{code:"1",des:"Mayotte"},
          {code:"2",des:"Micronesia, Federated States of"},
          {code:"3",des:"Nicaragua"}];
                    
        this.id="select2";
        this.selected='0';
        this.tipe=1;
        this.multiple=false;
        this.placeholder="Pilih";
        this.allowClear=true;
    }
}