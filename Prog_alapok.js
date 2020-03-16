// 2. Kérdés : Referencia és érték szerinti átadás:

console.log('2) ======================================================')

let arr = [ 1, 2, 3, 4, 5];
let string = 'Valami szöveg';

const changer = (arr, string) => {

  for ( let i = 0; i < arr.length; i ++) {
    arr[i] += 1
  }
  string = 'Változtatott szöveg';
  console.log(arr);
  return string;
};

console.log(`Amit megváltoztatott a függvény vö (arr globálisan is megváltozott de a string nem): ${changer(arr, string)}`);

console.log(arr);
console.log(string);

// 3. Összeadás: 
console.log('3) ======================================================')

let sum1 = 2
let sum2 = 2

const SUM = (num1, num2) => {
  return num1 + num2;
};

console.log(SUM(sum1, sum2));

// 4.Feladat : Megszámlálás tétele : 

console.log('4) ======================================================')


let countable = [1,2,3,4,5,6,7,8,9, 'string', ['kicsi tömböcske']];

const counting = (arr, e) => {
  let amount = 0;
  for (let i = 0; i < arr.length; i++) {
    amount++;
  }

  return amount;
};

console.log(counting(countable));

// 5.Feladat : Switch : 

console.log('5) ======================================================')

let switchArr = [1, 2, 3];

const FUNC = (arr) => {
  for ( let i = 0; i < arr.length; i++) {
    switch (true) {
      case (arr[i] === 1) :
        arr[i] += 1;
    }
  }
  return arr;
};

console.log(FUNC(switchArr));

// 6. Feladat : Metszet: 

console.log('6) ======================================================')

let metszet1 = [1, 3, 5, 3];
let metszet2 = [1, 32, 5, 6];

const Metszet = (arr1, arr2) => {
  let arr = [];
  for ( let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
    if (arr1[i] === arr2[j]) {
      arr.push(arr1[i]);
    }
  }
  return arr;
};

console.log(Metszet(metszet1, metszet2));

// 7. Feladat : Számológép:

console.log('7) ======================================================')


let number1 = 4;
let number2 = 2;

let substraction = (num1, num2) => {
  return num1 - num2;
};

let devision = (num1, num2) => {
  return num1 / num2;
};

let multiplication = (num1, num2) => {
  return num1 * num2;
};

const main = () => {
  console.log(SUM(number1,number2));
  console.log(substraction(number1, number2));
  console.log(devision(number1, number2));
  console.log(multiplication(number1, number2));
};

main();

// 8. feladat : A kettő hatványai: 

console.log('8) ======================================================')



const generateArr = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
    arr[i] = 2**i
    console.log(arr[i]);
  }
  return arr;
};


generateArr(3,3);



