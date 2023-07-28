"use strict";

// //setTimeout, setInterval;

// console.log("Inicio");
// setTimeout(() => {
//   console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
//   console.log(2 + 2);
// }, 3000);

// //que pasa si queremos ejecutar una accion varias veces

// setInterval(()=>{
//   console.log("Ejecutando un setInterval, esto se ejecuta un número indeterminado de veces")
// },1000)

////Crear un reloj en el navegador. Que cuente segundos
////console.log(new Date().toLocaleTimeString());
// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

//----/como pararlo
//hay dos funciones contraparte
//// clearTimeout
// const numeroSet = 1;
// let temporizador = setTimeout(() => {
//   // console.log(new Date().toLocaleTimeString());
//   if (numeroSet < 5) {
//     //Esto es asincronia, lo manda a una cola, se ejecuta todo y luego vuelve
//     clearTimeout(temporizador);
//   }
//   console.log("El usuario aprobó");
// }, 5000);

//ejemplo si aprueba a los 5 seg te lo dice, si no aparece nada
// function comprobarNumero(num) {
//   if (num < 5) {
//     clearTimeout(temporizador);
//   }
// }

// comprobarNumero(numeroSet);
// setTimeout(() => {
//   clearTimeout(temporizador);
// }, 2000);

// // //clearInterval
// let temporizadorInterval = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// setTimeout(() => {
//   clearInterval(temporizadorInterval);
// }, 5000); //Esto normalmente de ejecuta por eventos del cliente en la página web

//crear funcion que muestre un mensaje cada segundo con setInterval y se detenga en 5 segundos

// function mostrarMensaje() {
//   let contador = 1;
//   let intervalo = setInterval(() => {
//     console.log(`Mensaje numero:${contador} `);
//     contador++;
//     contador > 5 ? clearInterval(intervalo) : undefined;
//   }, 1000);
// }
// mostrarMensaje();

//-----------EVENT LOOP : pila de tareas y cola de tareas
//js va por eventos

//---Codigo síncrono bloqueante:
// console.log("Inicio del código síncrono");

// function dos() {
//   console.log("Dos");
// }

// function uno() {
//   console.log("Uno");
//   dos();
//   console.log("Tres");
// }

// uno();
// console.log("Fin");

////
//---Codigo asíncrono no bloqueante
// console.log("Inicio del código asíncrono");

// function dosAsync() {
//   setTimeout(() => {
//     console.log("Dos");
//   }, 1000);
// }

// function unoAsyn() {
//   setTimeout(() => {
//     console.log("Uno");
//   }, 0);
//   dosAsync();
//   console.log("Tres");
// }

// unoAsyn();
// console.log("Fin");

//

//- //--Mecanismos de JS para trabajar la asincronia----

// callbacks, promesas y funciones asincronas

//  callback hell
//funcio que retorna los datos de un usuario. Simulamos que tarda un segundo en obtenerlos de una BD
// function fetchUserData(token, callback) {
//   setTimeout(() => {
//     //el token es necesario para acceder a la BD
//     console.log(`Fetching user data for user Token:${token}`);
//     const userData = {
//       id: 123,
//       name: "Michael Jordan",
//       email: "jordan@nike.com",
//     };
//     callback(userData); //son las funciones
//   }, 1000);
// }
// // function (userData) {
// //     console.log(`user:${userData.name}`);
// //     fetchUserPosts(userData.id, function (posts) {
// //       console.log(`Posts for user ${userData.name}`);
// //       posts.forEach((post) => {
// //         console.log(`- ${post.title}: ${post.content}`);
// //       });
// //     });

// //**---- */
// //Funcion que retorna los posts de un usuario. Simulamos que tarda 1.5s en obtenerlo de una base de datos

// function fetchUserPosts(userId, callback) {
//   setTimeout(() => {
//     console.log(`Fetching user data for user ${userId}`);
//     const posts = [
//       { id: 1, title: "post 1", content: "Este es el post 1" },
//       { id: 2, title: "post 2", content: "Este es el post 2" },
//       { id: 3, title: "post 3", content: "Este es el post 3" },
//     ];
//     callback(posts); //son las funciones
//   }, 1500);
// }

