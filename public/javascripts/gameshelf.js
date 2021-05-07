const addShelfBtn = document.querySelector('#addGameshelf__btn');
const shelfName__input = document.querySelector('#newGameShelf__input').value

// Create a gameshelf
async function createShelf(inputValue) {
  // const data = { name: inputValue }
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  const data = await response.json();
  // console.log(data)
  return data;
}

addShelfBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  // console.log(createShelf());
})
