const btn = document.getElementById("loveBtn");
const textEl = document.getElementById("typeText");

const message = `
Siddhika,

From the streets of Bengal to the hills of Nepal,
our story was never supposed to be easy…

But still, I choose you.
In every life, in every world.

You are my peace,
my chaos,
my forever.

– Sayantan ❤️
`;

let i = 0;
let started = false;

/* TAP FIX (WORKS ON MOBILE) */
btn.addEventListener("click", startLove);
btn.addEventListener("touchstart", startLove);

function startLove() {
  if (started) return;
  started = true;
  btn.style.display = "none";
  typeWriter();
}

/* TYPEWRITER EFFECT */
function typeWriter() {
  if (i < message.length) {
    textEl.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

/* FLOATING HEARTS (LIGHTWEIGHT) */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 1 + 0.3
  });
}

function drawHeart(x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - s, x - s, y - s, x - s, y);
  ctx.bezierCurveTo(x - s, y + s, x, y + s * 1.5, x, y + s * 2);
  ctx.bezierCurveTo(x, y + s * 1.5, x + s, y + s, x + s, y);
  ctx.bezierCurveTo(x + s, y - s, x, y - s, x, y);
  ctx.fillStyle = "rgba(255,255,255,0.5)";
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
