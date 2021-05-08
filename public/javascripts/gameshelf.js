const addShelfBtn = document.querySelector('#addGameshelf__btn');
const shelfName__input = document.querySelector('#newGameShelf__input')
const shelfContainer = document.querySelector('.gameshelfCollection__container');
let selectShelf = document.querySelectorAll('.gameshelf__div');
const divUserId = document.querySelector('#gameshelf__container')
// const userId = addReviewButton.getAttribute("data-id");

// SELECT A GAMESHELF
function addShelfListeners() {
  selectShelf = document.querySelectorAll('.gameshelf__div');
  selectShelf.forEach(shelf => {
    shelf.addEventListener('click', async (event) => {
      const shelfId = event.target.getAttribute('data-id')
      const userId = divUserId.getAttribute('data-id');

      const getGames = await fetch(`/users/${userId}/gameshelves/${shelfId}`);
      const res = await getGames.json()
      console.log(res);
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
