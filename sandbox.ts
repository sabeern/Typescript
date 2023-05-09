//expicit types

let character: string;

character = "anees";
//character = 20; not allowed

let num: number;

num = 25;
//num = 's'; not allowed

let isPassed: boolean;

isPassed = true;
//isPassed = 'yes'; not allowed;

let val: any;
val = 24;
val = "sabeer";
val = false;

let arr: string[];
let arr2: number[] = [];
arr2.push(2);
//arr2.push('apple');
let arr3: (number | string | boolean)[] = [];
arr3.push(3);
arr3.push("anees");
arr3.push(false);
console.log(arr3);

let arr4: any[] = [];
arr4.push(4);
arr4.push("orange");
arr4.push(false);
console.log(arr4);

let obj: object;
obj = { name: "anees", mark: 33 };
obj = [32, 56, "apple"];

let obj2: { name: string; age: number; text: any };
obj2 = { name: "fahiz", age: 33, text: "test" };
console.log(obj2);

let variable: string | number;
variable = 33;
variable = "apple";
console.log(variable);
