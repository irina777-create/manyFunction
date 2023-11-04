//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr=[2,d,56,dag,78,h,45,tyr,90,2];
function arraySum(array) {
    const sum = 0;
    for (const i = 0; i < array.length; i++) {
        if (Object.prototype.toString.call(array[i]) === '[object Number]') {
          sum +=[array[i]];
        }
    }
    return sum/arr.length
}
console.log(arraySum/(arr.length));
//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function doMath(x, znak, y) {
    const x=4;
    const y=8;

    if (znak === *) {
        result = x * y;
    }
}
    const functionResult = doMath();
}

//Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

const arr1=[3,56,76,58];
const arr2=[54,73,88,67];
const arr3=[];
function outside (arr1) {
    function inside (arr2) {
    }
    console.log(arguments[arr1] + " " + arguments[arr2]);

}

console.log(arr3);
//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const str=" hello world", [^, /];

    function (){
    str = str.replace(/['l','l','l','d', [^, /]);
    console.log(str);
};


