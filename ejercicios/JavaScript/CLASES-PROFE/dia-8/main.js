"use strict";

// setTimeout, setInterval

console.log("Inicio");
setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
  console.log(2 + 2);
}, 3000);

// que pasa si queremos ejecutar una acción varias veces
// comentado para que no se haga infinito
// setInterval(() => {
//   console.log(
//     "Ejecutando un setInterval, esto se ejecuta un número indeterminado de veces"
//   );
// }, 1000);

// CREAR UN RELOJ EN EL NAVEGADOR. CUENTA SEGUNDOS
// comentado para que no se haga infinito
// setInterval(function () {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// como lo paramos?
// Hay 2 funciones contraparte
// clearTimeout
const numero = 2;
let temporizador = setTimeout(function () {
  if (numero < 5) {
    clearTimeout(temporizador);
  }
  //   console.log(new Date().toLocaleTimeString());
  console.log("El usuario aprobo");
}, 5000);

function comprobarNumero(num) {
  if (num < 5) {
    clearTimeout(temporizador);
  }
}
// llamamos a una BD externa
// nos devuelve el numero de nota del estudiante
comprobarNumero(numero);

// clearInterval
let temporizadorInterval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(temporizadorInterval);
}, 5000);
// Esto normalmente se ejecuta por eventos del cliente en la pagina web

// Crear una funcion que muestre un mensaje cada segundo utilizando setInterval y se detenga en 5s
function mostrarMensajes() {
  let contador = 1;
  let intervalo = setInterval(() => {
    console.log(`Mensaje numero: ${contador}`);
    contador++;

    if (contador > 5) {
      clearInterval(intervalo);
    }
  }, 1000);
}

mostrarMensajes();

// function tarda 10s

console.log(2 + 2);

// EVENT LOOP
function sayHello() {
  setTimeout(() => {
    console.log("Hola");
  }, 0);
  console.log("Adios");
}

sayHello();

console.log("Eh tu");

// Código síncrono bloqueante:
console.log("Inicio del código síncrono");

function dos() {
  console.log("Dos");
}

function uno() {
  console.log("Uno");
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");

// Código asíncrono no bloqueante
console.log("Inicio del código asíncrono");

function dosAsync() {
  setTimeout(() => {
    console.log("Dos");
  }, 1000);
}

function unoAsync() {
  setTimeout(() => {
    console.log("Uno");
  }, 1000);
  dosAsync();
  console.log("Tres");
}

unoAsync();
console.log("Fin");

// MECANISMOS DE JS PARA TRABAJAR LA ASINCRONIA

// CALLBACKS, PROMESAS y FUNCIONES ASINCRONAS

// CALLBACKS

// funcion que retorna los datos de un usuario. Simulamos que tarda 1s en obtenerlos de una BD
function fetchUserData(token, callback) {
  setTimeout(() => {
    // el token es necesario para acceder a la BD
    console.log(`Fetching user data for user`);
    const userData = {
      id: 123,
      name: "Michael Jordan",
      email: "jordan@nike.com",
    };
    callback(userData);
  }, 1000);
}

// // funcion que retorna los posts de un usuario. Simulamos que tarda 1.5s en obtenerlos de una BD
function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    console.log(`Fetching posts for user ${userId}`);
    const posts = [
      { id: 1, title: "Post 1", content: "Este es el post 1" },
      { id: 2, title: "Post 2", content: "Este es el post 2" },
      { id: 3, title: "Post 3", content: "Este es el post 3" },
    ];
    callback(posts);
  }, 1500);
}

// esto sería como esperaríamos que funcione, pero va a fallar debido al tiempo que tardan en ejecutarse las acciones de consulta a la BD
/*
function fetchUserData(token) {
  setTimeout(() => {
    // el token es necesario para acceder a la BD
    console.log(`Fetching user data for user`);
    const userData = {
      id: 123,
      name: "Michael Jordan",
      email: "jordan@nike.com",
    };
    return userData;
  }, 1000);
}
const userResponse = fetchUserData(2342);
console.log(userResponse);

function fetchUserPosts(userId) {
  setTimeout(() => {
    console.log(`Fetching posts for user ${userId}`);
    const posts = [
      { id: 1, title: "Post 1", content: "Este es el post 1" },
      { id: 2, title: "Post 2", content: "Este es el post 2" },
      { id: 3, title: "Post 3", content: "Este es el post 3" },
    ];
    return posts;
  }, 1500);
}
const userPosts = fetchUserPosts(userResponse.id);
console.log(userPosts);

userPosts.forEach((post) => console.log(`- ${post.title}: ${post.content}`));

*/

// function que muestra los datos de un usario y sus posts
// Gracias a los CB, podemos hacer que se ejecuten de manera asíncrona, ya que se van a poner en la cola de tareas, y mientras se va ejecutando el resto del codigo

function displayUserPosts(token) {
  fetchUserData(token, function (userData) {
    if (!userData.name) {
      console.log("Username not found");
    }
    console.log(`User: ${userData.name}`);
    fetchUserPosts(userData.id, function (posts) {
      if (posts.length === 0) {
        console.log("User has no posts available");
      }
      console.log(`Posts for user ${userData.name}`);
      posts.forEach((post) => console.log(`- ${post.title}: ${post.content}`));
    });
  });
}

// Llamamos a la funcion displayUserPosts pasandole el id del usuario que queremos mostrar sus datos y posts en consola --> se va a ejecutar de manera asíncrona
const token = "hbsjfndhbhff";
displayUserPosts(token);

console.log("termina");

// PROMESAS
// Tiene 3 estados:
// Pending: estado inicial, no se ha cumplido ni rechazado
// Fulfilled: se cumplió la operación
// Rejected: se rechazó la operación

// funcion que retorna los datos de un usuario o un error. Simulamos que tarda 1s en obtenerlos de una BD
function fetchUserDataPromise(token) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Fetching data del user usando token");
      //   const userData = {
      //     id: 123,
      //     name: "Rafael Nadal",
      //     email: "rafa@babolat.com",
      //   };
      const userData = "";
      if (!userData) {
        reject("User not found");
      }
      resolve(userData);
    }, 1000);
  });
}

// funcion que retorna los posts de un usuario o un error. Simulamos que tarda 1.5s en obtenerlos de una BD
function fetchUserPostsPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching posts for user ${userId}`);
      const posts = [
        { id: 1, title: "Post 1", content: "Este es el post 1" },
        { id: 2, title: "Post 2", content: "Este es el post 2" },
        { id: 3, title: "Post 3", content: "Este es el post 3" },
      ];
      if (!posts) {
        reject("Post not found");
      }
      resolve(posts);
    }, 1500);
  });
}

// misma funcion que antes basada en promesas
function displayUserPostsPromise(userId) {
  fetchUserDataPromise(userId)
    .then((userData) => {
      console.log(`User: ${userData.name}`);
      return fetchUserPostsPromise(userData.id);
    })
    .then(function (posts) {
      posts.forEach((post) => console.log(post));
    })
    .catch((error) => {
      console.log(error);
    });
}
displayUserPostsPromise(123);
