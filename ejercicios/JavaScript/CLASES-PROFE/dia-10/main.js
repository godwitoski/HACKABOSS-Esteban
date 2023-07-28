"use strict";

console.log("Hello world!");
// // window.console.log("Hello world!");

// // La palabra window no es necesario
// // Propiedades del objeto window

// // innerHeight y innerWidth
// // Nos devuelven alto y ancho de la ventana del navegad
// // console.log(innerHeight, innerWidth);

// // // outerHeight y outerWidth
// // // Nos deveulve objeto con info altura width contando el total
// // console.log(outerHeight, outerWidth);

// // // window.location
// // // Informacion sobre sobre la url
// // console.log(window.location);

// // // window.document
// // console.log(document);

// // body
// // nos devuelve info del body
// // console.log(document.body);

// // window.onload = () => {
// //   console.log(document.body);
// // };

// // otra forma que veremos mas adelante
// // document.addEventListener("DOMContentLoaded", () => {
// //   console.log(document.body);
// // });

// // console.log(document.head);
// // console.log(document.body);

// // console.log(document.links);

// // console.log(document.images);
// // console.log(document.forms);

// // console.log(document.scripts);

// // console.log(document.URL);

// // console.log(document.cookie);

// // console.log(window.navigator);

// // Metodos

// // window.alert()
// // alert("esto es un alert");

// // window.confirm()
// // deveulve true-false
// // confirm("esto es un confirm");

// // propmt()
// // deveulve string
// // prompt("Te pido un dato, usuario");

// // window.open()
// // abre ventana nueva
// // const hola = window.open();

// // window.close()
// // close(hola);

// // window.print()
// // print();

// // setTimeout - setInterval -- clear...

// // Ejercicio
// // Crear funcion que muestre un contador en la consola. Cada segundo aumenta la cuenta en 10 y se detiene cuando lleg a 100
// // function mostrarContador() {
// //   let contador = 0;
// //   const interval = setInterval(() => {
// //     console.log(contador);
// //     contador += 10;
// //     if (contador > 100) {
// //       clearInterval(interval);
// //     }
// //   }, 1000);
// // }
// // mostrarContador();

// // DOM (Document Object Model)

// // Seleccionar un nodo

// // document.getElementById()
// // nos deveulve un objeto con info sobre el elem HTML que tenga ese id
// // const title = document.getElementById("title");
// // console.log(title);

// // // document.querySelector
// // const titleQuerySelector = document.querySelector("#title");
// // console.log(title);
// // console.log(document.querySelector(".paragraph"));
// // console.log(document.querySelector("section"));

// // // Seleccionamos varios
// // const paragraphs = document.querySelectorAll(".paragraph");
// // console.log(paragraphs);

// // const ps = document.querySelectorAll("section > p");
// // console.log(ps);

// // for (let p of ps) {
// //   p.style.backgroundColor = "red";
// // }

// // // Moverse por el DOM
// // const pid = document.getElementById("pid");
// // console.log(pid.firstChild);

// // /*
// // Tipos de nodos:
// // - Document: nodo raíz. Todos derivan de este
// // - Element: Representa cada una de las tags(etiquetas) del HTML.
// //     Es el único del se puede obtener atributos
// // - Attr:
// // - Text: nodo que contiene el text dentro de una etiqueta
// // - Comment: representa un comentario en HTML

// // */

// // const body = document.querySelector("body");
// // console.log(body);

// // console.log(body.childNodes); // todos los nodos
// // console.log(body.children); // nodos de elemento

// // console.log(body.firstChild);
// // console.log(body.firstElementChild);

// // const section = document.querySelector("section");
// // console.log(section);

// // console.log(section.lastChild);
// // console.log(section.lastElementChild);

// // console.log(section.previousSibling);
// // console.log(section.previousElementSibling);

// // console.log(section.nextSibling);
// // console.log(section.nextElementSibling);

// // console.log(section.parentNode);
// // console.log(section.parentElement);

// // Modifica texto en los elementos
// const title = document.querySelector("#title");
// console.log(title);

// title.textContent = "Nuevo titulo";

// console.log(title.innerText); // si CSS property visibility hidden. no lo va a mostrar
// console.log(title.innerHTML);

// // Modificando atributos de los elem

// // setAttribute
// title.setAttribute("class", "backgroundRed");

// // getAttribute
// console.log(title.getAttribute("class"));

// console.log(title.hasAttribute("class"));

// // Modificar estilos
// title.classList.add("no-see");
// title.classList.remove("no-see");

// // quita pon
// title.classList.toggle("no-see");
// title.classList.toggle("no-see");

// title.classList.replace("clase-inicial", "backgroundRed");

// // title.style.color = "blue";
// // title.setAttribute("style", "color:red; background:orange");

// // title.style.color = "blue";
// // title.style.background = "orange";

// // Create element
// const item = document.createElement("li");
// console.log(item);
// const itemContent = document.createTextNode("Texto nuevo");

// item.appendChild(itemContent);
// console.log(item);

// const li = document.querySelector(".li");
// const ul = document.querySelector(".ul");
// // console.log(ul.children[0]);
// console.log(li);
// // console.log(ul);
// ul.appendChild(item);
// console.log(ul);

const headerDiv = document.querySelector("header");
const toggleButton = document.createElement("button");
const menuMobile = document.querySelector(".hidden");
console.log(menuMobile);
toggleButton.innerText = "Menú";
toggleButton.style.padding = "10px 5px";
toggleButton.style.borderRadius = "5px";
headerDiv.style.display = "flex";
headerDiv.style.justifyContent = "space-between";

toggleButton.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});

headerDiv.appendChild(toggleButton);

const anadir = confirm("Quieres anadir un nuevo producto?");
console.log(anadir);

const productList = document.querySelector("#products");
const newProduct = document.createElement("article");
newProduct.classList.add("product");
newProduct.innerHTML = `<h2>Product 4</h2>
<p>Definicion</p>
<button class="btn">ADD TO CART</button>`;
console.log(newProduct);

if (anadir === true) {
  productList.appendChild(newProduct);
}

const allButtons = document.querySelectorAll(".btn");
for (let button of allButtons) {
  console.log(button);
  button.addEventListener("mouseover", () => {
    menuMobile.classList.toggle("hidden");
  });
  button.addEventListener("mouseleave", () => {
    menuMobile.classList.toggle("hidden");
  });
}
