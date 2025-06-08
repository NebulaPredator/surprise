function playWish() {
  const balloonsContainer = document.getElementById('balloons');

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.animationDelay = `${Math.random() * 3}s`;
    balloonsContainer.appendChild(balloon);
  }
}

// Autoplay fallback
window.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });
