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
new IceCream('Ferrero Rocher', 'Rich and creamy Nutella ice cream loaded with nuts, chocolate and pecans', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, caramel (milk, cane sugar, vanilla bean, sea salt), locust bean gum.', false, false, 9.50, 'img/ferrero-rocher.jpg');

new IceCream('Green Tea', 'One of our staple flavors, simple and we have mastered this green tea recipe', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/green-tea.jpg');

new IceCream('Himalayan Salted Caramel', 'Our own twist of the classic Salted Caramel, using Himalayan Salt for more balanced between sweet and salty', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/himalayan-salted-caramel.jpg');

new IceCream('Honey Dew Mint', 'Our most popular summer flavor, a refreshing melon flavor with a slight hint of mint', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false,  false, 9.00, 'img/honey-dew.jpg');

new IceCream('Pumpkin Cobbler', 'Perfect for the holidays, creamy pumpking with crumbs of granola and graham crackers', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false,  false, 9.00, 'img/pumpkin-cobbler.jpg');

new IceCream('Quadruple Chocolate', 'The most chocolatey ice cream you will ever have. See the ingredients :)', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false,9.00, 'img/quadruple-chocolate.jpg');







// Create a Shop
var southLakeUnion = new Shop('South Lake Union', '590 Terry Ave N, Seattle, WA 98109', '(206) 995-8296', '7AM - 3PM');

var capitolHill = new Shop('Capitol Hill', '1400 12th Ave, Seattle, WA 98122', ' (206) 420-4587', '1PM - 11PM');

var belltown = new Shop('Belltown', '2101 7th Ave, Seattle, WA 98119', '(206) 900-8770', '10AM - 10PM');

// Special flavor
var stickyMango = new IceCream('Sticky Mango', 'Inspired by tradition Thai dessert, strong flavor of mango with sweet sticky rice chunks', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/sticky-mango.jpg');
var ubeOrio = new IceCream('Ube Cookies N Cream', 'Inspired by Filipino dessert, purple yam with cookies and cream!', 'Rbst-free fresh cream & milk, non-fat milk solids, organic sugar, egg yolks, honey, lavender flowers, lavender oil, locust bean gum', false, false, 9.00, 'img/ube-orio.jpg');
specialFlavors.push(stickyMango);
specialFlavors.push(ubeOrio);

addSpecialFlavor(belltown);
addSpecialFlavor(southLakeUnion);

console.log('belltown :', belltown);
console.log('southLakeUnion :', southLakeUnion);
console.log('capitolHill :', capitolHill);

