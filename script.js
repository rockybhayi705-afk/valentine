const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const heartsContainer = document.querySelector(".hearts");

// YES button
yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yayyy! 💖 You just made my world complete 🌙✨";
  yesBtn.disabled = true;
  launchConfetti();
});

// NO button never clicks 😈
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 220 - 110;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 300);

// 🎉 Confetti explosion
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff2f92", "#ff77aa", "#ffd6e8", "#ffffff"][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
