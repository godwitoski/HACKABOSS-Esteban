"use strict";

// document.ready(() => {
// PROMESAS //

// Creamos una promesa sencilla
const myPromise = new Promise((resolve, reject) => {
  // Simular llamada que tarda 1s
  setTimeout(() => {
    // Gerearmos un n aleatorio del 1 al 9
    const randomResponse = Math.floor(Math.random() * 10);
    console.log(randomResponse);
    // Si el numero es mayor o igual a 5, resolvemos la promesa adecuadamente
    if (randomResponse >= 5) {
      resolve(`Todo ha ido bien, el numero es: ${randomResponse}`);
      // De lo contrario ejecutamos reject
    } else {
      reject(`Tenemos un problema: El valor es ${randomResponse}`);
    }
  }, 1000);
});

myPromise
  // Con "then" capturamos el objeto que devuelve el "resolve"
  .then(function (data) {
    console.log(data);
  })
  // Con catch capturamos el "reject"
  .catch((error) => console.log(error));

// Teníamos
function fetchUserData(userId, callback) {
  setTimeout(() => {
    // el userId es necesario para acceder a la BD
    console.log(`Fetching user data for user ${userId}`);
    const userData = {
      id: userId,
      name: "Michael Jordan",
      email: "jordan@nike.com",
    };
    callback(userData);
  }, 1000);
}

// con promesas
function fetchUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching user data for user ${userId}`);
      const userData = "";
      if (!userData) {
        reject("User not found");
      }
      resolve(userData);
    }, 1000);
  });
}

// Teníamos
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

// con promesas
function fetchUserPostsPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Tenemos los posts de ${userId}`);
      const posts = [
        { id: 1, title: "Post 1", content: "Este es el post 1" },
        { id: 2, title: "Post 2", content: "Este es el post 2" },
        { id: 3, title: "Post 3", content: "Este es el post 3" },
      ];
      if (!posts) {
        reject("Posts not found");
      }
      resolve(posts);
    }, 1500);
  });
}

// // Teníamos
function displayUserPosts(userId) {
  fetchUserData(userId, function (userData) {
    console.log(`User: ${userData.name}`);
    fetchUserPosts(userData.id, function (posts) {
      console.log(`Posts for user ${userData.name}`);
      posts.forEach((post) => console.log(`- ${post.title}: ${post.content}`));
    });
  });
}

function displayUserPostsPromise(userId) {
  // recibir datos de usuario
  fetchUserDataPromise(userId)
    .then((user) => {
      console.log(`User: ${user.name}`);
      return fetchUserPostsPromise(user.id);
    })
    .then((posts) => {
      console.log(`Estos son los posts: ${posts} `);
      posts.forEach((post) => console.log(`- ${post.title}: ${post.content}`));
    })
    .catch((error) => {
      console.log(error);
    });
}

displayUserPostsPromise(123);
// basada en promesas

displayUserPosts(123);

// Funciones asincronas

async function displayUserPostsAsyncAwait(token) {
  try {
    console.log("Inicio de la funcion asíncrona");
    let resultadoUser = await fetchUserDataPromise(token);
    console.log(resultadoUser);

    let resultadoPosts = await fetchUserPostsPromise(resultadoUser.id);
    console.log(resultadoPosts);

    resultadoPosts.forEach((post) =>
      console.log(`- ${post.title}: ${post.content}`)
    );
  } catch (error) {
    console.log(error);
  }
}
displayUserPostsAsyncAwait("123");
// const displayUserPostsAsyncAwait = async (token) => {
//   try {
//     console.log("Inicio de la funcion asíncrona");
//     let resultadoUser = await fetchUserDataPromise(token);
//     console.log(resultadoUser);

//     let resultadoPosts = await fetchUserPostsPromise(resultadoUser.id);
//     console.log(resultadoPosts);

//     resultadoPosts.forEach((post) =>
//       console.log(`- ${post.title}: ${post.content}`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch();

async function obtenerCharacters() {
  try {
    const llamadaFetch = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    console.log(llamadaFetch);
    const characters = await llamadaFetch.json();
    console.log(characters);
  } catch (error) {
    console.log(error);
  }
}
obtenerCharacters();

// Queremos esperar a que varias llamadas asincronas se resuelvan para poder usar ambas respuestas a la vez
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 1 completed");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 2 completed");
  }, 5000);
});

Promise.all([promise1, promise2])
  .then(([resultadoPromesa1, resultadoPromesa2]) => {
    console.log(resultadoPromesa1);
    console.log(resultadoPromesa2);
  })
  .catch((error) => {
    console.log(error);
  });

// Llamar a API rickyMorty y loguear en consola todos los nombres de los personajes
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    // for (let character of data.results) {
    //   console.log(character.name);
    // }
    const { results: characters } = data;
    // console.log(characters);
    // characters.forEach((character) => {
    //   if (character.species === "Human") {
    //     console.log(character.name);
    //   }
    // });
    // console.log(characters);
    const personajesHumanos = characters.filter(
      (character) => character.species === "Human"
    );
    console.log(personajesHumanos);
  });
fetch("https://rickandmortyapi.com/api/character?species=human")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    const { results: characters } = data;
    console.log(characters);
    // for (let character of characters) {
    //   if (character.id === 3 || character.id === 4 || character.id === 100) {
    //     console.log(character);
    //   }
    // }
  });

//   characters cuyo id es 3,4,100

fetch("https://rickandmortyapi.com/api/character?page=2")
  .then((response) => response.json())
  .then((data) => {
    const { results: characters } = data;

    console.log(data);
  });

function fetchCharacters() {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      const characterList = document.getElementById("character-list");
      console.log(characterList);
      console.log(data.results);

      const nextButton = document.querySelector(".next");
      console.log(nextButton);

      nextButton.addEventListener("click", () => {
        console.log("Me cliqueaste");
        fetch("https://rickandmortyapi.com/api/character/?page=2")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            data.results.forEach((character) => {
              const listItem = document.createElement("li");
              listItem.textContent = character.name;
              if (character.species === "Human") {
                listItem.style.backgroundColor = "blue";
              }
              // console.log(listItem);
              characterList.appendChild(listItem);
            });
          });
      });

      data.results.forEach((character) => {
        const listItem = document.createElement("li");
        listItem.textContent = character.name;
        if (character.species === "Human") {
          listItem.style.backgroundColor = "blue";
        }
        // console.log(listItem);
        characterList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchCharacters();
