window.addEventListener('click', (event) => {
  console.log(event.target);

const addShelfBtn = document.querySelector('#addGameshelf__btn');
const shelfName__input = document.querySelector('#newGameShelf__input')
const shelfContainer = document.querySelector('.gameshelfCollection__container');

// Create a gameshelf
async function createShelf(inputValue) {
  const data = { name: inputValue }
  const response = await fetch('/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json();
  console.log(json);
  
  const div = document.createElement('div');
  const title = document.createElement('h2')
  title.innerText = json.name;
  console.log(title)
  div.appendChild(title);
  div.classList.add('gameshelf__div')
  console.log(div)
  shelfContainer.appendChild(div)
  // SOMEHOW LIMIT SINGLE SPACES
}

addShelfBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  createShelf(shelfName__input.value)
})
})
