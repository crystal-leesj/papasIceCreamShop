'use strict';

// Ice Cream constructor
function IceCream(name, description, ingredients, isVegan, price) {
  this.name = name;
  this.description = description;
  this.ingredients = ingredients;
  this.isVegan = isVegan;
  this.price = price;
  // needs two methods.
  // get random icecream to display at home page
  // get pricing quote
}

// Shop constructor
function Shop(location, address, phone, hours) {
  this.location = location;
  this.address = address;
  this.phone = phone;
  this.hours = hours;
  this.flavors = [];
  this.getFlavor();
}

Shop.prototype.getFlavor = function(){
  this.flavors.push(saltedCaremel);
  this.flavors.push(honeylavender);
};


// TEST - just hard coded
var saltedCaremel = new IceCream('Salted Caremel', 'Sweet and salty – an unbeatable combination! Our salted caramel is made in-house using just 4 simple ingredients.', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, caramel (milk, cane sugar, vanilla bean, sea salt), locust bean gum.', false, 9.50);
console.log('saltedCaremel :', saltedCaremel);

var honeylavender = new IceCream('Honey Lavender', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, 9.00);
console.log('honeylavender :', honeylavender);

var southLakeUnion = new Shop('South Lake Union', '590 Terry Ave N, Seattle, WA 98109', '(206) 995-8296', '7AM - 3PM');
console.log('southLakeUnion :', southLakeUnion);

var capitolHill = new Shop('Capitol Hill', '1400 12th Ave, Seattle, WA 98122', ' (206) 420-4587', '1PM - 11PM');
console.log('capitolHill :', capitolHill);

var belltown = new Shop('Belltown', '2101 7th Ave, Seattle, WA 98119', '(206) 900-8770', '10AM - 10PM');
console.log('belltown :', belltown);


function addSpecialFlavor(shopLocation) {
  console.log('***belltown :', shopLocation.flavors);
  var freshMint = new IceCream('Fresh Mint', 'Like those Girl Scout cookies everyone loves, but with ice cream. We use locally grown heirloom mint and house-baked cookies, of course!', 'Rbst-free fresh cream & milk, organic sugar, Rbst-free dry milk, egg yolks, fresh organic mint, natural peppermint oil, locust bean gum.', false, 10.50);
  shopLocation.flavors.push(freshMint);
}

addSpecialFlavor(belltown);
console.log('belltown :', belltown);

