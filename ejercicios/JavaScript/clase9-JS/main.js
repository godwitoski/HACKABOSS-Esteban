"use strict";

// // PROMESAS //

// //Creamos promesa sencilla
// const myPromise = new Promise((resolve, reject) => {
//   //simular llamada a BD con tiempo
//   setTimeout(() => {
//     //Generamos un numero aleatorio del 1 al numero
//     const randomResponse = Math.floor(Math.random() * 10);
//     //condicion, si el numero es mayor o igual a 5, resolvemos la promesa adecuadamente
//     console.log(randomResponse);
//     if (randomResponse >= 5) {
//       resolve(`Todo ha ido bien el numero es ${randomResponse}`);
//     }
//     //de lo contrario ejecutamos el reject
//     else {
//       reject(`Tenemos un problema: El valor es ${randomResponse}`);
//     }
//   }, 1000);
// });

// myPromise
//   //Con "then" capturamos el objeto que devuelve el "resolve"
//   .then((data) => console.log(data))
//   .then(function (data) {
//     console.log(data);
//   })
//   //con "catch" capturamos el "reject"
//   .catch((error) => console.log(error));

// //--------------Promesas--------------

function fetchUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching user data for user ${userId}`);
      const userData = {
        id: 12345,
        name: "Rafa Nadal",
        email: "rafa@babolat.com",
      };
      if (!userData || userData.length < 0) {
        reject("User not found");
      }
      resolve(userData);
    }, 1000);
  });
}

function fetchUserPostsPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Tenemos los posts de ${userId}`);
      const posts = [
        { id: 1, title: "post 1", content: "Este es el post 1" },
        { id: 2, title: "post 2", content: "Este es el post 2" },
        { id: 3, title: "post 3", content: "Este es el post 3" },
      ];
      if (!posts || posts.length < 0) {
        reject("Posts not found");
      }
      resolve(posts);
    }, 1500);
  });
}

// function displayUserPostsPromise(userId) {
//   fetchUserPostsPromise(userId)
//     .then((user) => {
//       console.log(`User: ${user.name}`);
//       return fetchUserPostsPromise(user.id);
//     })
//     .then((posts) => {
//       console.log(`Estos son los posts:${posts}`);
//       posts.forEach((post) => console.log(`*- ${post.title}: ${post.content}`));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// displayUserPostsPromise(12345);

//------Funciones asincronas- para caputrar error hay que usar try catch
// const displayUserPostsASYNCAWAIT = async (token)=>{} //otra manera
// async function displayUserPostsASYNCAWAIT(token) {
//   try {
//     console.log("Inicio de la funcion asíncrona");
//     let resultadoUser = await fetchUserDataPromise(token);
//     console.log(resultadoUser);
//     let resultadoPosts = await fetchUserPostsPromise(resultadoUser.id);
//     console.log(resultadoPosts);

//     resultadoPosts.forEach((post) =>
//       console.log(`*- ${post.title}: ${post.content}`)
//     );
//   } catch (e) {
//     console.log(e);
//   }
// }

// displayUserPostsASYNCAWAIT("123");

//----------Fetch--se basa en promesas(devuelve un objeto)
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   }) //hay que convertir en js
//   .then((data) => console.log(data))
//   .catch();

//// el fetch con asyn await
// async function obtenerCharacters() {
//   try {
//     const llamadaFetch = await fetch("https://rickandmortyapi.com/api/character");
//     console.log(llamadaFetch);
//     const characters = await llamadaFetch.json()
//     console.log(characters)

//   } catch (error) {
//     console.log(error)
//   }
// }
// obtenerCharacters();

// // Queremos esperar a que varias llamadas asincronas se resuelvan para poder usar ambas respuestas a la vez
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Task 1 completed"));
// }, 2000);

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Task 2 completed"));
// }, 5000);

// Promise.all([promise1, promise2]).then((data) => console.log(data[0], data[1]));

//--------------

//Llamar a la API rickymorty y loguear en consola todos los nombres de los personajes

// fetch("https://rickandmortyapi.com/api/character")
//   .then((Response) => Response.json())
//   .then((data) => data.results)
//   .then((result) => result.forEach((character) => console.log(character.name)))
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://rickandmortyapi.com/api/character")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//     const { results } = data;
//     console.log(results);

//     for (let character of results) {
//       console.log(character.name);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//---filtar con filter
fetch("https://rickandmortyapi.com/api/character")
  .then((Response) => Response.json())
  .then((data) => {
    // const { results } = data;
    // console.log(results);
    // for (let character of results) {
    //   console.log(character.name);
    // }
    const { results: characters } = data;
    // console.log(characters);
    // characters.forEach((character)=>{
    //   if(character.species === "Human"){
    //     console.log(character.name)
    //   }
    // })
    const personajeFiltradoPorEspecies = characters.filter(
      (character) => character.species === "Alien"
    );
    console.log(personajeFiltradoPorEspecies);
  })
  .catch((error) => {
    console.log(error);
  });

//- filtrar con lo de la api*
fetch("https://rickandmortyapi.com/api/character?species=Human")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//--------
//Sacar el character que tengan el id->3,4,100

fetch("https://rickandmortyapi.com/api/character")
  .then((Response) => Response.json())
  .then((data) => {
    const { results: characters } = data;
    const personajeFiltradoPorId = characters.filter(
      (character) =>
        character.id === 3 || character.id === 4 || character.id === 100 //el 100 no lo saca porque va por páginas
    );
    console.log(personajeFiltradoPorId);
  })
  .catch((error) => {
    console.log(error);
  });

//Sacar el character que tengan el id->3,4,100 por su filtro de api
fetch("https://rickandmortyapi.com/api/character/[3, 4, 100]")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//----------
