const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const particles = document.getElementById("particles");
const cakeSection = document.getElementById("cakeSection");
const flame = document.getElementById("flame");
const cakeInstruction = document.getElementById("cakeInstruction");

cakeSection.addEventListener("click", () => {
  flame.classList.add("extinguished");
  cakeInstruction.textContent = "✨ Candle blown out! Your wish is locked in! ✨";
  cakeInstruction.style.color = "#4ade80";
  confettiOverload();
});

function makeParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  p.textContent = ["🎈", "✨", "🎉", "👑", "🎂", "⭐", "🔥", "🚀"][Math.floor(Math.random() * 8)];
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--drift", (Math.random() * 260 - 130) + "px");
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  p.style.fontSize = (14 + Math.random() * 16) + "px";
  particles.appendChild(p);
  setTimeout(() => p.remove(), 11000);
}

setInterval(makeParticle, 360);

function confettiOverload() {
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("div");
    c.textContent = ["🎉", "✨", "🍰", "🎁", "🎈", "👑", "🔥", "⚡"][Math.floor(Math.random() * 8)];
    c.style.position = "fixed";
    c.style.left = "50vw";
    c.style.top = "45vh";
    c.style.zIndex = "30";
    c.style.pointerEvents = "none";
    c.style.fontSize = (14 + Math.random() * 20) + "px";
    document.body.appendChild(c);

    const x = (Math.random() * 2 - 1) * innerWidth;
    const y = (Math.random() * 2 - 1) * innerHeight;

    c.animate([
      { transform: "translate(-50%,-50%) scale(.2)", opacity: 1 },
      { transform: `translate(${x}px,${y}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random() * 1000,
      easing: "cubic-bezier(.2,.8,.3,1)"
    }).onfinish = () => c.remove();
  }
}

openBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.scrollIntoView({ behavior: "smooth", block: "center" });
  music.play().then(() => { musicBtn.classList.add("playing"); }).catch(() => {});
  confettiOverload();
});

document.getElementById("celebrate").addEventListener("click", () => {
  confettiOverload();
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.classList.add("playing");
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});