// // function (posts) {
// //       console.log(`Posts for user ${userData.name}`);
// //       posts.forEach((post) => {
// //         console.log(`- ${post.title}: ${post.content}`);
// //       });

// //**---- */
// //funcion que muestra datos de un usuario y sus posts
// //Gracias a los CB, podemos hacer hacer que se ejecuten de manera asincrona, ya que se van a poner en la cola de tareas, y mientras se va ejecutando el resto del codigo

// function displayUserPosts(token) {
//   fetchUserData(token, function (userData) {
//     if(!userData.name)
// {
//   console.log("Username not found")
// }    console.log(`user:${userData.name}`);
//     fetchUserPosts(userData.id, function (posts) {
//       if(posts.lenght === 0){
//         console.log("User posts no available")
//       }
//       console.log(`Posts for user ${userData.name}`);
//       posts.forEach((post) => {
//         console.log(`- ${post.title}: ${post.content}`);
//       });
//     });
//   });
// }

// //**---- */
// //Llamamos a la funcion displayUserPosts pasandole el id del usuario que queremos mostrar sus datos y posts en consola --> se va a ejecutar de manera asincrona
// const token = "sahdad";
// displayUserPosts(token);
// console.log("Termina");

//---------
// //Manera loca  de por qué se hacian los callbacks hell, las variables eran inaccesibles
// function fetchUserData(token) {
//   setTimeout(() => {
//     //el token es necesario para acceder a la BD
//     console.log(`Fetching user data for user Token:${token}`);
//     const userData = {
//       id: 123,
//       name: "Michael Jordan",
//       email: "jordan@nike.com",
//     };
//     return userData;
//     //
//   }, 1000);
// }

// const userResponse = fetchUserData(2536)
// console.log(userResponse) //acá no tenemos nada porque la funcion está en la la cola espera

// function fetchUserPosts(userId) {
//   setTimeout(() => {
//     console.log(`Fetching user data for user ${userId}`);
//     const posts = [
//       { id: 1, title: "post 1", content: "Este es el post 1" },
//       { id: 2, title: "post 2", content: "Este es el post 2" },
//       { id: 3, title: "post 3", content: "Este es el post 3" },
//     ];
//     return posts; //son las funciones
//   }, 1500);
// }

// const userPosts=fetchUserPosts(userResponse.id)
// console.log(userPosts) //acá no tenemos nada porque la funcion está en la cola de espera

// userPosts.forEach(post => console.log(`- ${post.title}: ${post.content}`)

// );
//--

//--

//----------PROMESAS //hace los callbacks solo
//** Tiene 3 estados
//1-Pending:estado inicial, que no se ha cumplido ni rechazado
//2-Fulfilled: se cumplió la operación
//3-Rejected: se rechazó la operación

// new Promise(resolve,rejecte)

//Funcion que retorna los datos de un usuario o un error. Simulamos que tarda 1seg en obtener los datos de una BD
function fetchUserDataPromise(token) {
  return new Promise(function (resolve, reject) {
    //un callback que recibe 2 callback

    setTimeout(() => {
      console.log("Fetching data del user");
      const userData = {
        id: 23,
        name: "Rafa Nadal",
        email: "rafa@babolat.com",
      };

      if (!userData) {
        reject("User not found");
      }
      resolve(userData);
    }, 1000);
  });
}

//Funcion que retorna los posts de un usuario o un error. Simulamos que tarda 1.5seg en obtener los datos de una BD

function fetchUserPostsPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching user data for user ${userId}`);
      const posts = [
        { id: 1, title: "post 1", content: "Este es el post 1" },
        { id: 2, title: "post 2", content: "Este es el post 2" },
        { id: 3, title: "post 3", content: "Este es el post 3" },
      ];
      if (!posts) {
        reject("No posts found");
      }
      resolve(posts);
    }, 1500);
  });
}

function displayUserPostsPromise(userId) {
  fetchUserDataPromise(userId)
    .then((userData) => {
      console.log(`User: ${userData.name}`);
      return fetchUserPostsPromise(userData.id);
    })
    .then((posts) => posts.forEach((post) => console.log(post)))
    .catch((error) => {
      console.log(error);
    });
}

displayUserPostsPromise(121314);
