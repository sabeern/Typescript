let myFunction: Function;
//myFunction = 'sss'; not allowed
myFunction = () => {
  console.log("hello");
};

myFunction();

const sum = (num1: number, num2: number) => {
  console.log(num1 + num2);
};

sum(4, 6);
//sum(2,'5'); not allowed

const sum2 = (num1: number, num2?: number) => {
  console.log("second number is" + num2);
};
sum2(5);

let sum3 = (num1: number, num2: number = 5) => {
  console.log("sum3 is " + (num1 + num2));
};
sum3(6);

type numOrString = number | string;
type obj = { name: numOrString; mark: number };

const testFunction = (val1: numOrString, val2: number): numOrString => {
  return val1;
};

let res = testFunction("6", 3);

const testFunction2 = (val1: obj): void => {
  console.log(val1);
};

let c = testFunction2({ name: "sabeer", mark: 33 });
