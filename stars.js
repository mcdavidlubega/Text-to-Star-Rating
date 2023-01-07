//get all the ratings on the page so we cn iterate through them
const ratings = document.querySelectorAll('.rating');
const holders = document.querySelectorAll('.holder');

//initate a new rating container
let newRatingsContainer;

//initiate new star container
let newstarContainer;

//create svg elements
function makeStar(starType) {
  const svgns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 22.94');
  const path = document.createElementNS(svgns, 'path');
  if (starType === 'filled') {
    path.setAttribute(
      'd',
      'M12,19.21l5.82,3.52c1.07,.65,2.37-.31,2.09-1.51l-1.54-6.62,5.15-4.46c.94-.81,.43-2.36-.8-2.45l-6.77-.57L13.29,.85c-.48-1.14-2.1-1.14-2.58,0l-2.65,6.24-6.77,.57c-1.23,.1-1.74,1.64-.8,2.45l5.15,4.46-1.54,6.62c-.28,1.21,1.02,2.16,2.09,1.51l5.82-3.51Z'
    );
  } else {
    path.setAttribute(
      'd',
      'M12,1c.1,0,.28,.03,.37,.24l2.65,6.25,.24,.56,.6,.05,6.78,.58c.23,.02,.31,.18,.34,.27,.03,.1,.06,.28-.12,.43l-5.15,4.46-.46,.4,.14,.59,1.54,6.62c.03,.13,0,.24-.07,.34-.08,.1-.2,.16-.32,.16-.07,0-.14-.02-.21-.06l-5.82-3.52-.52-.31-.52,.31-5.82,3.51c-.07,.04-.14,.06-.21,.06-.12,0-.24-.06-.32-.16-.08-.1-.1-.21-.07-.33l1.54-6.62,.14-.59-.46-.4L1.14,9.37c-.18-.15-.15-.33-.12-.43,.03-.09,.12-.25,.35-.27l6.77-.57,.6-.05,.24-.55L11.63,1.24c.09-.21,.27-.24,.37-.24m0-1c-.53,0-1.05,.28-1.29,.85l-2.65,6.24-6.77,.57c-1.23,.1-1.74,1.64-.8,2.45l5.15,4.46-1.54,6.62c-.22,.94,.52,1.72,1.36,1.72,.24,0,.49-.06,.73-.21l5.82-3.51,5.82,3.52c.24,.14,.49,.21,.73,.21,.84,0,1.58-.78,1.36-1.72l-1.54-6.62,5.15-4.46c.94-.81,.43-2.36-.8-2.45l-6.77-.57L13.29,.85c-.24-.57-.76-.85-1.29-.85h0Z'
    );
  }

  svg.appendChild(path);
  return svg;
}

//generate stars
function generateStars(percentageFill) {
  const newstarContainer = document.createElement('div');
  newstarContainer.className = 'starContainer';

  const starFill = document.createElement('div');
  starFill.className = 'starFill';
  starFill.style.width = `${percentageFill}%`;

  const starOutline = document.createElement('div');
  starOutline.className = 'starOutline';

  newstarContainer.appendChild(starFill).appendChild(makeStar('filled'));
  newstarContainer.appendChild(starOutline).appendChild(makeStar());

  newRatingsContainer.appendChild(newstarContainer);
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

  //replace text rating
  ratings[i].replaceWith(newRatingsContainer);

  //add full stars to ratings container
  for (let i = 0; i < fullStars; i++) {
    generateStars(100);
  }

  console.log(generateStars(100));
  //add fractional star to ratings container if there are any
  if (fractionalStarsFill > 0) {
    generateStars(fractionalStarsFill);
  }

  //add Empty Stars
  for (let i = 0; i < emptyStars; i++) {
    generateStars(0);
  }
}
