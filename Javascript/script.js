
/* Funciones */

function saludar() {
    let userName = prompt('Hola, ¿podés ingresar tu nombre?');
    alert('Hola ' + userName);

}

saludar();

/* Ciclos */


let passUserSaved = "TamiJasmin";
let continuar = true;
let passUser = prompt("Hola, ingresá tu contraseña");

while (continuar) {
    if (passUserSaved === passUser) {
        alert('Hola, bienvenid@');
        continuar = false;
        break;
    }

    alert('Uy, parece que te equivocaste');

    passUser = prompt("Ingresá tu contraseña");

}

let option = prompt('Elegí que te gustaría hacer hoy: \n1- Jugar un juego \n2- Escuchar una canción \n3- Leer\n4- Poner música para dormir');

switch (option) {
    case '1':
        alert("Elegiste jugar un juego");
        break;

    case '2':
        alert("Elegiste escuchar una canción");
        break;

    case '3':
        alert("Elegiste leer");
        break;

    case '4':
        alert("Elegiste Poner música para dormir");
        break;

    default:
        alert("Ups, esa opción es incorrecta")

}


class Cancion {

    constructor(titulo, anio, album, valoracion, id) {
        this.titulo = titulo;
        this.anio = anio;
        this.album = album;
        this.valoracion = parseInt(valoracion);
        this.id = id;

    }



    asignarId(array) {
        this.id = array.length;
    }

    valorar(valoracion) {
        this.valoracion = parseInt(valoracion);
    }

}

const canciones = [
    new Cancion('Boy in Lov', 2014, 'Skool Luv Affair', 8, 5),
    new Cancion('Dope', 2015, 'The Most Beautiful Moment in Life, Part 1', 9, 3),
    new Cancion('Dynamite', 2020, 'Be', 9, 0),
    new Cancion('Permission to Dance', 2021, 'Permission to Dance Remix', 9, 7)

]

let next = true;

while (next) {
    let ingreso = prompt('Holi, aquí puedes ingresar las canciones que quieras, recuerda poner su título, año, álbum y puntaje del 1 al 10, recordá separarlos por una barra diagonal (/), para finalizar, presioná X');



    if (ingreso.toUpperCase() == 'x') {
        next = false;
        break;
    }
    let datos = ingreso.split('/');
    const song = new Cancion(datos[0], datos[1], datos[2], datos[3]);
    console.log(datos);

    canciones.push(song);
    song.asignarId(canciones);

}

let search = prompt('Elegí lo que te parezca: \n1 - Título de la canción (A a Z) \n2 - Título de la canción (Z a A) \n3 - Título del álbum (A a Z) \n4 - Título álbum (Z a A) \n5 - De Mayor a Menor puntaje');

function ordenar(search, array) {
    let arrayOrdenado = array.slice(0);


    switch (search) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
            return nombreAscendente;

        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(a.titulo));
            return nombreDescendente;

        case '3':
            let nombreAlbumAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.album));
            return nombreAlbumAscendente;

        case '4':
            let nombreAlbumDescendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(a.album));
            return nombreAlbumDescendente;

        case '5':
            return arrayOrdenado.sort((a, b) => a.valoracion - b.valoracion);
    }
}



