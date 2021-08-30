/*
 * @Author: your name
 * @Date: 2021-08-30 14:24:15
 * @LastEditTime: 2021-08-30 19:35:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /relearn/js高级程序设计/10.variable.js
 */

// ===== var =====
// ===== =====
// 函数作用域
function test() {
  var msg = '123';
  console.log(msg);
}
test(); // 123

// ===== =====
// 作用域提升
// function test1() {
//   console.log(msg1);
//   var msg1 = '123';
// }
// test1(); // undefined

// 相当于
function test1() {
  var msg1;
  console.log(msg1);
  msg1 = '123';
}
test1(); // undefined

// 延伸
function test2() {
  msg2 = '123';
  console.log(msg2);
}
test2(); // 123
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
  console.log(msg4);
}
test4(); // message

// ===== let =====
// ===== =====
// 块级作用域
if(true) {
  var title = '123';
}
console.log(title);

if(true) {
  let title1 = '123';
}
console.log(title1); // Uncaught ReferenceError: title1 is not defined

// 没有提升
function test5() {
  console.log(msg5);
  let msg5;
  msg5 = 456;
}
test5(); // Uncaught ReferenceError: Cannot access 'msg5' before initialization at test5
// 临时死区 TDZ(Temparal Dead Zone)


// 全局声明不是window对象的属性
let age = 123;
console.log(window.age); // undefined
console.log(age); // 123

// ===== const =====
// ===== =====
// 如果声明的