/*
 * @Author: your name
 * @Date: 2021-08-30 14:24:15
 * @LastEditTime: 2021-11-04 15:53:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /relearn/js高级程序设计/10.variable.js
 */

// ===== var =====
// ===== =====
// 函数作用域
function test() {
  var msg = '123';
  console.log(msg); // 123
}
test();

// ===== =====
// 作用域提升
function test1() {
  console.log(msg1); // undefined
  var msg1 = '123';
}
test1();

// 相当于
function test1() {
  var msg1;
  console.log(msg1); // undefined
  msg1 = '123';
}
test1();

// 延伸
function test2() {
  msg2 = '123';
  console.log(msg2); // 123
}
test2();
console.log(window.msg2); // 123


function test3() {
  msg3 = 'def';
  console.log(msg3);
  var msg3;
}
test3(); // def
console.log(msg3); // VM78:6 Uncaught ReferenceError: msg3 is not defined
console.log(window.msg3); // undefined

// ===== =====
// 重复声明不报错
function test4() {
  var msg4;
  var msg4 = 'message';
  console.log(msg4); // message
}
test4();

// ===== let =====
// ===== =====
// 块级作用域
if(true) {
  var title = '123';
}
console.log(title); 
// Uncaught ReferenceError: title is not defined

if(true) {
  let title1 = '123';
}
console.log(title1); // Uncaught ReferenceError: title1 is not defined

// 没有提升
function test5() {
  console.log(msg5);
  // Uncaught ReferenceError: Cannot access 'msg5' before initialization at test5
  let msg5;
  msg5 = 456;
}
test5();
// 临时死区 TDZ(Temparal Dead Zone)


// 全局声明不是window对象的属性
let age = 123;
console.log(window.age); // undefined
console.log(age); // 123

// ===== const =====
// ===== =====
// const num;
// Uncaught SyntaxError: Missing initializer in const declaration

// const number = 1;
// const number = 1;
// Uncaught TypeError: Assignment to constant variable.

const number = 1;
const number = 1;
// Uncaught TypeError: Assignment to constant variable.
// === 分割线 ===
// 如果声明的是一个对象，那么常量本身的引用不可修改，但是可以修改对象的属性
const obj = { a: 1 };
obj = {};
// Uncaught TypeError: Assignment to constant variable.
obj.a = 2;
console.log('obj', obj); // { a: 2 }

for(let i = 1; i < 5; i++) {
  console.log(i);
  // 1 2 3 4
}
for(const i = 1; i < 5; i++) {
  console.log(i);
  // Uncaught TypeError: Assignment to constant variable.
}

// for...of(用于迭代可迭代对象的值), for...in(用于迭代对象的key) 中可行
for(const key in { a: 1, b: 2 }) {
  console.log('key', key);
  // a b
}
for(const key in 'abc') {
  console.log('key', key);
  // 0 1 2
}
