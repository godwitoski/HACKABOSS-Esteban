"use-strict";

// Lista de emojis ya barajada
const listEmojis = [
  "🤣",
  "🤣",
  "😡",
  "😡",
  "🤢",
  "🤢",
  "💩",
  "💩",
  "🤪",
  "🤪",
  "😍",
  "😍",
  "😱",
  "😱",
  "🤩",
  "🤩",
];

listEmojis.sort(() => (Math.random() > 0.5 ? 1 : -1));
console.log(listEmojis);

//Capturamos el section que contiene el juego completo
const gameApp = document.querySelector(".gameApp");
let templateHTML = "";

listEmojis.forEach((emoji) => {
  templateHTML += `
 <div class="card">
      <div class="content front">❔</div>
      <div class="content back">${emoji}</div>
    </div>
 `;
});

gameApp.innerHTML = templateHTML;

// const cards = document.querySelectorAll(".card");

const reveal = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");

  setTimeout(() => {
    currentCard.classList.remove("flipped");
  }, 1000);
};

for (const card of gameApp) {
  card.addEventListener("click", reveal);
}
