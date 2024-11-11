export class Pokemon {
/* 1. 🟦POO🟦 */
/* No movimientos no habs */
    id: number;
    nombre: string;
    vida: number;
    ataque: number;
    defensa: number;
    tipo: string;

    /* 🟪CONSTRUCTOR🟪 */
    constructor(id_recibido: number, nombre_recibido: string, vida_recibida: number, ataque_recibido: number, defensa_recibida: number, tipo_recibido: string){
        this.id = id_recibido;//Recibiendo el id como parametro en mi clase
        this.nombre = nombre_recibido;//Recibiendo el nombre como parametro en mi clase
        this.vida = vida_recibida;//Recibiendo la vida como parametro en mi clase
        this.ataque = ataque_recibido;//Recibiendo el ataque como parametro en mi clase
        this.defensa = defensa_recibida;//Recibiendo la defensa como parametro en mi clase
        this.tipo = tipo_recibido;//Recibiendo el tipo como parametro en mi clase
    }

    /* 🟥METODOS🟥 */
    public atacar(){
        console.log('Estoy atacando ⚔️');
    }
    public defender(){
        console.log('Estoy defendiendo 🛡️');
    }
    public quitarVida(cantidad_quitar: number){
        this.vida= this.vida - cantidad;
    }
    public agregarVida(cantidad_agregar: number){
        this.vida= this.vida + cantidad;
    }

    public __str(){
        console.log(`ID: ${this.id} Nombre: ${this.nombre}
        Vida: ${this.vida} Ataque: ${this.ataque} Defensa: ${this.defensa} 
        Tipo: ${this.tipo}`);
    }

    /* 2. 🟩Encapsulamiento🟩 */
}
