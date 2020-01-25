/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carouselContainer = document.querySelector('.carousel-container');
const imageArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg', './assets/carousel/resort.jpg', './assets/carousel/space.jpg']

function carouselCreator(images) {

  const newCarousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const rightBtn = document.createElement('div');
  const img = document.createElement('img');  //-- make this programatically for all images

  leftBtn.textContent = '←';
  rightBtn.textContent = '→';
  img.src = images[0];

  newCarousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  let index = 0;

  leftBtn.addEventListener('click', e => {
      if (index === (images.length - 1)) {
        img.src = images[0];
        index = 0;
      }
      else {
        img.src = images[index + 1];
        index++;
      }
  });

  rightBtn.addEventListener('click', e => {
    if (index === 0) {
      img.src = images[images.length -1];
      index = 3;
    }
    else {
      img.src = images[index - 1];
      index -= 1;
    }
  });

  newCarousel.appendChild(leftBtn);
  newCarousel.appendChild(img);
  newCarousel.appendChild(rightBtn);
  
  return newCarousel
}

carouselContainer.appendChild(carouselCreator(imageArray))
