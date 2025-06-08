function playWish() {
  const balloonsContainer = document.getElementById('balloons');

  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    // Random horizontal position
    balloon.style.left = `${Math.random() * 95}%`;

    // Random pastel color using HSL
    const hue = Math.floor(Math.random() * 360);
    balloon.style.backgroundColor = `hsl(${hue}, 100%, 75%)`;

    // Random size
    const size = 40 + Math.random() * 20;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.5}px`;

    // Random animation delay
    balloon.style.animationDelay = `${Math.random() * 4}s`;

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
