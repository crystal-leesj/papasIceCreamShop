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
    var flavorImg = document.createElement('img');
    var flavorDescription = document.createElement('p');
    var flavorName = document.createElement('h4');
    var addToCartBtn = document.createElement('INPUT');
    addToCartBtn.setAttribute('type', 'button');
    addToCartBtn.setAttribute('value', 'Add To Cart');
    addToCartBtn.className = 'addToCartBtn';
    // eslint-disable-next-line no-undef
    addToCartBtn.id = `${IceCream.allIceCreams[i].name}`;


    parentElement.appendChild(li);
    li.appendChild(flavorImg);
    li.appendChild(flavorDescription);
    // eslint-disable-next-line no-undef
    flavorImg.src = IceCream.allIceCreams[i].imgUrl;
    li.appendChild(flavorName);
    // eslint-disable-next-line no-undef
    flavorName.textContent = IceCream.allIceCreams[i].name;
    li.appendChild(addToCartBtn);
  }

}


function addToCartBtnHandler(event) {
  event.preventDefault();
  var iceCreamName = event.target.id;
  shoppingCart.addItem(iceCreamName);
  shoppingCart.saveToLocalStorage();

}

// ref: https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
for(var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', addToCartBtnHandler, false);
}

var iceCreamForm = document.getElementById('iceCreamForm');
iceCreamForm.addEventListener('submit', addToCartBtnHandler);


displayMenu();

