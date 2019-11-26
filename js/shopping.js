'use strict';

var shoppingCart;
var cartContainer = document.getElementById('cartContainer');

// Helper function to display document elements
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}

function getLocalStorage() {
  var localCartData = JSON.parse(localStorage.getItem('data')) || [];
  // eslint-disable-next-line no-undef
  shoppingCart = new Cart(localCartData);
  console.log('localCartData :', shoppingCart);
}

function displayCart() {
  var totalPrice = 0;
  var tableElem = addElement('table', cartContainer);
  var titleTr = addElement('tr', tableElem);
  addElement('th', titleTr, 'Ice Cream');
  addElement('th', titleTr, 'Price');
  for (var i = 0; i < shoppingCart.items.length; i++) {
    var contentTr = addElement('tr', tableElem);
    addElement('td', contentTr, `${shoppingCart.items[i].flavor}`);
    addElement('td', contentTr, '$'+`${shoppingCart.items[i].price}`);
    totalPrice += shoppingCart.items[i].price;
  }
  var totalTr = addElement('tr', tableElem);
  addElement('td', totalTr, 'Total Price');
  addElement('td', totalTr, '$' + totalPrice);
}


getLocalStorage();
displayCart();
