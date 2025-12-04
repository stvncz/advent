const door = document.getElementById("door");
const riddle = document.getElementById("riddle");
const error = document.getElementById("error");
const video = document.getElementById("video");
const confettis = document.getElementById("confettis");
//const photo = document.querySelector(".photo");

// Ouvre la porte
door.addEventListener("click", () => {
  door.classList.add("open");
});

function blindtest() {
  riddle.style.display = "none";
  video.classList.remove("hidden");
}

document.getElementById("validate").addEventListener("click", () => {
  const val = document.getElementById("answer").value.trim().toLowerCase();

  if (val === 'Décathlon' || val === 'Decathlon' || val === 'décathlon' || val === 'decathlon') {
    launchConfetti();
  }
});



function launchConfetti() {
  const confettiContainer = document.getElementById("confettis");

  for (let i = 0; i < 80; i++) {

    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");

    // Position de départ aléatoire
    confetti.style.left = Math.random() * 100 + "%";

    // Couleur aléatoire
    const colors = ["#e74c3c", "#f1c40f", "#2ecc71", "#3498db", "#9b59b6"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Durée de la chute
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    confettiContainer.appendChild(confetti);

    // Suppression après animation
    setTimeout(() => confetti.remove(), 4000);
  }
}


