// Buttons
const editButton = document.getElementById('edit-button');
const deleteReviewBtn = document.querySelector(".delete-button");

// Container selectors
const reviewsContainer = document.querySelector(".reviews__container");
const addReviewContainer = document.querySelector(".review__add");
const ratingContainer = document.querySelector(".ratings__container");
const userReviewsContainer = document.querySelector(".user-reviews");
const reviewForm = document.querySelector(".review-form");

const gameId = editButton.getAttribute("data-id");
const userId = editButton.getAttribute("data-name");

// Delete Review
deleteReviewBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const reviewId = deleteReviewBtn.getAttribute("data-reviewId");
  const reviewSelector = document.getElementById(`${reviewId}`);

  addReviewContainer.remove();
  ratingContainer.remove();
  reviewSelector.remove();

  const thanksDiv = document.createElement('div');
  thanksDiv.classList.add('thanksDiv')
  const thanksElement = document.createElement('h1');
  thanksElement.innerHTML = 'Comment Deleted';
  thanksElement.classList.add('review__add');
  thanksDiv.appendChild(thanksElement);
  reviewsContainer.insertBefore(thanksDiv, userReviewsContainer);

  const deleteFetch = await fetch(`/games/${gameId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reviewId }),
  });
});


// Edit Review
editButton.addEventListener('click', async (e) => {
  e.preventDefault();

  const reviewId = deleteReviewBtn.getAttribute("data-reviewId");

  const formData = new FormData(reviewForm);
  const review = formData.get("review-text");
  const rating = formData.get("rating-score");

  const editFetch = await fetch(`/games/${gameId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, rating, review, reviewId }),
  });
  const data = await editFetch.json();
  console.log(data);

  const reviewDiv = document.getElementById(reviewId);
  console.log(reviewDiv);
});
