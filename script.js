const music = document.getElementById("music");
let playing = false;
let quizPlayed = false;

// Opening surprise
function startSurprise() {
    document.getElementById("letter")
        .scrollIntoView({ behavior: "smooth" });

    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 150);
    }
}

// Love letter
function openLetter() {
    const letter = document.getElementById("loveLetter");

    letter.style.display =
        letter.style.display === "block" ? "none" : "block";
}

// Background music
function toggleMusic() {
    if (playing) {
        music.pause();
        playing = false;
        document.querySelector(".musicBtn").innerText =
            "🎵 Play Music";
    } else {
        music.play().then(() => {
            playing = true;
            document.querySelector(".musicBtn").innerText =
                "⏸️ Pause Music";
        }).catch(() => {
            alert("Please add music.mp3 to your website folder.");
        });
    }
}

// Birthday candles
function blowCandles() {
    document.querySelector(".cake").innerText = "🎂✨";
    document.getElementById("wishMessage").innerText =
        "Your wish is on its way! May all your dreams come true! ❤️";

    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Photo gallery
function viewPhoto(photo) {
    document.getElementById("largePhoto").src = photo.src;
    document.getElementById("photoViewer").style.display = "flex";
}

function closePhoto() {
    document.getElementById("photoViewer").style.display = "none";
}

// Love quiz
function answerQuiz(answer) {
    if (quizPlayed) return;

    quizPlayed = true;

    const result = document.getElementById("quizResult");

    if (answer === 2) {
        result.innerText =
            "Correct! Everything about you is special to me! ❤️";
    } else {
        result.innerText =
            "All your little things are special to me! Try again in my heart! 💗";
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 150);
    }
}

// Secret message
function finalSurprise() {
    document.getElementById("secretMessage").style.display = "block";

    document.getElementById("secretMessage")
        .scrollIntoView({ behavior: "smooth" });

    for (let i = 0; i < 35; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerText = ["❤️", "💕", "💗", "🌹", "💖"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 1000);