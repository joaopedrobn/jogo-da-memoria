const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");
const restartButton = document.querySelector(".restart-button");

const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const endGameScreen = document.querySelector(".end-game-screen");
const endMessage = document.querySelector(".end-message");

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    setTimeout(() => {
      endMessage.innerHTML = `Parabéns, ${spanPlayer.innerHTML}! 🎉🥳 <br> Seu tempo: ${timer.innerHTML} segundos`;
      endGameScreen.style.display = "flex";
    }, 300);
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);

    grid.style.pointerEvents = "none";
    setTimeout(() => {
      grid.style.pointerEvents = "auto";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
};

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem("player");
  startTimer();
  loadGame();
};

restartButton.addEventListener("click", () => {
  location.reload();
});

const bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.05;
bgMusic.loop = true;
const toggleMusicBtn = document.getElementById("toggle-music");

if (localStorage.getItem("muted") === "true") {
  bgMusic.muted = true;
  toggleMusicBtn.textContent = "🔇";
} else {
  bgMusic.muted = false;
  toggleMusicBtn.textContent = "🎵";
}

toggleMusicBtn.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  if (bgMusic.muted) {
    toggleMusicBtn.textContent = "🔇";
    localStorage.setItem("muted", "true");
  } else {
    toggleMusicBtn.textContent = "🎵";
    localStorage.setItem("muted", "false");
  }
});
