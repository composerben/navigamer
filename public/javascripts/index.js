window.addEventListener("load", (event) => {});

const getReview = (text) => {
  const reviewsContainer = document.querySelector(".reviews__container");

  text.reviewsContainer.forEach((review) => {
    const newReviewContainer = document.createElement("div");
    newReviewContainer.className = "review-container";
    const newReview = document.createElement("p");
    newReview.appendChild(document.createTextNode(review));
    newReviewContainer.appendChild(newReview);
    reviews.appendChild(newReviewContainer);
  });
};

module.exports = { getReview };
