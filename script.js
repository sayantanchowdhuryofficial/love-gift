const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");
const textEl = document.getElementById("typeText");
const music = document.getElementById("music");

const message = `

Siddhika,

From Bengal to Nepal,
distance tried to test us…

But love like ours?
It doesn't break.

It only grows stronger.

You are my peace,
my madness,
my forever.

In every universe,
I will still find you.

– Sayantan ❤️
`;

let i = 0;

/* UNIVERSAL TAP FIX */
function startExperience() {
  startScreen.style.display = "none";
  mainContent.classList.remove("hidden");

  /* PLAY MUSIC (mobile safe) */
  music.play().catch(() => {});

  typeWriter();
}

/* BOTH CLICK + TOUCH */
document.body.addEventListener("click", startExperience, { once: true });
document.body.addEventListener("touchstart", startExperience, { once: true });

/* TYPEWRITER */
function typeWriter() {
  if (i < message.length) {
    textEl.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}

/* HEART ANIMATION (OPTIMIZED) */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 40; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 2,
    speed: Math.random() * 0.8 + 0.2
  });
}

function drawHeart(x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - s, x - s, y - s, x - s, y);
  ctx.bezierCurveTo(x - s, y + s, x, y + s * 1.5, x, y + s * 2);
  ctx.bezierCurveTo(x, y + s * 1.5, x + s, y + s, x + s, y);
  ctx.bezierCurveTo(x + s, y - s, x, y - s, x, y);
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(h => {
    h.y -= h.speed;
    if (h.y < 0) h.y = canvas.height;

    drawHeart(h.x, h.y, h.size);
  });

  requestAnimationFrame(animate);
}

animate();
