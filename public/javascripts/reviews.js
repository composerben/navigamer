const addReviewButton = document.querySelector(".review-button");
const reviewText = document.querySelector(".review-text");
const reviewRating = document.querySelector(".rating-score");
const gameId = addReviewButton.getAttribute("data-id");
const userId = addReviewButton.getAttribute("data-name")
const reviewForm = document.querySelector(".review-form");
const reviewsContainer = document.querySelector(".user-reviews");
const reviewList = document.querySelector(".review-list");

const postReview = (data) => {
  // const newReviewContainer = document.createElement("div");
  // newReviewContainer.className = "review-container";
  reviewText.value = "";
  reviewRating.value = "0";

  const newLink = document.createElement("a");
  const newLame = document.createElement("li");
  const newRating = document.createElement("li");
  const newReview = document.createElement("li");

  newLink.setAttribute('href', `/users/${userId}`)
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
  // newReviewContainer.appendChild(newReview);
  // reviews.appendChild(newReviewContainer);
};

const submitReview = async (event) => {
  //   console.log(gameId);
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
    const errorJSON = await e.json();
    if (errorJSON) {
      document.querySelector(".review-error").innerHTML = `${errorJSON.msg}`;
    } else {
      console.error(e);
      alert("Please completely fill out your review before clicking submit :)");
    }
  }
};

addReviewButton.addEventListener("click", submitReview);
