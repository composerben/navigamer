// const gamecard = document.querySelectorAll('.gameCard__image');
// const gametext = document.querySelectorAll('.gameCard__text');
// const submitButton = document.querySelector('.submit__button');
// gamecard.forEach(card => {
//   card.addEventListener('click', (event) => {
//     console.log(card);
//     card.classList.remove('.gameCard__image')
//     card.classList.add('.gameCard__image--selected')
//   })
// })

// let gamesCheckedArr = [];
// const games = document.querySelectorAll('.gameName');
// games.forEach(game => {
//   if (game.checked === true) {
//     gamesCheckedArr.push(game);
//   }
// })
// console.log(gamesCheckedArr);

// const shelfForm = document.querySelector('.game-to-gameshelf-form')
// const formData = new FormData(shelfForm);

// submitButton.addEventListener('click', (event) => {
//   const shelf = formData.get("shelfName");
//   const games = formData.get("gameName");
  
//   console.log(shelf)
//   console.log(games)
  // try {
  //   const res = await fetch(`/users/${sessionUser.userId}/add-games-to-gameshelf`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ }),
  //   });
  //   if (!res.ok) {
  //     throw res;
  //   }
  //   const data = await res.json();
  //   // postReview(data);
  // } catch (e) {
  //   const errorJSON = await e.json();
  //   if (errorJSON) {
  //     // document.querySelector(".review-error").innerHTML = `${errorJSON.msg}`;
  //   } else {
  //     console.error(e);
  //     alert("Please select a game!");
  //   }
  // } 
// })
