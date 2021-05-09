const addShelfBtn = document.querySelector('#addGameshelf__btn');
const shelfName__input = document.querySelector('#newGameShelf__input')
const shelfContainer = document.querySelector('.gameshelfCollection__container');
const divUserId = document.querySelector('#gameshelf__container')
const gamecardDisplayDiv = document.querySelector('#gameshelfGames__container')
let selectShelf = document.querySelectorAll('.gameshelf__div');
const selecth2 = document.querySelector('.gameshelf__h2')
// const userId = addReviewButton.getAttribute("data-id");

// CACHE DOM FOR GAMECARD
const outsideCard = document.querySelector('.body__outsideGameCard');
const gamecardBody = document.querySelector('.body__gameCard');
const gamecardImage = document.querySelector('.gameCard__image');
const gamecardText = document.querySelector('.gameCard__text');

const listeners = [selectShelf, selecth2]



// SELECT A GAMESHELF
function addShelfListeners() {
  selectShelf = document.querySelectorAll('.gameshelf__div');
  selectShelf.forEach(shelf => {
    shelf.addEventListener('click', async (event) => {
      const shelfId = event.target.getAttribute('data-id')
      const userId = divUserId.getAttribute('data-id');
      console.log(event.target);

      const getGames = await fetch(`/users/${userId}/gameshelves/${shelfId}`);
      const res = await getGames.json()

      // if (res.gamesArr.length < 1) {
        gamecardDisplayDiv.innerHTML = '';
      // }

      res.gamesArr.forEach(game => {
        const div = document.createElement('div');
        div.classList.add('body__outsideGameCard');
        const anchor = document.createElement('a');
        anchor.href = `/games/${game.id}`
        const bodyDiv = document.createElement('div');
        bodyDiv.classList.add('body__gameCard');
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('gameCard__image')
        const image = document.createElement('img');
        image.src = game.imgUrl
        const textDiv = document.createElement('div');
        textDiv.classList.add('gameCard__text')
        const text = document.createElement('h2');
        text.innerHTML = game.gameName

        // gamecardDisplayDiv.innerHTML = '';
        div.appendChild(anchor);
        anchor.appendChild(bodyDiv);
        bodyDiv.appendChild(imageDiv);
        imageDiv.appendChild(image);
        textDiv.appendChild(text);
        bodyDiv.appendChild(textDiv);

        gamecardDisplayDiv.appendChild(div)
      })
    });
  });
}

// Create a gameshelf
const createShelf = async (inputValue) => {
  const res = await fetch('/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: inputValue }),
  })

  const data = await res.json();


  const div = document.createElement('div');
  const title = document.createElement('h2');
  title.innerText = data.name;
  div.appendChild(title);
  div.classList.add('gameshelf__div')
  div.setAttribute('data-id', data.gameshelfId)
  shelfContainer.appendChild(div)
  addShelfListeners();
}

addShelfListeners();

// BUTTON TO ADD NEW SHELF
addShelfBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const data = createShelf(shelfName__input.value)
})


// PULL INITIAL DATABASE STATE
const fillShelf = async (inputValue) => {
  const res = await fetch('/users/')
}

fillShelf();
