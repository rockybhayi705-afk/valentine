const questionBox = document.getElementById("questionBox");
const answers = document.getElementById("answers");
const finalButtons = document.getElementById("finalButtons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const hearts = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");

const questions = [
  "Who smiles more when we're together? 😊",
  "Who misses the other more? 💕",
  "Who should plan our next date? 🌙",
  "Who is luckier to have the other? 😌"
];

let qIndex = 0;
questionBox.innerHTML = questions[qIndex];

// Answer click → next question
document.querySelectorAll(".answerBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    launchConfetti();
    qIndex++;

    if (qIndex < questions.length) {
      questionBox.innerHTML = questions[qIndex];
    } else {
      // FINAL QUESTION
      answers.style.display = "none";
      questionBox.innerHTML = "Will you be my Valentine? 💍";
      finalButtons.classList.remove("hidden");
    }
  });
});

// YES → slideshow
yesBtn.addEventListener("click", () => {
  music.play();
  message.innerHTML = "Forever starts with us 💖";
  launchConfetti();
  startSlideshow();
  yesBtn.disabled = true;
});

// NO button runs away 😈
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 300);

// Confetti
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

// Slideshow
const slides = document.querySelectorAll(".slide");
const slideshow = document.getElementById("slideshow");
let current = 0;

function startSlideshow() {
  slideshow.style.display = "flex";   // show slideshow
  let index = 0;

  slides.forEach(s => s.classList.remove("active"));
  slides[0].classList.add("active");

  const slider = setInterval(() => {
    slides[index].classList.remove("active");
    index++;

    // ✅ END OF SLIDESHOW
    if (index >= slides.length) {
      clearInterval(slider);

      // hide slideshow completely
      slideshow.style.display = "none";

      // start typing after slideshow
      setTimeout(typeFinalMessage, 500);
      return;
    }

    slides[index].classList.add("active");
  }, 3000);
}
const finalMessage = 
  "You didn’t just say YES… 💖\n" +
  "You chose us.\n\n" +
  "Happy Valentine’s Day 🌹✨";

let textIndex = 0;

function typeFinalMessage() {
  const textEl = document.getElementById("finalText");

  const message =
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

  let i = 0;
  textEl.innerHTML = "";

  function type() {
    if (i < message.length) {
      textEl.innerHTML += message.charAt(i);
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
          });
      i++;
      setTimeout(type, 45); // ✍️ smooth romantic speed
    }
  }
  else {
  document.getElementById("nextPageBtn").style.display = "block";
}

  document.getElementById("nextPageBtn").addEventListener("click", () => {
  window.location.href = "valentine.html";
});

  type();
}

