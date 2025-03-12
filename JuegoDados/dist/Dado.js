export class Dado {
    constructor() {
        this.puntos = 0;
    }
    /**
     * Simula el lanzamiento de un dado generando un número aleatorio entre 1 y 6.
     */
    lanzar() {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
