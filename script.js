const door = document.getElementById("door");
const riddle = document.getElementById("riddle");
const error = document.getElementById("error");
const photoContainer = document.getElementById("photoContainer");
const photo = document.querySelector(".photo");

// Ouvre la porte
door.addEventListener("click", () => {
  door.classList.add("open");
});

// Valide l'énigme
document.getElementById("validate").addEventListener("click", () => {
  const val = document.getElementById("answer").value.trim().toLowerCase();
  const password = "incroyique";

  if (val === password) {
    // Retire l’énigme
    riddle.style.display = "none";

    // Affiche la photo
    //photoContainer.classList.remove("hidden");

    // Remplace photoContainer.classList.remove("hidden"); par :
    const video = document.getElementById("video");
    video.classList.remove("hidden");


    // Effet fade-in
    setTimeout(() => photo.classList.add("show"), 50);

  } else {
    error.classList.remove("hidden");
  }
});
