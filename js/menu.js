'use strict';

var parentElement = document.getElementById('flavors');

// Function Invocation

displayMenu();

//Global Function

// Display all the flavor stored in an array to the page
function displayMenu() {
  for(var i = 0; i < IceCream.allIceCreams.length; i++) {
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
    flavorName.textContent = IceCream.allIceCreams[i].name;
    // li.appendChild(flavorDescription)
    flavorDescription.textContent = IceCream.allIceCreams[i].description;
    li.appendChild(addToCartBtn);
    // li.appendChilda addToCartBtn);
    // li.appendChild(flavorDescription);
    // flavorDescription.textContent = IceCream.allIceCreams[i].description;
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


function addToCartBtnHandler() {
  alert('Added to cart:');
  console.log('event.target:', event.target);
}

var addToCartBtns = document.getElementsByClassName('addToCartBtn');

for(var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', addToCartBtnHandler, false);
}




