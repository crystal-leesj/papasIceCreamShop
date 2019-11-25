'use strict';

console.log(IceCream.allIceCreams);

function getImage (){
  var random = Math.floor(Math.random() * IceCream.allIceCreams.length);
  var img = IceCream.allIceCreams[random].imgUrl;
  return img;
}
function renderImage () {
  var imgElem = document.getElementById("random_image");
  imgElem.setAttribute('src', getImage());
}
renderImage();

setInterval(renderImage, 3000);
