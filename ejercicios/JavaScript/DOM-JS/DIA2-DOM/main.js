"use strict";

//EVENTOS

////CREANDO EVENT LISTENER
//Metodo Tradicional
// const elem = document.querySelector(".topSection");
// elem.onclick = function () {
//   console.log("Acabas de hacer click en la seccion de arriba");
// };

// elem.onmouseenter = function () {
//   console.log("Acabas de entrar en la Seccion de arriba con el cursor");
// };

//Metodo moderno y recomendado -->addEvenListener
//---
//ventaja principal --> asignar multliples respuestas a 1 evento de un elemento

// elem.addEventListener("click", () => {
//   console.log("click 1");
// });

// elem.addEventListener("click", () => {
//   console.log("click 2");
// });

// //podemos pasar la funcion callback como anonima
// elem.addEventListener("click", () => {
//   console.log("Click 3");
// });
// //podemos pasar una funcion anterior mente declarada
// function handleClick() {
//   console.log("click 4");
// }
// elem.addEventListener("click", handleClick);

// //-----si tenemos la funcion declarada, podemos borrar el evento
//  elem.removeEventListener("click", handleClick);

//----Detectar cuando el html está ready
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Documento listo");
// });
// console.log(1);
// document.addEventListener("DOMContentLoaded", () => {
//   console.log(2);
// });
// console.log(3);

//Eventos de mouse

//capturar el navBar
// const nav = document.querySelector(".navBar");
//console.log(nav);

// //------escuchar-registrar evento
// nav.addEventListener("mouseenter", () => {
//   console.log("Entramos en la barra de navegacion");
//   nav.style.backgroundColor = "green";
// });

// nav.addEventListener("mouseout", () => {
//   console.log("Salimos en la barra de navegacion");
//   nav.style.backgroundColor = "transparent";
// });

// //muy similar al click
// nav.addEventListener("mousedown", () => {
//   console.log("MouseDown");
// });

// nav.addEventListener("mouseup", () => {
//   console.log("MouseUp");
// });

// //doble click
// nav.addEventListener("dblclick", () => {
//   console.log("Double click");
// });

//----------
//Eventos de TECLADO

//coger la barra de busqueda
// const search = document.querySelector(".search");

// //al precionar tecla
// search.addEventListener("keydown", () => {
//   console.log("Escribiendo...");
// });

// //al soltar la tecla
// search.addEventListener("keyup", () => {
//   console.log("Soltando tecla...");
// });

// //al salirse (quitar foco) de un input. Excelente para validaciones
// search.addEventListener("blur", () => {
//   console.log("Hicimos click fuera del input..."); //solo para inputs y barras
// });

// //al hacer click (focus) en un input
// search.addEventListener("focus", () => {
//   console.log("Ready para escribir...");
// });

// //----Cuando copiamos, pegamos o cortamos
// search.addEventListener("copy", () => {
//   console.log("Copiando...");
// });

// search.addEventListener("paste", () => {
//   console.log("Pegando...");
// });

// search.addEventListener("cut", () => {
//   console.log("cortando...");
// });

// // El mas comun de todos: input --> cubre alguno de los anterios como keydown,cut,paste..
// search.addEventListener("input", () => {
//   console.log("Input...");
// });

// search.addEventListener("input", (event) => {
//   //   console.log(event);
//   //   console.log(event.type);
//   //---uno de los que más vamos a usar
//   //console.log(event.target);
//   //---puedo acceder al valor de este target. Y por tanto a lo que escribe el user
//   console.log(event.target.value);
//   if (event.target.value === "") {
//     console.error("Fallo en la validacion");
//   }
// });

// const formulario = document.querySelector(".search-form");
// //console.log(formulario);

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log("Buscando o validando");
//   console.log(e.target.method);
//   console.log(e.target.action);
// });

//Ejercicio: Crear un formulario en el html, con inputs name,age (inputs son strings) y email que hagan sus validaciones antes de enviarlo. Hay que hacer algo de research.
//name --> no esté vacio
//age -->sea numero y que sea mayor a 18
//email -->que no esté vacio

//Resultado final. Que valide antes de enviar, y si hay alguna validacion que no pasa, que aparezca en codigo de error(parrafo)

