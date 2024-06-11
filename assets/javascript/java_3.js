// Se debe construir una página con 3 select y opciones con dígitos del 1 al 9, al hacer
// click a la opción ingresar se debe verificar que el password sea 911 y en ese caso
// mostrar debajo del botón ingresar, un párrafo con el contenido "password 1
// correcto", en caso de que el password sea 714 se debe mostrar en el párrafo
// "password 2 es correcto", si ingresa otro valor se debe mostrar "password
// incorrecto". (Total: 4 puntos)
// A. Se muestra correctamente el párrafo "password 1 correcto" al ingresar el
// password 911 utilizando los select y luego presionando botón con el texto
// ingresar. (1 punto)
// B. Adicionalmente se muestra correctamente el párrafo "password 2 correcto" al
// ingresar el password 714 utilizando los select y luego presionando botón con el
// texto ingresar. (2 puntos)
// C. Se muestra password incorrecto al seleccionar cualquier otro password (1
// punto).

let verificar = document.querySelector("#ingresar_clave")

verificar.addEventListener("click", () =>{
    let num1 = document.querySelector("#numero_1").value;
    let num2 = document.querySelector("#numero_2").value;
    let num3 = document.querySelector("#numero_3").value;

let clave = num1 + num2 + num3;

    if (clave === "911") {
        document.querySelector("p").innerHTML = "Password 1 correcto"
    } else if (clave === "714") {
        document.querySelector("p").innerHTML = "Password 2 correcto"
    } else {
        document.querySelector("p").innerHTML = "Password incorrecto"
    }
});
