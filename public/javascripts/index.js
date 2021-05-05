window.addEventListener("load", (event) => {

});

const getReview = text => {
  const reviews = document.querySelector('.reviews');

  text.reviews.forEach((review) => {
    const newReviewContainer = document.createElement('div');
    newReview.className = 'review-container';
    const newReview = document.createElement('p');
    newReview.appendChild(document.createTextNode(review));
    newReviewContainer.appendChild(newReview);
    reviews.appendChild(newReviewContainer)
  })

}