//get the parent div (.container)
const ratingsContainer = document.getElementById('container');

//get all the ratings on the page so we cn iterate through them
const ratings = ratingsContainer.getElementsByClassName('rating');

let newRatingsContainer;

function generateStars(percentageFill) {
  const newstarContainer = document.createElement('div');
  newstarContainer.className = 'starContainer';

  const starFill = document.createElement('div');
  starFill.className = 'starFill';
  starFill.style.width = `${percentageFill}%`;
  const starFillImage = document.createElement('img');
  starFillImage.src = 'images/star.svg';

  const starOutline = document.createElement('div');
  starOutline.className = 'starOutline';
  const starOutlineImage = document.createElement('img');
  starOutlineImage.src = 'images/outline.svg';

  newstarContainer.appendChild(starFill).appendChild(starFillImage);
  newstarContainer.appendChild(starOutline).appendChild(starOutlineImage);

  document
    .getElementById('container')
    .appendChild(newRatingsContainer)
    .appendChild(newstarContainer);
}

//iterate through all divs with  ratings class in the  container element
for (let i = 0; i < ratings.length; i++) {
  //get the number rating from each div and make sure its a float with one decimal poiint
  const ratingScore = parseFloat(ratings[i].textContent).toFixed(1);

  //get the full stars required
  const fullStars = Math.floor(ratingScore);

  //get the fractional stars required
  const fractionalStarsFill = ratingScore.split('.')[1] * 10;

  //get the left over stars (empty stars).
  let emptyStars;
  emptyStars = fractionalStarsFill > 0 ? 4 - fullStars : 5 - fullStars;

  //generate ratings container div
  newRatingsContainer = document.createElement('div');
  newRatingsContainer.className = 'ratingsContainer';

  //add full stars to ratings container
  for (let i = 0; i < fullStars; i++) {
    generateStars(100);
  }

  //add fractional star to ratings container if there are any
  if (fractionalStarsFill > 0) {
    generateStars(fractionalStarsFill);
  }

  //add Empty Stars

  for (let i = 0; i < emptyStars; i++) {
    generateStars(0);
  }
}

//Remove original text rating from the DOM
const textRating = document.querySelectorAll('.rating');
for (let i = 0; i < textRating.length; i++) {
  textRating[i].remove();
}
