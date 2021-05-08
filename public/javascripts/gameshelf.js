const addShelfBtn = document.querySelector('#addGameshelf__btn');
const shelfName__input = document.querySelector('#newGameShelf__input')
const shelfContainer = document.querySelector('.gameshelfCollection__container');

// const userId = addReviewButton.getAttribute("data-id");

// PULL INITIAL DATABASE STATE
const fillShelf = async (inputValue) => {
  const res = await fetch('/users/')
 
}

fillShelf()
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
  console.log(data);

  const div = document.createElement('div');
  const title = document.createElement('h2')
  title.innerText = data.name;
  div.appendChild(title);
  div.classList.add('gameshelf__div')
  // console.log(shelfContainer)
  shelfContainer.appendChild(div)
}

addShelfBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const data = createShelf(shelfName__input.value)
})
