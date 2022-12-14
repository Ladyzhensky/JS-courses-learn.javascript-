"use strict";

// Условное ветвление: if, '?'

// 1) let question = prompt('Какое «официальное» название JavaScript?','');

// if (question == 'ECMAScript') {
//     alert ('Верно!');}
//     else {
//     alert ('Не знаете? ECMAScript!');
//     }


// 2) let number = +prompt('число?','');

// if (number > 0) {
//     alert (1);
// } else if (number < 0) {
//     alert (-1);
// } else if (number == 0) {
//     alert (0);
// }


// 3) let result = (a + b < 4) ? 'Мало' : 'Много';


// 4) let login = prompt('Введите логин', '');

// let message = (login == 'Сотрудник') ? 'Привет':
//     (login == 'Директор') ? 'Здравствуйте':
//     (login == '') ? 'Нет логина':
//     '';


// Логические операторы

// 1) Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age = prompt('Ведите число от 14 до 90', '');
// if (age >= 14 && age <= 90)
//     alert ('true');

// 2) Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let login = prompt('Введите логин', '');
// if (login == 'Админ') {
//    let password = prompt('Введите пароль', '');
//         if (password == 'Я главный') {
//         alert('Здравствуйте!');
//         } else if (password == null) {
//         alert ('Отменено');
//         } else {
//         alert('Неверный пароль');
//         }
// } else if (login == '' || login == null) {
//     alert ('Отменено');
// } else {
//     alert('Я вас не знаю');
// }


// Циклы while и for

// 1) При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i=2; i<=10; i++) {
//     if (i % 2 == 0) {
//     alert (i);
//     }
// }


// 2) Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     alert (`number ${i}!`);
//     i++;
// }

// 3) Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// let number;

// do {
//     number = +prompt('Введите число больше 100', '');
// } while (number <= 100 && number);


// Конструкция "switch"

// 1) Напишите if..else, соответствующий следующему switch:
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser;
// if (browser === 'Edge') {
//     alert ('Youve got the Edge!');
// } else if (browser == 'Chrome'|| browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert ('Okay we support these browsers too');
// } else {
//     alert ('We hope that this page looks ok!');
// }

// 2) Переписать условия "if" на "switch"

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// Функции

// 1) Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// function chekAge(age) {
//    return (age > 18) ? true : confirm('Родители разрешили?');
// }

// 2) Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// 3) Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

