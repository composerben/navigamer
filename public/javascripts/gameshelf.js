const addShelfBtn = document.querySelector("#addGameshelf__btn");
const shelfName__input = document.querySelector("#newGameShelf__input");
const shelfContainer = document.querySelector(
  ".gameshelfCollection__container"
);
const divUserId = document.querySelector("#gameshelf__container");
const gamecardDisplayDiv = document.querySelector("#gameshelfGames__container");
let selectShelf = document.querySelectorAll(".gameshelf__div");
const selecth2 = document.querySelector(".gameshelf__h2");
const removeShelfBtn = document.querySelector('#removeGameshelf__btn');

let selectedShelf;

// CACHE DOM FOR GAMECARD
const outsideCard = document.querySelector(".body__outsideGameCard");
const gamecardBody = document.querySelector(".body__gameCard");
const gamecardImage = document.querySelector(".gameCard__image");
const gamecardText = document.querySelector(".gameCard__text");

const listeners = [selectShelf, selecth2];

// SELECT A GAMESHELF
function addShelfListeners() {
  selectShelf = document.querySelectorAll(".gameshelf__div");
  selectShelf.forEach((shelf) => {
    shelf.addEventListener("click", async (event) => {
      const shelfId = event.target.getAttribute("data-id");
      const userId = divUserId.getAttribute("data-id");

      selectedShelf = shelfId;

      const getGames = await fetch(`/users/${userId}/gameshelves/${shelfId}`);
      const res = await getGames.json();

      gamecardDisplayDiv.innerHTML = "";

      res.gamesArr.forEach((game) => {
        const div = document.createElement("div");
        div.classList.add("body__outsideGameCard");
        const anchor = document.createElement("a");
        anchor.href = `/games/${game.id}`;
        const bodyDiv = document.createElement("div");
        bodyDiv.classList.add("body__gameCard");
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("gameCard__image");
        const image = document.createElement("img");
        image.src = game.imgUrl;
        const textDiv = document.createElement("div");
        textDiv.classList.add("gameCard__text");
        const text = document.createElement("h2");
        text.innerHTML = game.gameName;

        div.appendChild(anchor);
        anchor.appendChild(bodyDiv);
        bodyDiv.appendChild(imageDiv);
        imageDiv.appendChild(image);
        textDiv.appendChild(text);
        bodyDiv.appendChild(textDiv);

        gamecardDisplayDiv.appendChild(div);
      });
    });
  });
}

// Create a gameshelf
const createShelf = async (inputValue) => {
  const res = await fetch("/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: inputValue }),
  });

  const data = await res.json();

  const div = document.createElement("div");
  // const title = document.createElement('h2');
  div.innerHTML = data.name;
  div.classList.add("gameshelf__div");
  div.setAttribute("data-id", data.gameshelfId);
  shelfContainer.appendChild(div);
  addShelfListeners();
  shelfName__input.value = "";
};

addShelfListeners();

// BUTTON TO ADD NEW SHELF
addShelfBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const reg = /^\s+|\s+$/g;
  const newStr = shelfName__input.value.replace(reg, "");
  if (newStr.length === 0) {
    shelfName__input.value = "";
    return;
  } else {
    const data = createShelf(newStr);
  }
});

//REMOVE GAMESHELF
removeShelfBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  gamecardDisplayDiv.innerHTML = '<h1>Gameshelf Deleted!</h1>';
  selectShelf.forEach(shelf => {
    console.dir(shelf.dataset.id)
    if (shelf.dataset.id === selectedShelf) {
      shelf.remove();
    }
  })
  // console.dir(selectShelf);

  if (selectedShelf !== undefined) {
    const res = await fetch("/users/deleteGameshelf/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedShelf }),
    });
  }
});
