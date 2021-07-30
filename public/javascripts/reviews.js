const addReviewButton = document.querySelector(".review-button");
const reviewText = document.querySelector(".review-text");
const reviewRating = document.querySelector(".rating-score");
const gameId = addReviewButton.getAttribute("data-id");
const userId = addReviewButton.getAttribute("data-name");
const reviewForm = document.querySelector(".review-form");
const reviewList = document.querySelector(".review-list");
const reviewWrap = document.querySelector(".review_wrapper");

// Div selectors
const reviewsContainer = document.querySelector(".reviews__container");
const addReviewContainer = document.querySelector(".review__add");
const ratingContainer = document.querySelector(".ratings__container");
const userReviewsContainer = document.querySelector(".user-reviews");

const postReview = (data) => {
  reviewText.value = "";
  reviewRating.value = "0";

  const newLink = document.createElement("a");
  const newLame = document.createElement("li");
  const newRating = document.createElement("li");
  const newReview = document.createElement("li");

  newLink.setAttribute("href", `/users/${userId}`);
  newLame.innerHTML = `${data.userLame}'s Review`;
  newLame.classList.add("new-review__username");
  newRating.innerHTML = data.rating + "/10";
  newRating.classList.add("new-review__rating");
  newReview.innerHTML = data.review;
  newReview.classList.add("new-review__review");

  reviewList.appendChild(newLink);
  newLink.appendChild(newLame);
  reviewList.appendChild(newRating);
  reviewList.appendChild(newReview);
};

const submitReview = async (event) => {
  event.preventDefault();

  const formData = new FormData(reviewForm);
  const review = formData.get("review-text");
  const rating = formData.get("rating-score");
  try {
    const res = await fetch(`/games/${gameId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameId, rating, review }),
    });
    if (!res.ok) {
      throw res;
    }

    const data = await res.json();
    postReview(data);

  } catch (e) {
    console.log(e)
    const errorJSON = await e.json();
    console.log(errorJSON)
    if (errorJSON) {
      document.querySelector(".review-error").innerHTML = `${errorJSON.msg}`;
    } else {
      console.error(e);
      alert("Please completely fill out your review before clicking submit :)");
    }
  }
  addReviewContainer.remove();
  ratingContainer.remove();

  const thanksDiv = document.createElement('div');
  thanksDiv.classList.add('thanksDiv')
  const thanksElement = document.createElement('h1');
  thanksElement.innerHTML = 'Thank you for your review!';
  thanksElement.classList.add('review__add');
  thanksDiv.appendChild(thanksElement);
  reviewsContainer.insertBefore(thanksDiv, userReviewsContainer);
};

addReviewButton.addEventListener("click", submitReview);


