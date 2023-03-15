//Inicio del juego
alert ("Inicia el juego! (Piedra, papel o tijera). Elige muy bien tu ataque"); 

// Variables, array, objetos, ciclo. 
const nombreJugadores = []; 

let cantidad = 1; 

let jugador; 


do {
    let objeto = {};
    let ingresaUnNombre = prompt("Ingresa por favor tu nombre, para empezar a jugar");
    objeto.ingresaUnNombre = ingresaUnNombre.toUpperCase();

    jugador = prompt("Escribe un numero para elegir como empezar, del 0 al 2: (0 = Piedra, 1 = Papel, 2 = Tijera)");

    while (jugador >= "3"){
        switch (jugador){
            case "0":
                console.log("Elegiste piedra");
                break;
            case "1":
                console.log("Elegiste papel");
                break;
            case "2":
                console.log("Elegiste tijera");
                break;
            default:
                console.log("No elegiste ningun valor correcto del 0 al 2: (0 = Piedra, 1 = Papel, 2 = Tijera)");    
        }
    }  
    nombreJugadores.push(objeto)

} while (nombreJugadores.length != cantidad)

console.log(nombreJugadores);

/*Jugada aleatoria
0 piedra
1 papel
2 tijera*/

let enemigo = Math.floor(Math.random() * 3);

if (enemigo == 0){
    console.log("El enemigo escogio piedra");
} else if (enemigo == 1){
    console.log("El enemigo escogio papel");
} else if (enemigo == 2){
    console.log("El enemigo escogio tijera");
}

/*Resultado del juego 
0 piedra 
1 papel 
2 tijera*/

if (jugador == enemigo){
    console.log("Empate");
} else if (jugador == 0 && enemigo == 1){
    console.log("Gano el enemigo con Papel a Piedra");
} else if (jugador == 0 && enemigo == 2){
    console.log("Ganaste con Piedra a Tijera");
} else if (jugador == 1 && enemigo == 0){
    console.log("Ganaste con Papel a Piedra");
} else if (jugador == 1 && enemigo == 2){
    console.log("Gano el enemigo con Tijera a Papel");
} else if (jugador == 2 && enemigo == 0){
    console.log("Gano el enemigo con Piedra a Tijera")
} else if (jugador == 2 && enemigo == 1){
    console.log("Ganaste con Tijera a Papel")
} else {
    console.log("Ingresa un numero para poder jugar y ser el ganador")
}

console.log("Termino el juego, gracias por participar");

// Segunda parte, con variables, objetos, array y funciones 

alert("Ahora me podrias decir si te gusta algun otro juego?");

//console.log(juegos);

let juegoFavorito = prompt("Ingresa por favor el nombre de otro juego que te guste, puede que no este disponible");

const busqueda = {
    nombre: juegoFavorito,
    edadRecomendada: '8 años en adelante',
    jugadoresMinimo: '',
    jugadoresMaximo: '',
    materialDelJuego: ''
}

function posiblesJuegos(juegos){
    juegos.forEach(juego => {
        console.log(juego)
    });
}

function busquedaJuegoFavorito(juego){
    if(busqueda.nombre){
        return juego.nombre == busqueda.nombre
    }
    return juego;
}

function busquedaEdadRecomendada(juego){
    if(busqueda.edadRecomendada){
        return juego.edadRecomendada == busqueda.edadRecomendada
    }
    return juego;
}

function busquedaJugadoresMinimo(juego){
    if(busqueda.jugadoresMinimo){
        return juego.jugadoresMinimo >= busqueda.jugadoresMinimo
    }
    return juego;
}

function busquedaJugadoresMaximo(juego){
    if(busqueda.jugadoresMaximo){
        return juego.jugadoresMaximo <= busqueda.jugadoresMaximo
    }
    return juego;
}

// No se como hacer que solo aparezca cuando no hay resultados, siempre aparece

function noHayResultado(){
    console.log("No hay resultados del juego que te gusta, perdon");
}

function busquedaDeJuegos(){
    let resultado = juegos.some(busquedaJuegoFavorito)
    console.log(resultado);
    if (resultado.length){
        posiblesJuegos(resultado)
    } else {
        noHayResultado();
    }
}

function busquedaDeJuegosDos() {
    let resultado2 = juegos.filter(busquedaEdadRecomendada).filter(busquedaJugadoresMinimo).filter(busquedaJugadoresMaximo)
    //console.log(resultado2);
    if (resultado2.length){
        posiblesJuegos(resultado2)
    } else {
        noHayResultado();
    }
}

busquedaDeJuegos();
busquedaDeJuegosDos();