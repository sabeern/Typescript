let character = "sabeer";
let age = 20;
let isPassed = true;

character = "anees";

age = 23;

isPassed = false;

const circ = (diameter: number) => {
  console.log(diameter * Math.PI);
};

circ(5);

const arr1 = ["orange", "apple", "banana"];
const arr2 = [45, 3, 6, 9];

arr1[0] = "mango";
//arr1[1] = 30;
arr2.push(35);
//arr2.push('anees');

const mixed = ["orange", 2, 3, "grapes"];

mixed[0] = 4;

let obj = { name: "sabeer", age: 23, place: "malappuram" };

obj.name = "anees";
//obj.age = '3';
//obj.mark = 33;
obj = {
  name: "fahiz",
  age: 21,
  place: "kondotty",
};
