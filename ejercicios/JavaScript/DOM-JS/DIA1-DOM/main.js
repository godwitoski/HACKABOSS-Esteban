"use strict";
console.log("Hello word!");
//window.console.log("Hello word!");

//la palabra window no es necesario
//Propiedades del objeto window
// //innerHeight y innerWidht  -- Nos devuelven ancho y largo del navegador en px
// console.log(innerHeight, innerWidth);

// //outerHeight y outerWidht ---- Nos devuelve objeto con info ,completa, congiendo todo, no solo body
// console.log(outerHeight, outerWidth);

// //window.location
// //informacion sobre la URL
// console.log(window.location);

// //window.document
// console.log(document);

//body
//nos da info del body
//console.log(document.body);

// window.onload = () => {
//   console.log(document.body);
// };

//otra forma que veremos luego. Sin framework
// document.addEventListener("DOMContentLoaded",()=>{
//     console.log(document.body)
// })

// console.log(document.head);
// console.log(document.body);

// console.log(document.links);

// console.log(document.images);
// console.log(document.forms);

// console.log(document.scripts);

// console.log(document.URL);

// console.log(document.cookie);

// console.log(window.navigator);

//----- METODOS

//// window.alert()
// alert("Alertaaaaaaaa")

////window.confirm() -boolean
//confirm("Esto es un confirm");

////prompt() - siempre devuelve string
// prompt("Te pido un dato, usuario");

////windows.open()
//abrir ventana nueva
// const hola=window.open();

////window.close
//close(hola)

////window.print()
// print();

//setTimeout-setInterval --clear.......

//-----Crear funcion que muestre un contador en consola cada segundo aumenta la cuenta el 10 y se detiene cuando llega a 100

//------Contador --------------
// function trackerCounter() {
//   let count = 0;
//   const interval = setInterval(() => {
//     console.log(count);
//     count += 10;

//     if (count > 100) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }
// trackerCounter();

//-----DOM(Document Object Model)

////seleccionar un nodo

// document.getElementById()--devuelve un objeto con info sobre el elem HTML con ese Id

// const title = document.getElementById("title");
// console.log(title);

// //document.querySelector

// const titleQuerySelector = document.querySelector("#title");
// console.log(titleQuerySelector);

// console.log(document.querySelector(".paragraph"));
// console.log(document.querySelector("section"));

// //seleccionar varios
// const paragraphs = document.querySelectorAll(".paragraph");
// console.log(paragraphs);

// const ps = document.querySelectorAll("section > p");
// console.log(ps);

// for (let p of ps) {
//   p.style.backgroundColor = "tomato";
// }

// // -----Moverse por el DOM
// const pid = document.getElementById("pid");
// console.log(pid.firstChild);

// /* //---Tipos nodos:
// -Document : Nodo Raiz
// -Element : Representa cada una de las tags(etiquetas) del HTML.
//     Único del que se puede obtener atributos
// -Atributo:
// -Text: nodo que contiene el text dentro de una etiqueta
// -Comment : representa un comentario en HTML

// */

// const body = document.querySelector("body");
// console.log(body);

// console.log(body.hasChildNodes()); //pregunta si tiene hijos
// console.log(body.childNodes); //todos los nodo
// console.log(body.children); //nodos elementos

// console.log(body.firstChild); //da lo que quiere- texto
// console.log(body.firstElementChild); //nodo de elemento

// const section = document.querySelector("section");
// console.log(section.lastChild);
// console.log(section.lastElementChild);

// console.log(section.previousSibling);
// console.log(section.previousElementSibling);

// console.log(section.nextSibling);
// console.log(section.nextElementSibling);

// console.log(section.parentNode);
// console.log(section.parentElement);

//modificar texto en los elementos
// const title = document.querySelector("#title");
// console.log(title);

// title.textContent = "Nuevo titulo";

// console.log(title.innerText); //si css property visibility es hidden no lo muestra ni puedes acceder
// console.log(title.innerHTML); //acede a lo que halla

// //--Modificando atributo de los elementos

// //setAttribute
// title.setAttribute("class", "backgroundRed");

//getAttribute
// console.log(title.getAttribute("class"));

// console.log(title.classList);

// console.log(title.hasAttribute("class"));

// console.log(title.removeAttribute("class"));

// console.log(title.hasAttribute("class"));

// --Modificar estilos
// title.classList.add("no-See");
// title.classList.remove("no-See");

// //quita pon
// title.classList.toggle("no-See");
// title.classList.toggle("no-See");

// title.classList.replace("ClassInicial", "backgroundRed");

// //modicar stilos
// // title.style.color = "blue";
// // title.setAttribute("style", "color:red; background:orange;"); //son estilos en linea, al html

// // title.style.color = "blue";
// // title.style.background = "orange";

// const item = document.createElement("li"); //creamos un li
// console.log(item);
// const itemContent = document.createTextNode("Texto nuevo");

// item.appendChild(itemContent);
// console.log(item);
// //--
// const li = document.querySelector(".li");
// console.log(li.parentElement); //accedemos al padre por el hijo
// console.log(li.nextElementSibling);

// console.log(li.parentElement.children[2]);

// const ul = document.querySelector(".ul");
// ul.appendChild(item);
// console.log(ul);

const headerDiv = document.querySelector("header");
const toggleButton = document.createElement("button");
const menuMobile = document.querySelector(".hidden");
toggleButton.innerText = "Menú";
toggleButton.style.padding = "8px 5px";
toggleButton.style.borderRadius = "5px";
headerDiv.style.display = "flex";
headerDiv.style.justifyContent = "space-between";

toggleButton.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});

headerDiv.appendChild(toggleButton);

const anadir = confirm("Quieres añadir un nuevo producto");

const productList = document.querySelector("#products");
const newProduct = document.createElement("article");
newProduct.classList.add("product");
newProduct.innerHTML = `<h2>Product 4</h2> 
<p>Definicion producto 4...</p>
<button class="btn">ADD TO CART </button>`;

if (anadir === true) {
  productList.appendChild(newProduct);
}

const allButtons = document.querySelectorAll(".btn");
for (let button of allButtons) {
  //   button.addEventListener("mouseover", () => {
  //     menuMobile.classList.toggle("hidden");
  //   });
  button.addEventListener("mouseleave", () => {
    //es como hover
    menuMobile.classList.toggle("hidden");
  });
  //   button.onclick()
}
