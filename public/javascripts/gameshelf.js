const addShelfBtn = document.querySelector('#addGameshelf__btn');
const shelfName__input = document.querySelector('#newGameShelf__input')

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
  // console.log(response)
  const json = await response.json();
  console.log(json)
  return json;
}

addShelfBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  createShelf(shelfName__input.value)
})
