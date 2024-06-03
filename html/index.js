// const formSubmission = () => {
//   const formData = document.getElementById("contactForm");

//   console.log(formData);
//   const formDatas = new FormData(formData);
//   console.log(formDatas);
//   for (const value of formDatas.values()) {
//     console.log(value);
//   }
// };

// //write a function to check if the number is even or odd

// const checkNumber = (a) =>
//   a % 2 === 0 ? console.log("Number is even") : console.log("Number is odd");

// const b = checkNumber(3);
// console.log(b);

// //write a function that convert fullname to propercase

// const fullname = (a) =>
//   a
//     .split(" ")
//     .map(
//       (word) =>
//         word.slice(0, 1).toUpperCase() +
//         word.slice(1, word.length).toLowerCase()
//     )
//     .join(" ");
// console.log(fullname("smriTi poudel"));

// //write a js function to check if the phone number us nepal number or not

// const phoneNumber = (a) =>
//   a.length === 10 && a.match(/9[8|7]/gi) //gi=global insensitive(target to both upper and lower case)
//     ? console.log(`${a} nepal's number`)
//     : console.log(`${a} doesn't belong to nepal`);
// const pp = phoneNumber("97924566766");
// console.log(pp);

// //default function is used in pagination which starts from 1.

// //31stmay,2024
// //Default function
// const a = (w = 1) => {
//   return w;
// };

// console.log(a());
// //usi
// const e = "smriti";
// console.log(`i am ${e}`);
//prep
// let ap = "hello, baby";
// let c = () => console.log(ap.slice(0, 3));
// c();

// //write the factorial of 5
// const f = parseInt(prompt("enter a number:"));
// if (f < 0) {
//   console.log("wrong answer");
// } else if (f === 1) {
//   console.log(`Its factorial of ${f} is 1`);
// } else {
//   let fact = 1;
//   for (i = 1; i <= f; i++) {
//     fact *= i;
//   }
//   console.log(`The factorial of ${f} is ${fact}.`);
// }

//create a book object and CRUD OPERARTION
const book = {
  bname: "DSAP",
  author1: "John",
  author2: "Bella",
  publishedyear: 2000,
  price: 200,
};
//C=create
const bk = new Object();
bk.bname = "DS";
console.log(bk);

//R=Read
const r = book.author1 + book.author2;
console.log({ r });

//U=Update
book.publishedyear = 2000;
book.publishedyear = 2005;
console.log(book.publishedyear);

//D=delete
const { price, ...rest } = book;
console.log({ rest });

//array
// const fruits = [
// const [a, bss, ...rest] = fruits;

//assignment of methods
//const arrayA=[1,2]
//const arrayB=[3,4]
//output:[1,2,3,4], using array

const arrayA = [1, 2];
const arrayB = [3, 4];
const newar = arrayA.concat(arrayB);
console.log(newar);

/*
//let aa=[1,2,3,4]; write a array reverse function. ([4,3,2,1])
//write a sum of all the elements of array. let arr=[1,2,3,4,5];res=15
//find the maximun=m elements in an array.eg:let arr=[1,2,3,4,5];res=5
//find array of only even numbers. eg:let arr=[1,2,3,4,5,6];res=[2,4,6]
*/
//let aa=[1,2,3,4]; write a array reverse function. ([4,3,2,1])
let aa = [1, 2, 3, 4, 5];
let ma = (aa) => aa.reverse();
console.log(ma(aa));
//write a sum of all the elements of array. let arr=[1,2,3,4,5];res=15
let mm = (aa) => aa.reduce((ini, curr) => ini + curr, 0);
console.log(mm(aa));
//find the maximun=m elements in an array.eg:let arr=[1,2,3,4,5];res=5
const max = (aa) => Math.max(...aa);
console.log(max(aa));
//find array of only even numbers. eg:let arr=[1,2,3,4,5,6];res=[2,4,6]
let arr = [1, 2, 3, 4, 5, 6];
let even = (arr) => arr.filter((item) => item % 2 == 0);
console.log({ e: even(arr) });

// const ce = ["1", "2", "3", "4", "5"];
// const res = ce.slice(1, 4);
// console.log(res);

//assignment:write the fibonacci series of nth elements
let nth = parseInt(prompt("ENter a number: "));
let a = 0;
let b = 1;
let rrsum;
for (let i = 0; i < nth; i++) {
  console.log(a);
  rrsum = a + b;
  a = b;
  b = rrsum;
}
