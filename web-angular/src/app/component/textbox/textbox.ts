export class TextboxControl  {             
    id:string = 'text';
    type:string = '';

    constructor(options: {} = {}) {
        this.id = options['id'] === undefined ? this.id : options['id'];
        this.type = options['type'] === undefined ? this.type : options['type'];
    }
}