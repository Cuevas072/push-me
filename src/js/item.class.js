export class item{

    constructor( item ){
        
        this.id = new Date().getTime();
        this.Texto = '';        
        this.url = '';        
        this.creado = new Date();

    }

    imprimirClase(){
        console.log(`${ this.id } - ${ this.Texto }`);
    }
}