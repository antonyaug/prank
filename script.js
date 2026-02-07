const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

function moveButton() {
  const maxX = card.clientWidth - noBtn.clientWidth;
  const maxY = card.clientHeight - noBtn.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});