/**
 * 1-Creamos el formulario con sus clases.
 * 2-Seleccionamos cada elemento que queremos validar con el queryselector / form.
 * 3-Escuchamos submit. Quitamos el evento submit por defecto del formulario
 * 4-comprobamos que si todo está bien.
 *  Mande el formulario
 * 5-Si hay algo mal(name-no vacio. age-no sea convertible a numero y 18 años. email.-no vacio),inyectamos un parrafo en el input correspondiente indicando el error que ha ocurrido. Y si están los 3 mal mostrar los 3
 */
// const form = document.querySelector(".validationForm");
// const inputname = document.querySelector("#name");
// const inputage = document.querySelector("#age");
// const inputemail = document.querySelector("#email");
// console.log(form, inputname, inputage, inputemail);
// const showError = function (target, message) {
//   //crear parrafo e insertarlo debajo del target
//   const newMessage = document.createElement("p");
//   const newContent = document.createTextNode(message);
//   //insertamos al p
//   newMessage.appendChild(newContent);
//   //insertar debajo
//   target.insertAdjacentElement("afterend", newMessage);
// };

// const errores = [];

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (
//     inputname.value === "" &&
//     !isNaN(inputage.value) &&
//     inputemail.value === ""
//   ) {
//     showError(form, "Están mal todos los campos");
//     errores.push("Están mal todos los campos");
//   } else if (inputname.value === "") {
//     showError(inputname, "Name está vacio");
//     errores.push("Name está vacio");
//   } else if (!isNaN(inputage.value) && inputage.value < 18) {
//     showError(inputage, "La edad está mal");
//     errores.push("La edad está mal");
//   } else if (inputemail.value === "") {
//     showError(inputemail, "Email está vacio");
//     errores.push("Email está vacio");
//   } else {
//     //sin errores
//     if (errores === 0) {
//       console.log(e.target.submit());
//       console.log("Se envio el form");
//     }
//   }
// });

//Eventos de scroll en window

// window.addEventListener("scroll", () => {
//   const scrollPx = window.scrollY;
//   //   console.log("Scrolling...");
//   //   console.log(scrollPx);
// });
// //-----------
// window.addEventListener("scroll", () => {
//   const premium = document.querySelector(".premium-gyms");
//   const ubicacion = premium.getBoundingClientRect(); //Da info de cuanto falta para llegar al elemento en cuestion
//   // console.log(ubicacion);
//   if (ubicacion.top < 600) {
//     console.log("El elemento ya está visible");
//   } else {
//     console.log("Aún no lo veo, Haz más scroll");
//   }
// });

//--EVENT BUBBLING
// const optionDiv = document.querySelector(".option");
// const infoDiv = document.querySelector(".info");
// const title = document.querySelector(".title");

// optionDiv.addEventListener("click", () => {
//   console.log("click en option");
// });

// infoDiv.addEventListener("click", () => {
//   console.log("click en info");
// });

// title.addEventListener("click", () => {
//   console.log("click en title");
// });

//evitar bubbling
// optionDiv.addEventListener("click", (e) => {
//   console.log("click en option");
//   e.stopPropagation();
// });

// infoDiv.addEventListener("click", (e) => {
//   console.log("click en info");
//   e.stopPropagation();
// });

// title.addEventListener("click", (e) => {
//   console.log("click en title");
//   e.stopPropagation();
// });

///EVENT DELEGATION --> TBM sirve parar el event bubbling
// optionDiv.addEventListener("click", (e) => {
//   //   console.log("Click en option");
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(e.target.classList);

//   if (e.target.classList.contains("title")) {
//     console.log("Diste click en el titulo");
//   }

//   if (e.target.classList.contains("price")) {
//     console.log("Diste click en el precio");
//   }

//   if (e.target.classList.contains("option")) {
//     console.log("Diste click en el option");
//   }
// });

//-----------
//EJERCICIO:
/**
 * Hacer que cuando se le de click al boton abrir footer. el footer se muestre. Al volver a clickar. Se esconde
 */

// const buttonFooter = document.querySelector(".btn-float");
// const footer = document.querySelector("#footer");
// console.log(buttonFooter, footer);

// //--Manera 1

// // let contador = 0;
// // buttonFooter.addEventListener("click", (e) => {
// //   if (contador === 0 || contador % 2 === 0) {
// //     footer.setAttribute("style", "bottom :0");
// //     contador++;
// //   } else {
// //     footer.setAttribute("style", "bottom :-100%");
// //     contador++;
// //   }
// // });

// //--Manera 2

// // buttonFooter.addEventListener("click", (e) => {

// //   if(!footer.classList.contains("active")){
// //     footer.classList.add("active")
// //     buttonFooter.textContent ="Cerrar footer"
// //   }else{
// //     footer.classList.remove("active")
// //     buttonFooter.textContent = "Abrir footer";
// //     }

// // });

// //--Manera 3. Correcta

// buttonFooter.addEventListener("click", (e) => {
//   footer.classList.toggle("active"); //quita pon la clase
// });

// //Ejecicio 2
// //cambio de imagen en la web

// //agregar un evento de raton al titulo donde dice sport
// //dentro del event listener, seleccionar la primera imagen de la lista, y cambia su imagen cuando presionemos el mouse y vuelve a la original

// const tituloSport = document.querySelector(".sports-title");
// const primeraImagen = document.querySelector(".option img");

// tituloSport.addEventListener("mousedown", () => {
//   primeraImagen.src = "./athlete.jpeg";
// });
// tituloSport.addEventListener("mouseup", () => {
//   primeraImagen.src = "Atletismo.jpeg";
// });

//------------------
//-----
/**
 * Hacer de nuevo la validacion del form, pero no vamos a crear el parrafo con js, si no que ya va a existir en el html, y solo se muestra si hay un error.
 * El texto lo crearemos dinamicamente desde js
 */
// crear form //
// // capturar form
// const form = document.querySelector(".validationForm");
// console.log(form);

// // // pasarle el elem donde sucedio y el mensaje
// // // const showError = function (elem, message) {
// // //   // meterle texto
// // //   const newContent = document.createTextNode(message);
// // //   const paragraphError = document.querySelector(elem);
// // //   //   insertar texto en el p
// // //   paragraphError.appendChild(newContent);
// // // };
// // // escuchar submit evento
// // form.addEventListener("submit", function (e) {
// //   // prevenir default
// //   e.preventDefault();
// //   // seleccionar elementos querySelector-getElementId
// //   const name = document.querySelector("#name");
// //   const age = document.querySelector("#age");
// //   const email = document.querySelector("#email");

// //   const p_email = document.querySelector(".erroremail");
// //   const p_age = document.querySelector(".errorage");
// //   const p_name = document.querySelector(".errorname");
// //   // array para capturar errores
// //   const errores = [];
// //   // si hay algun error, ejecutar una funcion que muestre el parrafo con el error

// //   // validacion
// //   if (name.value === "") {
// //     console.log(name);
// //     p_name.textContent = "El nombre no puede estar vacio";
// //     // p_name.style.display = "block";

// //     p_name.classList.remove(".ocultar");

// //     // showError(name, "El nombre no puede estar vacio");
// //     errores.push("El nombre no puede estar vacio");
// //   }

// //   if (isNaN(parseInt(age.value))) {
// //     p_age.textContent = "La edad debe ser un numero";
// //     // p_age.style.display = "block";
// //     p_age.classList.remove(".ocultar");
// //     errores.push("La edad debe ser un numero");
// //   }
// //   if (parseInt(age.value) < 18) {
// //     const p_age = document.querySelector("#errorage");
// //     p_age.textContent = "La edad debe ser un numero";
// //     // p_age.style.display = "block";
// //     p_age.classList.remove(".ocultar");

// //     errores.push("La edad debe ser mayor a 18");
// //   }

// //   if (email.value === "") {
// //     p_email.textContent = "El email no puede estar vacio";
// //     // p_email.style.display = "block";
// //     p_email.classList.remove(".ocultar");

// //     errores.push("El email no puede estar vacio");
// //   }

// //   // si no hay errores
// //   // si esta ok, mandamos form
// //   if (errores.length === 0) {
// //     // p_name.style.display = "none";
// //     // p_email.style.display = "none";
// //     // p_age.style.display = "none";

// //     p_age.classList.add(".ocultar");
// //     p_email.classList.add(".ocultar");
// //     p_name.classList.add(".ocultar");

// //     // enviamos formulario
// //     // console.log(e.target.submit());
// //     console.log("se envio el form");
// //   }
// // });

// // //--

// // //FORM DATA --accediendo
// // console.log(document.forms[1]);
// // const userForm = document.forms.userForm;

// // console.log(userForm.elements.name);

// // const inputName = document.querySelector('input[name="name"]');
// // console.log(inputName);

// // const formAssociated = inputName.form;
// // console.log(formAssociated);

// // inputName.value = "Yo valgo lo que pongo acá";
// // console.log(inputName.value);

// // //getAttributo('value')

// // console.log(inputName.getAttribute("value"));

// // //checkbox
// // const check = document.querySelector("input[name=check]");
// // console.log(check.checked);

// //  //  Jugar con eventos de form
// // focus --> al entrar al input (tener el foco)
// // blur --> salir del input (pierde el foco)
// // input --> cuando cambia el valor del input
// // change --> cuando cambia el valor del input y el elemento pierde el foco

// // // -------------FORM DATA
// // //enviar info estructurada
// // //mandar imagenes o archivos usar form data
// /*
// fetch(url, {
//  header:
//  body:new FormData(form)
// })
// */

// // const nuevoFormData = new FormData(form);
// // console.log(nuevoFormData);

// // //debemos poner name a todos los inputs del form. Si no, serán ignorados por FormData

// // const miFormData = new FormData(form);

// // const dataName = miFormData.set("name", "jorge"); //si existe lo sustituye, si no crea uno nuevo
// // //console.log(dataName);

// // const nombre = miFormData.get("name");
// // //console.log(nombre);

// // const dataName2 = miFormData.append("name", "esteban"); //duplica clave sin cambiar valor
// // const nombre2 = miFormData.getAll("name");

// // //preguntar si tiene
// // console.log(miFormData.has("name"));

// // for (const pair of miFormData.entries()) {
// //   console.log(`${pair[0]}: ${pair[1]}`);
// // }

// // // borrar
// // // miFormData.delete("name")
// // for (const valor of miFormData) {
// //   console.log(valor);
// // }

// //--------------------------
// // *** URLSearchParams ****
// //-------------------------

// const params = new URLSearchParams("nombre=jorge&email=miemail@gmaill.com");

// //te lo ordena por nombre
// params.sort();

// for (let param of params) {
//   console.log(param);
// }

// //to string() -->duelve string con los parámetros de búsqueda
// console.log(params.toString());

// //
// params.append("edad", "33");
// for (const valor of params) {
//   console.log(valor);
// }

// //set,delete,get,has,entries,key,value

// //----------------------
// //*** LOCAL STORAGE ***
// //---------------------
// // --/usamos JSON
// //guarda la informacion para siempre hasta que sea eliminada

// //Session storage
// //guarda la informacion en la ventana en la que estamos

// localStorage.setItem(
//   "coche",
//   "yo no debo poner jamás una contraseña, ni informacion sensible de un usuario aquí"
// );

// const persona = {
//   nombre: "Jorge",
//   edad: 10,
// };

// const personaJSON = JSON.stringify(persona);
// // console.log(personaJSON);
// localStorage.setItem("persona", personaJSON);

// //Recoger
// const coche = localStorage.getItem("coche");
// console.log(coche);

// //HAY QUE CONVERTIR
// const personaRetrive = JSON.parse(localStorage.getItem("persona"));
// console.log(personaRetrive);
// console.log(personaRetrive.nombre);

// //borrar
// // localStorage.removeItem("coche");

// //borrar todos
// //localStorage.clear();

const form = document.querySelector(".validationForm");
console.log(form);

const name = document.querySelector("#name");
const divLocalStorage = document.querySelector("#idlocalstorage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("Nombre", name.value);
  //llamar una funcion que lo lea desde localstorage y lo muestre en el div
  addToDiv();
});

function addToDiv() {
  const Content = localStorage.getItem("Nombre");
  divLocalStorage.innerHTML = `Nombre almacenado: ${Content}`;
  // divLocalStorage.textContent = Content;
}
