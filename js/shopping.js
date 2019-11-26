'use strict';

var cart = ['test', 'test'];

var cartContainer = document.getElementById('cartContainer');

function displayCart() {
  var ulElem = document.createElement('ul');
  cartContainer.appendChild(ulElem);
  for (var i = 0; i < cart.length; i++) {
    console.log('cart arr :', cart[i]);
  }
  var liElem = document.createElement('li');
  ulElem.appendChild(liElem);
}

displayCart();
