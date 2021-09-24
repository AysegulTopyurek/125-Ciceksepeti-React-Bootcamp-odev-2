import "../../dist/css/style.css";
//  include classes
const { Animal } = require("../model/animal");
const { Dog } = require("../model/dog");
const { Duck } = require("../model/duck");
//  create instances
const dog1 = new Dog("Pamuk", "/img/dog1.jpeg", 4, 1);
const dog2 = new Dog("Pasaklı", "/img/dog2.jpeg", 4, 3);
const dog3 = new Dog("Foody", "/img/dog3.jpeg", 4, 2);
const dog4 = new Dog("Tazı", "/img/dog4.jpeg", 2, 4);
const duck1 = new Duck("Meraklı", "/img/duck1.jpeg", 2, 5);
const duck2 = new Duck("Fighter", "/img/duck2.jpeg", 2, 6);
const duck3 = new Duck("Selfie Boylu", "/img/duck3.jpeg", 2, 2);
const duck4 = new Duck("Hippie", "/img/duck4.jpeg", 2, 3);
let animalList = new Animal([]);
animalList = [dog1, dog2, dog3, dog4, duck1, duck2, duck3, duck4]; //push them to a class

//for loop for list cards
for (let i = 0; i < Math.min(animalList.length); i++) {
  const box = document.createElement("div");
  document.querySelector(".animals").appendChild(box);
  box.className = "box";

  const img = document.createElement("div");
  box.appendChild(img);
  img.className = "img";

  const picture = document.createElement("img");
  picture.src = animalList[i].image;
  img.appendChild(picture);

  const title = document.createElement("div");
  box.appendChild(title);
  title.className = "title";

  const h2 = document.createElement("h2");
  h2.innerHTML = "<span>Merhaba ben</span> " + animalList[i].name;
  title.appendChild(h2);

  const flexBox = document.createElement("div");
  flexBox.className = "flexBox";
  box.appendChild(flexBox);

  const span = document.createElement("span");
  span.innerHTML = "Yaşım " + animalList[i].age;
  flexBox.appendChild(span);

  const desc = document.createElement("div");
  flexBox.appendChild(desc);
  desc.className = "desc";
  desc.innerHTML = animalList[i].numberOfLegs + " ayağım var";

  const message = document.createElement("p");
  message.innerHTML = "Sıcak bir yuvaya ihtiyacım var";
  box.appendChild(message);
}
