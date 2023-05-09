"use strict";
let myFunction;
//myFunction = 'sss'; not allowed
myFunction = () => {
    console.log("hello");
};
myFunction();
const sum = (num1, num2) => {
    console.log(num1 + num2);
};
sum(4, 6);
//sum(2,'5'); not allowed
const sum2 = (num1, num2) => {
    console.log("second number is" + num2);
};
sum2(5);
let sum3 = (num1, num2 = 5) => {
    console.log("sum3 is " + (num1 + num2));
};
sum3(6);
const testFunction = (val1, val2) => {
    return val1;
};
let res = testFunction("6", 3);
const testFunction2 = (val1) => {
    console.log(val1);
};
let c = testFunction2({ name: "sabeer", mark: 33 });
let msgFunction;
msgFunction = (name, msg) => {
    console.log(`${name} says ${msg}`);
};
msgFunction("anees", "welcome");
let sumFunction;
sumFunction = (num1, num2, type) => {
    if (type == "sum")
        return num1 + num2;
    else
        return num1 - num2;
};
let res2 = sumFunction(4, 3, "sum");
console.log(res2);
