'use strict';

// eslint-disable-next-line no-undef
var shoppingCart = new Cart([]);

var parentElement = document.getElementById('flavors');
var addToCartBtns = document.getElementsByClassName('addToCartBtn');

// Display all the flavor stored in an array to the page
function displayMenu() {
  // eslint-disable-next-line no-undef
  for (var i = 0; i < IceCream.allIceCreams.length; i++) {
    var li = document.createElement('li');
    var imageDiv = document.createElement('div');
    var flavorImg = document.createElement('img');
    var flavorDescription = document.createElement('p');
    var flavorName = document.createElement('h4');
    var addToCartBtn = document.createElement('INPUT');

    // imageDiv.id = 'imageDiv' + i;
    imageDiv.className = 'divClass';
    flavorImg.id = 'imageID' + i;
    flavorImg.className = 'image';
    flavorDescription.id = 'description' + i;
    flavorDescription.className = 'descriptionClass';
    addToCartBtn.setAttribute('type', 'submit');
    addToCartBtn.setAttribute('value', 'Add To Cart');
    addToCartBtn.className = 'addToCartBtn';
    addToCartBtn.id = `${IceCream.allIceCreams[i].name};`;

    parentElement.appendChild(li);
    li.appendChild(imageDiv);
    imageDiv.appendChild(flavorImg);
    imageDiv.appendChild(flavorDescription);
    
    flavorImg.src = IceCream.allIceCreams[i].imgUrl;
    li.appendChild(flavorName);
    // eslint-disable-next-line no-undef
    flavorName.textContent = IceCream.allIceCreams[i].name;
    // li.appendChild(flavorDescription)
    flavorDescription.textContent = IceCream.allIceCreams[i].description;
    li.appendChild(addToCartBtn);
  }
}

function mouseOverHandler(e) {
  var iceCreamDescriptionNum = e.target.id.charAt(e.target.id.length - 1);
  var descriptionId = 'description' + iceCreamDescriptionNum;
  var descriptionElem = document.getElementById(descriptionId);
  console.log(descriptionId);
  if(descriptionElem)
  {
    descriptionElem.setAttribute('style', 'display: block;');
  }
}

function mouseOutHandler(e) {
  var iceCreamDescriptionNum = e.target.id.charAt(e.target.id.length - 1);
  var descriptionId = 'description' + iceCreamDescriptionNum;
  var descriptionElem = document.getElementById(descriptionId);
  console.log(descriptionId);
  if(descriptionElem)
  {
    descriptionElem.setAttribute('style', 'display: none;');
  }
}

var arrayOfImages = document.getElementsByClassName('image');

for(var i = 0; i < arrayOfImages.length; i++){
  arrayOfImages[i].addEventListener('mouseover', mouseOverHandler);
  arrayOfImages[i].addEventListener('mouseout', mouseOutHandler);

}
// document.getElementsByClassName('image').addEventListener('mouseover', mouseOverHandler);
// document.getElementsByClassName('image').addEventListener('mouseout', mouseOutHandler);

function addToCartBtnHandler() {
  alert('Added to cart:');
  console.log('event.target:', event.target);
}

function addToCartBtnHandler(event) {
  event.preventDefault();
  var iceCreamName = event.target.id;
  shoppingCart.addItem(iceCreamName);
  console.log('shoppingCart :', shoppingCart);
  shoppingCart.saveToLocalStorage();
}

// ref: https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
for(var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', addToCartBtnHandler, false);
}
var iceCreamForm = document.getElementById('iceCreamForm');
iceCreamForm.addEventListener('click', addToCartBtnHandler);


displayMenu();

