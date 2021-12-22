/*
 * @Author: your name
 * @Date: 2021-11-22 17:51:27
 * @LastEditTime: 2021-11-23 10:53:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /relearn/js高级程序设计/0.js
 */

function setName(obj) {
  obj.name = 'ceshi1';
  obj = new Object();
  obj.name = 'ceshi2';
}
let person = new Object();
setName(person);
console.error('person.name', person.name);

let s = 'Nihao';
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object();

console.error('typeof s', typeof s); // string
console.error('typeof b', typeof b); // boolean
console.error('typeof i', typeof i); // number
console.error('typeof u', typeof u); // undefined
console.error('typeof n', typeof n); // object
console.error('typeof o', typeof o); // object


let person = new Object();
console.error('判断是否是Object', person instanceof Object);

let colors = [1, 2, 3, 4, 5];
console.error('判断是否是Array', colors instanceof Array);

let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
console.error('判断是否是 RegExp', reg instanceof RegExp);


// 每个上下文都有一个关联的变量对象(variable object)，而这个


let person = new Object();
person.name = 'Nicholas';
console.log(person.name); //Nicholas
