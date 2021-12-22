/*
 * @Author: your name
 * @Date: 2021-12-01 15:31:34
 * @LastEditTime: 2021-12-09 14:51:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /relearn/js高级程序设计/11.js
 */
let name1 = 'Nicholas';
name1.age = 27;
console.error(name1.age); // undefined

let name2 = new String('Math');
name2.age = 28;
console.error(name2.age); // 28

let obj1 = { a: 1, b: 2 };
let obj2 = obj1;
obj2.b = 3;
console.log('obj1', obj1);
console.log('obj2', obj2);

let obj3 = new Object();
obj3.name = 'Nicholas';
let obj4 = new Object();
obj4 = obj3;
obj4.name = 'Math';
console.error('obj3', obj3);
console.error('obj4', obj4);


function setName(obj) {
  obj.name = 'Nicholas'
}
let person = new Object();
setName(person);
console.log(person);

function addTen(num) {
  num += 10;
  return num;
}
let count = 20;
let result = addTen(count);
console.log(count);
console.log(result);

// let s = 'Nicholas';
// console.log(typeof s); // string
// let b = true;
// console.log(typeof b); // boolean
// let i = 22;
// console.log(typeof i); // number
// let u;
// console.log(typeof u); // undefined
// let n = null;
// console.log(typeof n); // object
// let o = new Object();
// console.log(typeof o); // object

let o = new Object();
console.log(o instanceof Object);
let a = new Array();
console.log(a instanceof Array);
let r = new RegExp();
console.log(r instanceof RegExp);


let number = 42;
function printNumber() {
  console.log('number', number);
}
function log() {
  let number = 54;
  console.error('function log');
  printNumber();
}
// Prints 42
log();




