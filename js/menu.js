'use strict';

var parentElement = document.getElementById('flavors');

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
    var submitBtn = document.createElement('INPUT');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add To Cart');
    submitBtn.id = 'submitBtn';

    parentElement.appendChild(li);
    li.appendChild(flavorImg);
    li.appendChild(flavorDescription);
    flavorImg.src = IceCream.allIceCreams[i].imgUrl;
    li.appendChild(flavorName);
    flavorName.textContent = IceCream.allIceCreams[i].name;
    li.appendChild(submitBtn);
    // li.appendChild(flavorDescription);
    // flavorDescription.textContent = IceCream.allIceCreams[i].description;
  }
}


/// Will improve this later
function addToCartBtnHandler() {
  alert('Added to cart');
}

document.getElementById('submitBtn').addEventListener('click', addToCartBtnHandler);
