"use strict";

// operators

//task-1

// var a = 9;
// var b = 6;

// if (a % 2 === 1) console.log("uncount numb - ", a);
// else console.log("uncount numb - ", b);

// const uncountNumb = a % 2 === 1 ? a : b;
// console.log(uncountNumb);

// task-2

// var a = 5,
//   b = -3,
//   res;
// res = b != 0 ? a / b : 1;

// console.log("result -", Math.floor(res.toFixed(2)));

// task-3

// var a = 4;
// if ((a < 8 && a !== 5 && a >= 2) || a === -1) console.log("works!");

// task-4

// var a = 5,
//   b = 7,
//   res,
//   math_operation = "*";

// switch (math_operation) {
//   case "+":
//     res = a + b;
//     break;
//   case "-":
//     res = b - a;
//     break;
//   case "/":
//     res = b / a;
//     break;
//   case "*":
//     res = a * b;
//     console.log("result: ", res);
//     break;
//   default:
//     console.log("something wrong");
//     break;
// };

// task-5 _????_

// let a = 10;
// let b = 0;
// let res = b !== 0 ? a / b : 1;
// console.log("result: ", res);

// task-6

var odd_numb = 0;
var even_numb = 0;
console.log("enter number: ");

var user_numb = prompt("enter your number:");

while (user_numb > 0) {
  if (user_numb % 2 === 0) even_numb += 1;
  else odd_numb += 1;
}
user_numb = Math.floor(user_numb / 10);

console.log("even numsers: ", even_numb);
console.log("odd numbers: ", odd_numb);

// var even = 0;
// var odd = 0;
// console.log("Введите число: ");
// // Получение число от пользователя
// var user_num = prompt("Укажите число");

// // Мы будем делить число на 10,
// // поэтому цикл будет работать пока число user_num будет больше за 0
// while (user_num > 0) {
//   // Проверяем является ли число четным
//   // Для этого получаем остаток при делении на 2
//   if (user_num % 2 == 0)
//     even += 1; // Если четное, то +1 к переменной четных чисел
//   else odd += 1; // Если не четное, то +1 к переменной не четных чисел

//   // Число делим на 10 и округляем, чтобы получить число без последней цифры
//   user_num = Math.floor(user_num / 10);
// }

// // Выводим все значения
// console.log("Четных: " + even);
// console.log("Не четных: " + odd);
