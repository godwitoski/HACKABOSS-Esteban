"use strict";

// EVENTOS

// CREANDO EVENT LISTENERS
// Metodo tradicional
const elem = document.querySelector(".topSection");
elem.onclick = function () {
  console.log("Acabas de hacer click en la seccion de arriba");
};

// chafara la anterior
elem.onclick = function () {
  console.log("Acabas de hacer un click extra en la seccion de arriba");
};

elem.onmouseenter = function () {
  console.log(
    "Acabas de entrar en el area de la seccion de arriba con el cursor"
  );
};

// Metodo moderno y RECOMENDADO --> addEventListener
// Ventaja principal --> asignar multiples respuestas a 1 evento de un elemento

elem.addEventListener("click", () => {
  console.log("Click 1");
});
elem.addEventListener("click", () => {
  console.log("Click 2");
});

// Podemos pasar la funcion callback como anonima
elem.addEventListener("click", () => {
  console.log("Click 3");
});
function handleClick() {
  console.log("Click 4");
}
// Podemos pasar una funcion ateriormente declarada
elem.addEventListener("click", handleClick);

// Si tenemos la funcion declarada, podemos borrar el evento
elem.removeEventListener("click", handleClick);

// Detectar cuando el HTML esta ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("Documento listo");
});

console.log(1);
document.addEventListener("DOMContentLoaded", () => {
  console.log(2);
});
console.log(3);

// EVENTOS DE MOUSE

// capturar navBar
const nav = document.querySelector(".navBar");
console.log(nav);

// escuchar evento
nav.addEventListener("mouseenter", () => {
  console.log("Entramos en la barra de navegacion");
  nav.style.backgroundColor = "green";
});

nav.addEventListener("mouseout", () => {
  console.log("Salimos de la barra de navegacion");
  nav.style.backgroundColor = "transparent";
});

// muy similar al click
nav.addEventListener("mousedown", () => {
  console.log("Mousedown");
});
nav.addEventListener("mouseup", () => {
  console.log("Mouseup");
});

nav.addEventListener("dblclick", () => {
  console.log("Double click");
});

// EVENTOS DE TECLADO
// Coger la barra de busqueda
const search = document.querySelector(".search");
console.log(search);
// al presionar tecla
search.addEventListener("keydown", () => {
  console.log("Escribiendo...");
});

// al soltar la tecla
search.addEventListener("keyup", () => {
  console.log("soltando tecla...");
});

// al salirse (quitar foco) de un input. Excelente para validaciones
search.addEventListener("blur", () => {
  console.log("hicimos click fuera del input...");
});

// al hacer click (focus) en un input
search.addEventListener("focus", () => {
  console.log("ready para escribir...");
});

// cuando copiamos, pegamos o cortamos
search.addEventListener("copy", () => {
  console.log("copiando...");
});

search.addEventListener("paste", () => {
  console.log("pegando...");
});

search.addEventListener("cut", () => {
  console.log("cortando...");
});

// input --> cubre alguno de los anteriores como keydown, cut, paste
search.addEventListener("input", () => {
  console.log("input...");
});

search.addEventListener("input", (e) => {
  console.log(e);
  console.log(e.type);
  // uno de los que + vamos a usar
  console.log(e.target);
  console.log(e.target.value);
  //   puedo acceder al valor de este target. y por tanto a lo que escribe el user
  if (e.target.value === "") {
    console.log("Fallo la validacion");
  }
});

const formulario = document.querySelector(".search-form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Buscando o validando");
  console.log(e.target.method);
  console.log(e.target.action);
});

// EJERCICIO: crear un formulario con inputs name, age (inputs son strings) y email que hagan sus validaciones antes de enviarlo. Hay que hacer algo de research
// name --> no este vacio
// age --> sea numero y que sea mayor a 18
// email --> que no este vacio

// Resultado final. Validacion antes de enviar, y si hay alguna que no pasa, que aparezca un parrafo con el error

// crear form //
// capturar form
const form = document.querySelector("#ej-form");
console.log(form);

// pasarle el elem donde sucedio y el mensaje
const showError = function (elem, message) {
  // crear un parrafo nuevo
  const newMessage = document.createElement("p");
  // meterle texto
  const newContent = document.createTextNode(message);
  //   insertar texto en el p
  newMessage.appendChild(newContent);
  console.log(newMessage);
  // insertarlo debajo del elem
  elem.insertAdjacentElement("afterend", newMessage);
};
// escuchar submit evento
form.addEventListener("submit", function (e) {
  // prevenir default
  e.preventDefault();
  // seleccionar elementos querySelector-getElementId
  const name = document.querySelector(".name-input");
  const age = document.querySelector(".age-input");
  const email = document.querySelector(".email-input");

  // array para capturar errores
  const errores = [];
  // si hay algun error, ejecutar una funcion que muestre el parrafo con el error

  // validacion
  if (name.value === "") {
    console.log(name);
    showError(name, "El nombre no puede estar vacio");
    errores.push("El nombre no puede estar vacio");
  }

  if (isNaN(parseInt(age.value))) {
    showError(age, "La edad debe ser un numero");
    errores.push("La edad debe ser un numero");
    console.log(parseInt(age.value));
  }
  if (parseInt(age.value) < 18) {
    showError(age, "La edad debe ser mayor a 18");
    errores.push("La edad debe ser mayor a 18");
  }

  if (email.value === "") {
    showError(email, "El email no puede estar vacio");
    errores.push("El email no puede estar vacio");
  }

  // si no hay errores
  // si esta ok, mandamos form
  if (errores.length === 0) {
    // enviamos formulario
    console.log(e.target.submit());
    console.log("se envio el form");
  }
});

// Eventos de scroll

window.addEventListener("scroll", () => {
  const scrollPx = window.scrollY;
  console.log("Scrolling....");
  console.log(scrollPx);
});

window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium-gyms");
  const ubicacion = premium.getBoundingClientRect(); // -> nos da la info como x ej cuanto falta para llegar al elem en cuestion
  console.log(ubicacion);
  if (ubicacion.top < 600) {
    console.log("el elem ya esta visible");
  } else {
    console.log("aun no lo veo. haz mas scroll");
  }
});

// EVENT BUBBLING //

const optionDiv = document.querySelector(".option");
const infoDiv = document.querySelector(".info");
const title = document.querySelector(".title");

optionDiv.addEventListener("click", () => {
  console.log("Click en option");
});
infoDiv.addEventListener("click", () => {
  console.log("Click en info");
});
title.addEventListener("click", () => {
  console.log("Click en titulo");
});

// COMO EVITARLO

optionDiv.addEventListener("click", (e) => {
  console.log("Click en option");
});
infoDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en info");
});
title.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en titulo");
});

// EVENT DELEGATION --> tmb sirve para parar el event bubbling
optionDiv.addEventListener("click", (e) => {
  console.log("Click en option");
  console.log(e.target); //ELEMENTO COMPLETO
  console.log(e.currentTarget); //ELEMENTO GENERAL
  console.log(e.target.classList);

  if (e.target.classList.contains("title")) {
    console.log("Diste click en el titulo");
  }
  if (e.target.classList.contains("price")) {
    console.log("Diste click en el precio");
  }
  if (e.target.classList.contains("option")) {
    console.log("Diste click en el option");
  }
});
