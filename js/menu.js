"use strict;"

var parentElement = document.getElementById('flavors');
var ul = document.createElement('ul');

IceCream. flavors = [];

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

IceCream.flavors.push(new IceCream('Brownie Pie A La Mode', 'Organic vanilla ice cream infused with hot fudge and huge chunk of brownie pieces', 'Vanilla Ice Cream, Fudge, Brownies', false, 8.99, 'https://place-hold.it/250x250/Black/White&text=Ice%20Cream&bold&fontsize=24'));

parentElement.appendChild(ul);




IceCream.flavors.forEach(flavor) {
    var li = document.createElement('li');
    ul.appendChild(li);
    var imgTag = document.createElement('img');
    li.appendChild(imgTag);
    imgTag.src = IceCream.flavors[flavor].imgUrl;
};