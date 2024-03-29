'use strict';

// eslint-disable-next-line no-undef
var shoppingCart = new Cart([]);

var parentElement = document.getElementById('flavors');
var addToCartBtns = document.getElementsByClassName('addToCartBtn');

displayMenu();

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

    imageDiv.className = 'divClass';
    flavorImg.id = 'imageID' + i;
    flavorImg.className = 'image';
    flavorDescription.id = 'description' + i;
    flavorDescription.className = 'descriptionClass';

    addToCartBtn.setAttribute('type', 'button');
    addToCartBtn.setAttribute('value', 'Add To Cart');
    addToCartBtn.className = 'addToCartBtn';
    addToCartBtn.id = `${IceCream.allIceCreams[i].name}`;

    parentElement.appendChild(li);
    li.appendChild(imageDiv);
    imageDiv.appendChild(flavorImg);
    imageDiv.appendChild(flavorDescription);

    // eslint-disable-next-line no-undef
    flavorImg.src = IceCream.allIceCreams[i].imgUrl;
    li.appendChild(flavorName);
    flavorName.textContent = IceCream.allIceCreams[i].name;
    // eslint-disable-next-line no-undef
    flavorDescription.textContent = IceCream.allIceCreams[i].description;
    li.appendChild(addToCartBtn);
  }
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
// var iceCreamForm = document.getElementById('iceCreamForm');
// iceCreamForm.addEventListener('click', addToCartBtnHandler);

window.onscroll = function() {displayOnScroll();};

var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function displayOnScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

function displayCartItem() {
  var onscollItemList = document.createElement('ol');
  var onscollItem = document.createElement('li');
  header.appendChild(onscollItemList);
  for (var i = 0; i < shoppingCart.items.length; i++) {
    onscollItemList.appendChild(onscollItem);
    onscollItem.textContent = (i+1) + '. ' + `${shoppingCart.items[i].flavor}`;
  }
}

