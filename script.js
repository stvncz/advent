
// Ouvre la porte
door.addEventListener("click", () => {
  door.classList.add("open");
});

const captions = [
  "En avant pour l'aventure !", // 0
  "Bonjour Thaïlande !", // 1
  "Souvenirs d'une soirée endiablée", // 2
  "The banana resort et ses couchers de soleil", // 3
  "♥️", // 4
  "Miaaam", // 5
  "Une star à mes yeux", // 6
  "Plongééée", // 7
  "Bangkok et ses temples", // 8
  "Gros bécot", // 9
  "Mon dieu ma tête", // 10
  "ça valait le réveil", // 11
  "Ahahaha", // 12
  "Une vie de rooots", // 13
  "Que bellaaaaa", // 14
  "Encore 2 mois et demi avec toi ?", // 15
  "Laaaaaos, nous voilà", // 16
  "Vie de bohème", // 17
  "Passion juiiiice", // 18
  "Jolie photo", // 19
  "Y'a des trucs qui changent pas", // 20
  "Vite je veux mangeeeeer", // 21
  "En bonne compagnie", // 22
  "Barbapapaaaaa", // 23
  "Good morning Vietnaaaam", // 24
  "Gorgeous", // 25
  "Elle est trop bien la photo aha", // 26
  "Incognito", // 27
  "Trop belle", // 28
  "Chaudière", // 29
  "Office with a view", // 30
  "Bonjour à tous les baboss, on se fait une salutation au soleil?", // 31
  "Amoureux alcoolisés", // 32
  "Duuuune", // 33
  "Influenceuse", // 34
  "Tu veux une couille ?", // 35
  "No comment..", // 36
  "Assise comme la dame de pierre de Brélès", // 37
  "On y retouuuurne ?", // 38
  "Lookin for a target", // 39
];

const images = Array.from({ length: 44 }, (_, i) => `assets/photo${i + 1}.jpg`);


let index = 0;
const imgElement = document.getElementById("galleryImage");
const caption = document.getElementById("caption");

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateImage();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateImage();
});

function updateImage() {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[index];
    imgElement.style.opacity = 1;
    caption.textContent = captions[index];
  }, 200);
}


