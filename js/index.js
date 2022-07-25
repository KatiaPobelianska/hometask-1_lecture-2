"use strict";

// const myObj = {
//   name: "Mango",
//   age: 18,
//   isHappy: true,
// };

// const myObjStr = JSON.stringify(myObj);
// console.log(myObjStr);
// console.log(JSON.parse(myObjStr));

// module-3: task-3 font 25;
// const font = document.querySelector("#main");

// function changeFont() {
//   font.style.fontSize = "40px";
// }
// changeFont();

// module-3: task-4: Создайте программу, которая при загрузке страницы заменит содержимое тега «body». Внутрь «body» должен быть помещен текст «<div>Все сработало</div>».

// const newContext = document.querySelector("#main");

// function changeContext() {
//   newContext.innerHTML = "<div>Все сработало</div>";
// }
// changeContext();

// module-3 task:5: Создайте программу, которая при загрузке будет удалять объект с идентификатором «text».

// const text = document.querySelector("#text");
// function removeText() {
//   text.remove();
// }
// removeText();

// module-3 task:6:Создайте HTML кнопку «button». При нажатии на кнопку добавляйте в HTML структуру новый объект «div». Объект должен быть сразу с классом «block» и с текстом: «Неприметный блок».

// При повторном нажатии на кнопку в HTML постоянно должен добавляться новый «div» с теми же характеристиками.

// function addDiv() {
//   const div = document.createElement("div");
//   div.classList.add("block");
//   div.innerHTML = "incredible div";

//   const add = document.querySelector("#main");
//   document.querySelector("button").addEventListener("click", (e) => {
//     add.appendChild(div);
//   });
// }
// addDiv();

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", (e) => {
  const div = document.createElement("div");
  div.classList.add("block");
  div.innerHTML = "Неприметный блок";

  body.appendChild(div);
});
