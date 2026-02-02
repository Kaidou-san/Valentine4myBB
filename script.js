const arena = document.getElementById("arena");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("msg");



yesBtn.addEventListener("click", () => {
    msg.textContent = "My BB said YESSS LFGOO 💖💖💖";

    const r = yesBtn.getBoundingClientRect();
    const x = (r.left + r.width / 2) / window.innerWidth;
    const y = (r.top + r.height / 2) / window.innerHeight;

    confetti({
        particleCount: 200,
        spread: 90,
        startVelocity: 50,
        origin: { x, y }
    });

    setTimeout(() => {
        confetti({
            particleCount: 120,
            spread: 120,
            startVelocity: 35,
            origin: { x, y: y - 0.05 }
        });
    }, 200);
});

function moveNoRandom() {
    const maxX = arena.clientWidth - noBtn.offsetWidth;
    const maxY = arena.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function cartoonExplosion(x = 0.5, y = 0.6) {
    // SCREEN SHAKE
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 400);

    // SHOCKWAVE RING
    const wave = document.createElement("div");
    wave.className = "shockwave";
    document.body.appendChild(wave);
    setTimeout(() => wave.remove(), 600);

    // BIG CHAOS CONFETTI BLAST
    confetti({
        particleCount: 420,
        spread: 160,
        startVelocity: 70,
        scalar: 1.2,
        origin: { x, y }
    });

    // EXTRA SIDE BLASTS
    confetti({
        particleCount: 160,
        spread: 120,
        startVelocity: 60,
        origin: { x: x - 0.2, y }
    });

    confetti({
        particleCount: 160,
        spread: 120,
        startVelocity: 60,
        origin: { x: x + 0.2, y }
    });
}

noBtn.addEventListener("click", () => {
    const r = noBtn.getBoundingClientRect();
    const x = (r.left + r.width / 2) / window.innerWidth;
    const y = (r.top + r.height / 2) / window.innerHeight;

    cartoonExplosion(x, y);

    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";

    setTimeout(() => {
        alert("you THOUGHT, now try again😤💖");
    }, 300);
});

noBtn.addEventListener("mouseenter", moveNoRandom);
noBtn.addEventListener("touchstart", (e) => {
    moveNoRandom();
    e.preventDefault();
}, { passive: false });