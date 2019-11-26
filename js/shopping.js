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

// Get the cart data from local storage to disaply on cart page
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
  // Display $0 when there is no ice cream in the cart
  if (shoppingCart.items.length === 0) {
    var noneTotalTr = addElement('tr', tableElem);
    addElement('td', totalTr, 'Total Price');
    addElement('td', totalTr, '$0' + noneTotalTr);
  } else {
    // Display the itemized receipt
    for (var i = 0; i < shoppingCart.items.length; i++) {
      var contentTr = addElement('tr', tableElem);
      addElement('td', contentTr, `${shoppingCart.items[i].flavor}`);
      addElement('td', contentTr, '$'+`${shoppingCart.items[i].price}`);
      totalPrice += shoppingCart.items[i].price;
    }
    var taxTr = addElement('tr', tableElem);
    addElement('td', taxTr, 'Sales Tax - 10.1%');
    addElement('td', taxTr, '$' + calculatTax(totalPrice));
    var totalTr = addElement('tr', tableElem);
    addElement('td', totalTr, 'Total Price');
    addElement('td', totalTr, '$' + (parseFloat(totalPrice)+parseFloat(calculatTax(totalPrice))));
    // Discount is applied when there is 5 or more than 5 ice cream
    if (shoppingCart.items.length >= 5) {
      var discountTr = addElement('tr', tableElem);
      discountTr.id = 'discount';
      addElement('td', discountTr, '-$10 Discount');
      addElement('td', discountTr, '- $10');
      var discountTaxTr = addElement('tr', tableElem);
      addElement('td', discountTaxTr, 'Sales Tax - 10.1%');
      addElement('td', discountTaxTr, '$' + calculatTax(totalPrice));
      var discountTotalTr = addElement('tr', tableElem);
      addElement('td', discountTotalTr, 'Discounted Total');
      addElement('td', discountTotalTr, '$' + (parseFloat(totalPrice)-10+parseFloat(calculatTax(totalPrice))));
    }
  }
}

function calculatTax(price) {
  var parsedPrice = parseFloat(price);
  return (parsedPrice * 0.101).toFixed(2);
}

function renderCart() {
  getLocalStorage();
  displayCart();
}

renderCart();
