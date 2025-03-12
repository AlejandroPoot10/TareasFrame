export class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntoGanado = 0;
    }
    /**
     * Lanza dos dados y devuelve la suma de sus valores.
     * @param dado1 Primer dado a lanzar.
     * @param dado2 Segundo dado a lanzar.
     * @returns Suma de los puntos obtenidos en ambos dados.
     */
    lanzaDados(dado1, dado2) {
        dado1.lanzar();
        dado2.lanzar();
        return dado1.puntos + dado2.puntos;
    }
}
