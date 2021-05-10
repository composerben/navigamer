const gamecard = document.querySelectorAll('.gameCard__image');
const gametext = document.querySelectorAll('.gameCard__text');

gamecard.forEach(card => {
  card.addEventListener('click', (event) => {
    console.log(card);
    card.classList.remove('.gameCard__image')
    card.classList.add('.gameCard__image--selected')
  })
})
