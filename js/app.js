"use strict";

// var, let, const

// var text = "JavaScript";
// text = "HTML";
// var TITLE_COLOR = 32;

// let day = "30.07.2022";

// const FOOTER_COLOR = "#cccccc";

// console.log(1 / 0);
// console.log("number" * 2);

// var text = "I" + "like";
// console.log(text);

// var number = +"20++5";
// console.log(number);

// var x = 5;
// x = -x;
// console.log(x);

// тернаный оператор

// var age = 10;
// var type = age >= 18 ? "adult" : "child";
// console.log(type);

// var userName = "mango";
// var isUser = userName;
// var message = "Hello, " + (isUser ? userName : "friend");
// console.log(message);

// массивы

// var elements = ["a", true, 1.1];
// console.log(elements);
// var elements = [
//   [2, { x: 3, y: 5 }],
//   [5, { x: 4, y: 6 }],
// ];
// console.log(elements[0]);

// alert(), prompt(), confirm()

// var age = prompt("How old are you?", 21);
// alert("years: " + age + " done");

var agree = confirm("Are you agree for...?");
alert(agree);

// obj-s

// var car = {
//   name: "Mazda",
//   color: "blue",
// };
// console.log(car.name, car["color"]);

// new

// function Car(name, color, year) {
//   this.name = name;
//   this.color = color;
//   this.year = year;
// }

// var car_1 = new Car("Nissan", "blue", 1999);
// var car_2 = new Car("VW", "pink", 2015);
// car_2.color = "green";
// car_2.maxSpeed = 180;

// console.log(car_1.name);
// console.log(Car["color"]);
// console.log(car_2["color"]);

// function Laptop(name, color, year) {
//   this.name = name;
//   this.color = color;
//   this.year = year;
// }
// var laptop = new Laptop("Intel", "pink", 2022);
// console.log(laptop);
// laptop.color = "silver";
// laptop.state = "second-hand";
// console.log(laptop["state"]);

// methods+obj

// JSON

// var json = {
//   name: "Mazda",
//   color: "blue",
// };
// var obj = JSON.parse(json);
// console.log(obj);
// console.log(obj.name);
// console.log(obj["color"]);

// const json = '{"name":"Mango","age":3,"isHappy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isHappy: true}
// console.log(dog.name); // "Mango"

// const json = '{ "name": "Laptop", "color": "silver", "age": 1 }';
// const laptop = JSON.parse(json);
// console.log(laptop);
// console.log(laptop.name);
// console.log(laptop["color"]);
// console.log(json);

// const data_json = JSON.stringify(laptop);
// console.log(data_json);
