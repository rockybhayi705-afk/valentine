document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("answers").style.display = "flex";
  document.getElementById("finalButtons").classList.add("hidden");
  document.getElementById("nextPageBtn").style.display = "none";
});

const questionBox = document.getElementById("questionBox");
const answers = document.getElementById("answers");
const finalButtons = document.getElementById("finalButtons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageBox = document.getElementById("message");
const hearts = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");
const slideshow = document.getElementById("slideshow");
const slides = document.querySelectorAll(".slide");
const finalText = document.getElementById("finalText");
const nextBtn = document.getElementById("nextPageBtn");

const questions = [
  "Who smiles more when we're together? 😊",
  "Who misses the other more? 💕",
  "Who should plan our next date? 🌙",
  "Who is luckier to have the other? 😌"
];

let qIndex = 0;
questionBox.innerHTML = questions[qIndex];


// 👉 ANSWER BUTTONS
document.querySelectorAll(".answerBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    launchConfetti();
    qIndex++;

    if (qIndex < questions.length) {
      questionBox.innerHTML = questions[qIndex];
    } else {
      answers.style.display = "none";
      questionBox.innerHTML = "Will you be my Valentine? 💍";
      finalButtons.classList.remove("hidden");
    }
  });
});


// 👉 YES BUTTON
yesBtn.addEventListener("click", () => {
  music.play();
  messageBox.innerHTML = "Forever starts with us 💖";
  launchConfetti();
  startSlideshow();
  yesBtn.disabled = true;
});


// 👉 NO BUTTON ESCAPE
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}


// ❤️ FLOATING HEARTS (NON-BLOCKING)
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 300);


// 🎉 CONFETTI
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor =
      ["#ff2f92", "#ff77aa", "#ffd6e8", "#fff"][Math.floor(Math.random() * 4)];
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}


// 📸 SLIDESHOW
function startSlideshow() {
  slideshow.style.display = "flex";
  let index = 0;

  slides.forEach(s => s.classList.remove("active"));
  slides[0].classList.add("active");

  const slider = setInterval(() => {
    slides[index].classList.remove("active");
    index++;

    if (index >= slides.length) {
      clearInterval(slider);
      slideshow.style.display = "none";
      setTimeout(typeFinalMessage, 500);
      return;
    }

    slides[index].classList.add("active");
  }, 3000);
}


// ✍️ TYPEWRITER MESSAGE
function typeFinalMessage() {
  const text =
    "Hey Kunju ❤️\n\n" +
    "I’ve been thinking about you a lot, and honestly, you have this effortless way of staying on my mind. " +
    "It’s in the little things—your smile, the way you talk, the way you make me feel understood without even trying. " +
    "You don’t just brighten my day, you make it feel complete.\n\n" +

    "There’s something really special about you. You make ordinary moments feel exciting and quiet moments feel comfortable. " +
    "Being with you feels easy, like I can be myself without pretending, and that means more to me than you know. " +
    "And yes… I still catch myself smiling for no reason when I think about you 😏\n\n" +

    "I love how you care, how you laugh, how you notice small details. I love how you somehow make my mood better just by being there. " +
    "You’re beautiful in ways that go far beyond looks—though I won’t lie, you look amazing too 😉\n\n" +

    "I’m grateful for you, for us, and for every moment we share—whether we’re talking, laughing, or just existing together. " +
    "You make my heart feel full, calm, and a little excited all at once.\n\n" +

    "Just remember this: you are wanted, you are appreciated, and you are very loved. " +
    "And if you ever forget that, I’ll happily remind you again and again 💫\n\n" +

    "Always yours ❤️";

  finalText.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      finalText.innerHTML += text.charAt(i);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      i++;
      setTimeout(type, 45);
    } else {
      nextBtn.style.display = "block";
    }
  }

  type();
}


// 👉 NEXT PAGE BUTTON
nextBtn.addEventListener("click", () => {
  window.location.href = "valentine.html";
});
