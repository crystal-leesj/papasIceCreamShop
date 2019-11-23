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

function displayMenu() {
    
    for(var i = 0; i < IceCream.flavors.length; i++) {
        var li = document.createElement('li');
        var flavorImg = document.createElement('img');
        var flavorName = document.createElement('p');
        var submitBtn = document.createElement('button');

        parentElement.appendChild(li);
        li.appendChild(flavorImg);
        flavorImg.src = IceCream.flavors[i].imgUrl;
        li.appendChild(flavorName);
        flavorName.textContent = IceCream.flavors[i].name;
        submitBtn.innerHTML = "Add To Cart";
        li.appendChild(submitBtn);
    }
}

displayMenu();
