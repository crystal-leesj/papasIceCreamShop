'use strict';

var parentElement = document.getElementById('flavors');
var addToCartBtns = document.getElementsByClassName('addToCartBtn');
var checkoutBtn = document.getElementById('checkout');

// Function Invocation

displayMenu();

//Global Function

// Display all the flavor stored in an array to the page
function displayMenu() {
  for(var i = 0; i < IceCream.allIceCreams.length; i++) {
    var li = document.createElement('li');
    var flavorImg = document.createElement('img');
    var flavorDescription = document.createElement('p');
    var flavorName = document.createElement('h4');
    var addToCartBtn = document.createElement('INPUT');
    addToCartBtn.setAttribute('type', 'submit');
    addToCartBtn.setAttribute('value', 'Add To Cart');
    addToCartBtn.className = 'addToCartBtn';
    addToCartBtn.id = `${IceCream.allIceCreams[i].name}`;


    parentElement.appendChild(li);
    li.appendChild(flavorImg);
    li.appendChild(flavorDescription);
    flavorImg.src = IceCream.allIceCreams[i].imgUrl;
    li.appendChild(flavorName);
    flavorName.textContent = IceCream.allIceCreams[i].name;
    li.appendChild(addToCartBtn);
    // li.appendChilda addToCartBtn);
    // li.appendChild(flavorDescription);
    // flavorDescription.textContent = IceCream.allIceCreams[i].description;
  }

}

var cart = [];

function addToCartBtnHandler(event) {
  alert('Added to cart:');
  console.log('event.target:', event.target);
  cart.push(event.target.id);
  console.log('cart :', cart);
}

// ref: https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
for(var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', addToCartBtnHandler, false);
}

function checkoutHandler(event) {
  alert('Checkout!');
  console.log('event.target:', event.target);
}

checkoutBtn.addEventListener('click', checkoutHandler);


