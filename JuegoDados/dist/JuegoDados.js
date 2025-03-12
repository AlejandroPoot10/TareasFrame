import { Jugador } from "./Jugador.js";
import { Dado } from "./Dado.js";
import { Jugada } from "./Jugada.js";
export class JuegoDados {
    constructor(nombre1, nombre2, cantidadJugadas) {
        this.cantidadJugadas = cantidadJugadas;
        this.jugador1 = new Jugador(nombre1);
        this.jugador2 = new Jugador(nombre2);
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.vencedor = null;
    }
    /**
     * Simula la ejecución del juego de dados con el número de jugadas establecidas.
     */
    jugar() {
        const jugada = new Jugada();
        for (let i = 0; i < this.cantidadJugadas; i++) {
            console.log(`Jugada ${i + 1}:`);
            const ganador = jugada.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
            if (ganador === this.jugador1) {
                this.marcadorJugador1++;
            }
            else if (ganador === this.jugador2) {
                this.marcadorJugador2++;
            }
        }
        if (this.marcadorJugador1 > this.marcadorJugador2) {
            this.vencedor = this.jugador1;
        }
        else if (this.marcadorJugador2 > this.marcadorJugador1) {
            this.vencedor = this.jugador2;
        }
        console.log(this.obtenerResultado());
    }
    /**
     * Retorna el resultado del juego.
     */
    obtenerResultado() {
        if (this.vencedor) {
            return `El vencedor es: ${this.vencedor.nombre}`;
        }
        else {
            return "El juego terminó en empate.";
        }
    }
}
