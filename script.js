const lockScreen = document.getElementById("lockScreen");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("music");

const textEl = document.getElementById("typeText");
const quotesEl = document.getElementById("quotes");
const scoreEl = document.getElementById("score");

let score = 0;

/* PASSWORD */
function checkPassword() {
  const pass = document.getElementById("password").value.toLowerCase();
  if (pass === "siddhika") {
    lockScreen.style.display = "none";
    intro.classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong 😤";
  }
}

/* INTRO TAP */
intro.addEventListener("click", startExperience, { once: true });
intro.addEventListener("touchstart", startExperience, { once: true });

function startExperience() {
  intro.style.display = "none";
  main.classList.remove("hidden");
  music.play().catch(()=>{});
  typeWriter();
  rotateQuotes();
  startGame();
}

/* TYPEWRITER */
const message = `

Siddhika,

You crossed borders,
but entered my heart effortlessly.

You are my chaos,
my calm,
my forever.

– Sayantan ❤️
`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    textEl.innerHTML += message[i];
    i++;
    setTimeout(typeWriter, 35);
  }
}

/* QUOTES */
const quotes = [
  "I love you more than biryani 😤",
  "You’re my WiFi… I feel lost without you 📶",
  "Distance means nothing when you mean everything 💖",
  "Timi mero sabai ho ❤️ (You are my everything)"
];

function rotateQuotes() {
  let i = 0;
  setInterval(() => {
    quotesEl.innerText = quotes[i % quotes.length];
    i++;
  }, 3000);
}

/* MINI GAME */
function startGame() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "0px";
    heart.style.fontSize = "24px";

    document.body.appendChild(heart);

    let fall = setInterval(() => {
      heart.style.top = (heart.offsetTop + 3) + "px";

      if (heart.offsetTop > window.innerHeight) {
        heart.remove();
        clearInterval(fall);
      }
    }, 20);

    heart.onclick = () => {
      score++;
      scoreEl.innerText = score;
      heart.remove();
      clearInterval(fall);
    };

  }, 800);
}

/* BACKGROUND HEARTS */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    s: Math.random()*3
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach(h=>{
    ctx.fillText("💗", h.x, h.y);
    h.y -= 0.5;
    if(h.y<0) h.y = canvas.height;
  });
  requestAnimationFrame(draw);
}

draw();
