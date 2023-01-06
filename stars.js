//get the parent div (.container)
const ratingsContainer = document.getElementById('container');
//get all the ratings on the page so we cn iterate through them
const ratings = ratingsContainer.getElementsByClassName('rating');

//create new ratings container
for (let i = 0; i < ratings.length; i++) {
  const ratingScore = parseFloat(ratings[i].innerHTML).toFixed(1);
  //full stars required
  const fullStars = Math.floor(ratingScore);

  //fractional stars required
  const fractionalStars = ratingScore.split('.')[1] * 10;

  //left over stars (empty stars).
  let emptyStars;
  emptyStars = fractionalStars > 0 ? 4 - fullStars : 5 - fullStars;

  const newRatingsContainer = document.createElement('div');
  newRatingsContainer.className = 'ratingsContainer';

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
    const newstarContainerFill = newstarContainer
      .appendChild(starFill)
      .appendChild(starFillImage);
    const newstarContainerOutline = newstarContainer
      .appendChild(starOutline)
      .appendChild(starOutlineImage);
    document
      .getElementById('container')
      .appendChild(newRatingsContainer)
      .appendChild(newstarContainer);
  }
  //add full stars to ratings container
  for (let i = 0; i < fullStars; i++) {
    generateStars(100);
  }

  //add fractional star to ratings container if there are any
  if (fractionalStars > 0) {
    generateStars(fractionalStars);
  }

  //add Empty Stars

  for (let i = 0; i < emptyStars; i++) {
    generateStars(0);
  }
}

const textRating = document.querySelectorAll('.rating');
for (let i = 0; i < textRating.length; i++) {
  textRating[i].remove();
}
