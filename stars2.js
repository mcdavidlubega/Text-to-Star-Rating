const ratingsContainer = document.querySelector('#container');
const ratings = ratingsContainer.querySelectorAll('.rating');

for (let i = 0; i < ratings.length; i++) {
  const ratingScore = ratings[i].innerHTML;
  //full stars required
  const fullStars = Math.floor(ratingScore);

  //fractional stars required
  const fractionalStars = ratingScore.split('.')[1] * 10;

  //left over stars (empty stars)
  const emptyStars = 5 - fullStars - fractionalStars / 100;

  const newRatingsContainer = document.createElement('div');
  newRatingsContainer.className = 'ratingsContainer';

  let starsHTML = '';

  //Add full stars to ratings container
  while (fullStars > 0) {
    starsHTML +=
      '<div class="starContainer"><div class="starFill"><img src="images/star.svg"></div><div class="starOutline"><img src="images/outline.svg"></div></div>';
    fullStars--;
  }

  //Add fractional star to ratings container
  if (fractionalStars > 0) {
    starsHTML += `<div class="starContainer"><div class="starFill" style="width: ${fractionalStars}%"><img src="images/star.svg"></div><div class="starOutline"><img src="images/outline.svg"></div></div>`;
  }

  //Add Empty Stars
  while (emptyStars > 0) {
    starsHTML +=
      '<div class="starContainer"><div class="starFill" style="width: 0"><img src="images/star.svg"></div><div class="starOutline"><img src="images/outline.svg"></div></div>';
    emptyStars--;
  }

  newRatingsContainer.innerHTML = starsHTML;
  ratingsContainer.appendChild(newRatingsContainer);
}
