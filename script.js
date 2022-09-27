
/* Funciones */

function saludar () {
    let userName = prompt('Hola, ¿podés ingresar tu nombre?');
    alert ('Hola ' + userName);
    
}

saludar ();

/* Ciclos */


let passUserSaved = "TamiJasmin";
let continuar = true;
let passUser = prompt("Hola, ingresá tu contraseña");

while(continuar){
   if (passUserSaved===passUser) {
         alert ('Hola, bienvenid@');
         continuar =false;
         break;
   }

   alert('Uy, parece que te equivocaste');

   passUser = prompt("Ingresá tu contraseña");

}

let option = prompt('Elegí que te gustaría hacer hoy: \n1- Jugar un juego \n2- Escuchar una canción \n3- Leer\n4- Poner música para dormir');

switch(option){
    case '1':
         alert ("Elegiste jugar un juego");
        break;

    case '2':
        alert ("Elegiste escuchar una canción");
        break;

    case '3':
         alert ("Elegiste leer");
        break;

    case '4':
         alert ("Elegiste Poner música para dormir");
        break;

    default:
        alert("Ups, esa opción es incorrecta")
    
}