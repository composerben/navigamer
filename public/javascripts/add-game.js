const display = document.querySelector('.platformDisplay')
const platforms = document.querySelector('.olderConsoles--hidden')

display.addEventListener('click', (event) => {
  platforms.classList.remove('olderConsoles--hidden')
  platforms.classList.add('olderConsoles--shown')
});
