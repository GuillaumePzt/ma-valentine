let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let imageDisplay = document.getElementById('image-display');
let question = document.getElementById('question');

let paddingValue = 15;
let fontSizeValue = 18;
let clickCount = 0;

const noTexts = [
    "Tu es sûre ?",
    "Vraiment sûre ?",
    "Pense encore une fois...",
    "S'il te plaît...",
    "Tu vas me briser le cœur 💔"
];

noButton.addEventListener('click', () => {
    // 1. Image "Pas contente"
    imageDisplay.src = "chatpascontent.jpg"; 

    // 2. Agrandissement REEL (modifie le layout)
    paddingValue += 10; 
    fontSizeValue += 5;
    yesButton.style.padding = `${paddingValue}px ${paddingValue * 2}px`;
    yesButton.style.fontSize = `${fontSizeValue}px`;

    // 3. Changement du texte
    if (clickCount < noTexts.length) {
        noButton.innerText = noTexts[clickCount];
        clickCount++;
    }
});

yesButton.addEventListener('click', () => {
    imageDisplay.src = "chatcontent.jpg";
    question.innerText = "OUIIII ! Je t'aime ! ❤️";
    document.querySelector('.buttons').style.display = 'none';
    confetti();
});

