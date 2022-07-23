"use strict";

const myObj = {
  name: "Mango",
  age: 18,
  isHappy: true,
};

const myObjStr = JSON.stringify(myObj);
console.log(myObjStr);
console.log(JSON.parse(myObjStr));
