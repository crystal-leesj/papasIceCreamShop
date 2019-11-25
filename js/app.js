'use strict';

// Ice Cream constructor
function IceCream(name, description, ingredients, isVegan, isSpecial, price, imgUrl) {
  this.name = name;
  this.description = description;
  this.ingredients = ingredients;
  this.isVegan = isVegan;
  this.price = price;
  this.imgUrl = imgUrl;
  this.isSpecial = isSpecial;
  IceCream.allIceCreams.push(this);
  // needs two methods.
  // get random icecream to display at home page
  // get pricing quote
}

// Array to store all the ice creams
IceCream.allIceCreams = [];
// Global variable to store all the special flavors
var specialFlavors = [];

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
  for (var i = 0; i < IceCream.allIceCreams.length; i++) {
    this.flavors.push(IceCream.allIceCreams[i]);
  }
};

function addSpecialFlavor(shopLocation) {
  var randomIndex = Math.floor(Math.random() * specialFlavors.length);
  shopLocation.flavors.push(specialFlavors[randomIndex]);
}

// Create an Ice Cream
new IceCream('Ferrero Rocher', 'Sweet and salty – an unbeatable combination! Our salted caramel is made in-house using just 4 simple ingredients.', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, caramel (milk, cane sugar, vanilla bean, sea salt), locust bean gum.', false, false, 9.50, 'img/ferrero-rocher.jpg');

new IceCream('Green Tea', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/green-tea.jpg');

new IceCream('Himalayan Salted Caramel', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/himalayan-salted-caramel.jpg');

new IceCream('Honey Dew', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false,  false, 9.00, 'img/honey-dew.jpg');

new IceCream('Pumpkin Cobbler', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false,  false, 9.00, 'img/pumpkin-cobbler.jpg');

new IceCream('Quadruple Chocolate', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false,9.00, 'img/quadruple-chocolate.jpg');







// Create a Shop
var southLakeUnion = new Shop('South Lake Union', '590 Terry Ave N, Seattle, WA 98109', '(206) 995-8296', '7AM - 3PM');

var capitolHill = new Shop('Capitol Hill', '1400 12th Ave, Seattle, WA 98122', ' (206) 420-4587', '1PM - 11PM');

var belltown = new Shop('Belltown', '2101 7th Ave, Seattle, WA 98119', '(206) 900-8770', '10AM - 10PM');

// Special flavor
var stickMango = new IceCream('Sticky Mango', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/sticky-mango.jpg');
var ubeOrio = new IceCream('Ube Cookies N Cream', 'Inspired by Spring days in Portland when flowers pop and trees start to bloom. We combine local honey and organic lavender with lemon cookies for an extra refreshing Spring time flavor combination!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/ube-orio.jpg');
specialFlavors.push(stickMango);
specialFlavors.push(ubeOrio);

addSpecialFlavor(belltown);
addSpecialFlavor(southLakeUnion);

console.log('belltown :', belltown);
console.log('southLakeUnion :', southLakeUnion);
console.log('capitolHill :', capitolHill);

