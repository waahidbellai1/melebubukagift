function goToUnlock() {
    window.location.href = "unlock.html";
}

function checkDate() {
    const selectedDate = document.getElementById("dateInput").value;

    if (selectedDate === "2019-12-25") {
        launchConfetti();
        setTimeout(() => {
            window.location.href = "love.html";
        }, 1500);
    } else {
        document.getElementById("errorMsg").innerText =
            "Oops… that’s not the day my heart became yours 😉 Try again ❤️";
    }
}
function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "💖";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.fontSize = "20px";
        confetti.style.animation = "fall 2s linear forwards";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
    }
}


// Floating Hearts Generator
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 500);
// Typewriter Effect for Love Letter
const message = `
From the moment you came into my life,
everything became softer, warmer, brighter.

25/12/2019 —
The day destiny decided
we belong together.

You are my peace.
You are my chaos.
You are my favorite person in the whole world.

And I would choose you again,
in every lifetime. ❤️
`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

if (document.getElementById("typewriter")) {
    typeWriter();
}
function sheSaidYes() {

    // Screen Flash Effect
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "white";
    flash.style.opacity = "0.8";
    flash.style.zIndex = "999";
    flash.style.transition = "opacity 1s";
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "0";
        setTimeout(() => flash.remove(), 1000);
    }, 200);


    // Heart Explosion (Fixed Version)
for (let i = 0; i < 80; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 600;

    heart.animate([
        { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(1.5)`, opacity: 0 }
    ], {
        duration: 2000,
        easing: "ease-out"
    });

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
}

    // Fireworks Burst
    for (let i = 0; i < 40; i++) {
        const spark = document.createElement("div");
        spark.innerHTML = "✨";
        spark.style.position = "fixed";
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 100 + "vh";
        spark.style.fontSize = "20px";
        spark.style.animation = "sparkle 1.5s ease-out forwards";
        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1500);
    }

    // Big Overlay Message
    const overlay = document.createElement("div");
    overlay.className = "proposal-overlay";
    overlay.innerHTML = `
        <h1>FOREVER STARTS NOW 💍❤️</h1>
        <p>You just made me the happiest person alive.</p>
    `;
    document.body.appendChild(overlay);
}

// Rose Petals Falling
setInterval(() => {
    if (document.body.classList.contains("valentine-bg")) {
        const petal = document.createElement("div");
        petal.innerHTML = "🌹";
        petal.style.position = "fixed";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.top = "-20px";
        petal.style.fontSize = Math.random() * 15 + 20 + "px";
        petal.style.animation = "petalFall 6s linear forwards";
        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), 6000);
    }
}, 700);
// No Button Runs Away
const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("touchstart", moveNoButton);
}

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
/* =========================
   🌌 NIGHT MODE + PROPOSAL
========================= */

function sheSaidYes() {

    document.body.classList.add("night-mode");

    const overlay = document.createElement("div");
    overlay.className = "proposal-overlay";
    overlay.innerHTML = `
        <h1>FOREVER STARTS NOW 💍❤️</h1>
        <p>Tap anywhere to seal it with a kiss 💋</p>
    `;
    document.body.appendChild(overlay);

    startFireworks();

    overlay.addEventListener("click", () => {
        overlay.remove();
        startSlideshow();
    });
}

/* =========================
   🎆 FIREWORKS
========================= */

function startFireworks() {
    setInterval(() => {
        const spark = document.createElement("div");
        spark.innerHTML = "✨";
        spark.style.position = "fixed";
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 60 + "vh";
        spark.style.fontSize = "20px";
        spark.style.animation = "sparkle 1.5s ease-out forwards";
        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1500);
    }, 300);
}

/* =========================
   📸 SLIDESHOW
========================= */

function startSlideshow() {

    const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
    let index = 0;

    const slide = document.createElement("div");
    slide.className = "slideshow";
    document.body.appendChild(slide);

    function showNext() {
        if (index < photos.length) {
            slide.innerHTML = `<img src="${photos[index]}" class="slide-img">`;
            index++;
            setTimeout(showNext, 2500);
        } else {
            showFinalMessage();
        }
    }

    showNext();
}

/* =========================
   🎬 FINAL MESSAGE
========================= */

function showFinalMessage() {
    const final = document.createElement("div");
    final.className = "final-message";
    final.innerHTML = `
        <h1>Our Story Continues... ❤️</h1>
        <p>And this is just the beginning.</p>
    `;
    document.body.appendChild(final);
}
