"use strict;"

var parentElement = document.getElementById('flavors');

IceCream.flavors = []; // Store all flavors here (**Note** Should I store in Shop.flavor???)

//// Will change the flavors later according to the image that I will get

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));

IceCream.flavors.push(new IceCream('Flavor', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/300x300/#00000/#fffff'));



// Function Invocation

displayMenu();

//Global Function



// Display all the flavor stored in an array to the page
function displayMenu() {
    
    for(var i = 0; i < IceCream.flavors.length; i++) {
        var li = document.createElement('li');
        var flavorImg = document.createElement('img');
        var flavorName = document.createElement('h4');
        var submitBtn = document.createElement('button');
        submitBtn.id = 'submitBtn';
        

        parentElement.appendChild(li);
        li.appendChild(flavorImg);
        flavorImg.src = IceCream.flavors[i].imgUrl;
        li.appendChild(flavorName);
        flavorName.textContent = IceCream.flavors[i].name;
        submitBtn.innerHTML = "Add To Cart";
        li.appendChild(submitBtn);
    }
}




/// Will improve this later, 
function addToCartBtnHandler() {
    alert("Added to cart");
}


document.getElementById('submitBtn').addEventListener('click', addToCartBtnHandler);
