 //1. Напишите функцию, которая может преобразовывать строку в число - 10 баллов

 function stringIntoNumber(string) {
    string = Number(string);
   return string;
 }

  console.log(stringIntoNumber("2022"));




  // 2. Напишите функцию, которая проверяет число четное или не четное: если четное возвращает **`true`** иначе **`false`** - 10 баллов


  function evenNumber(number) {
     if (number % 2 === 0) {
       console.log("true");
     } else {
       console.log("false");
     };
  }

  console.log(evenNumber(18));
  console.log(evenNumber(21));




// 3. Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать **`true`** или **`false` -** 10 баллов


function hasName(name, array) {
  if (array.includes(name)) {
    console.log("true");
  } else {
    console.log("false");
  };
};

let result = ["Sadyr", "Manas", "Ilon"];

hasName("Sadyr", result);
hasName("Manas", result);
hasName("Mark", result);