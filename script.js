let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let imageDisplay = document.getElementById('image-display');
let question = document.getElementById('question');

let scale = 1;
let clickCount = 0;

// Liste de messages drôles pour le bouton "Non"
const noTexts = [
    "Tu es sûre ?",
    "Vraiment sûre ?",
    "Pense encore une fois...",
    "S'il te plaît...",
    "Tu vas me briser le cœur 💔"
];

noButton.addEventListener('click', () => {
    // 1. On change l'image pour une pas contente
    imageDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/OPU6wUKARA8AU/giphy.gif"; 

    // 2. On agrandit le bouton OUI
    scale += 0.5;
    yesButton.style.transform = `scale(${scale})`;

    // 3. On change le texte du bouton NON pour être persuasif
    if (clickCount < noTexts.length) {
        noButton.innerText = noTexts[clickCount];
        clickCount++;
    }
});

yesButton.addEventListener('click', () => {
    // 1. Changement d'image finale
    imageDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0bmZ0JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/l41lH4ADRtAYnGsLe/giphy.gif";
    
    // 2. On cache les boutons et on change le titre
    question.innerText = "OUIIII ! Je t'aime ! ❤️";
    document.querySelector('.buttons').style.display = 'none';

    // 3. Explosion de confettis
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});