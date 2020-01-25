// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    Object.keys(response.data.articles).forEach(type => {
      response.data.articles[type].forEach(text => {
        cardContainer.appendChild(cardCreator(text));
      });
    });
  })
  .catch(error => {
    console.log(error);
  });

function cardCreator(data) {
    
  const newCard = document.createElement("div");
  const newHeadline = document.createElement("div");
  const newAuthor = document.createElement("div");
  const newImgContainer = document.createElement("div");
  const newImg = document.createElement("img");
  const newCredit = document.createElement("span");

  newCard.classList.add("card");
  newHeadline.classList.add("headline");
  newAuthor.classList.add("author");
  newImgContainer.classList.add("img-container");

  newHeadline.textContent = data.headline;
  newImg.src = data.authorPhoto;
  newCredit.textContent = `By ${data.authorName}`;

  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImgContainer);
  newImgContainer.appendChild(newImg);
  newAuthor.appendChild(newCredit);

  return newCard;
}
