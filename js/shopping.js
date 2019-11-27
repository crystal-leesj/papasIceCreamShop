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
console.log('shopping cart type ' + shoppingCart.items[0].flavor);



var counterFerrero = 0;
var counterGreenTea = 0;
var counterHimalayan = 0;
var counterhoneyDew = 0;
var counterPumpkin = 0;
var counterquadruple = 0;
var counterMango = 0;
var counterUbe = 0;

console.log(shoppingCart.items.length);
console.log('shoppingCart.items' + shoppingCart.items.length);

for (var i = 0; i < shoppingCart.items.length; i++) {


  if (shoppingCart.items[i].flavor === 'Ferrero Rocher') {
    counterFerrero++;
  }
  else if (shoppingCart.items[i].flavor === 'Green Tea') {
    counterGreenTea++;
  }
  else if (shoppingCart.items[i].flavor === 'Himalayan Salted Caramel') {
    counterHimalayan++;
  }
  else if (shoppingCart.items[i].flavor === 'Honey Dew') {
    counterhoneyDew++;
  }
  else if (shoppingCart.items[i].flavor === 'Pumpkin Cobbler') {
    counterPumpkin++;
  }
  else if (shoppingCart.items[i].flavor === 'Quadruple Chocolate') {
    counterquadruple++;
  }
  else if (shoppingCart.items[i].flavor === 'Sticky Mango') {
    counterMango++;
  }
  else if (shoppingCart.items[i].flavor === 'Sticky Mango') {
    counterUbe++;
  }
}

myChart();
function myChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ferrero Rocher', 'Green Tea', 'Himalayan Salted Caramel', 'Honey Dew', 'Pumpkin Cobbler', 'Quadruple Chocolate', 'Sticky Mango', 'Ube Cookies N Cream'],
      datasets: [{
        label: 'number of purchases per Item',
        data: [counterFerrero, counterGreenTea, counterHimalayan, counterhoneyDew, counterPumpkin, counterquadruple, counterMango, counterUbe],
        backgroundColor: [
          '#7BCCC4',
          '#7BCCC4',
          '#7BCCC4',
          '#7BCCC4',
          '#7BCCC4',
          '#7BCCC4',
          '#7BCCC4',
          '#7BCCC4'

        ],
        borderColor: [
          '#FCC5C0',
          '#FCC5C0',
          '#FCC5C0',
          '#FCC5C0',
          '#FCC5C0',
          '#FCC5C0',
          '#FCC5C0',
          '#FCC5C0'
        ],
        borderWidth: 1
      }]


    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAzero: false
          }
        }]
      }
    }
  });
}
