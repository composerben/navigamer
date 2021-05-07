const addReviewButton = document.querySelector(".review-button");
const reviewText = document.querySelector(".review-text");
const gameId = addReviewButton.getAttribute("data-id");
const reviewForm = document.querySelector(".review-form");

// const getReview = (text) => {
//   const reviewsContainer = document.querySelector(".reviews__container");

//   text.reviewsContainer.forEach((review) => {
//     const newReviewContainer = document.createElement("div");
//     newReviewContainer.className = "review-container";
//     const newReview = document.createElement("p");
//     newReview.appendChild(document.createTextNode(review));
//     newReviewContainer.appendChild(newReview);
//     reviews.appendChild(newReviewContainer);
//   });
// };

const submitReview = async (event) => {
  //   console.log(gameId);
  event.preventDefault();

  const formData = new FormData(reviewForm);
  const review = formData.get(reviewText);

  const res = await fetch(`/games/${gameId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ review }),
  });

  //   if (!res.ok) {
  //     throw res;
  //   }
  //   const data = await res.json();
  //   getReview(data);
  return;
};

addReviewButton.addEventListener("click", submitReview);
