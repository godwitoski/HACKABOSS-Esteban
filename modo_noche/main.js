"use strict";
//Para cambiar modo
let toggle = document.getElementById("toggle");
let label_toggle = document.querySelector(".changemode label");
toggle.addEventListener("change", (event) => {
  let checked = event.target.checked;
  document.body.classList.toggle("dark");
  if (checked === true) {
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; //☀
    label_toggle.style.color = "yellow";
    // label_toggle.style.fontSize = "2rem";
  } else {
    label_toggle.innerHTML = '<i class="fa-solid fa-moon "></i> '; //🌑
    label_toggle.style.color = "var(--BackgroundColorDark)";
    // label_toggle.style.fontSize = "1.5rem";
  }
});
