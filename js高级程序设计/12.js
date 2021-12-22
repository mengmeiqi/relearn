/*
 * @Author: your name
 * @Date: 2021-12-16 01:13:06
 * @LastEditTime: 2021-12-21 21:22:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /relearn/js高级程序设计/12.js
 */


// 使用delete关键字会导致生成相同的隐藏类片段
// 把不想要的属性设置为null，可以保持隐藏类不变和继续共享
// 达到删除引用值供垃圾回收程序回收的效果
// 不好的方式
function Article(opt_auth) {
  this.title = '||| title';
  this.author = opt_auth;
}
let a1 = new Article();
let a2 = new Article('||| author');
delete a1.author;
console.log('>>>a1', a1); // >>>a1 Article {title: '||| title'}
console.log('>>>a2', a2); // >>>a2 Article {title: '||| title', author: '||| author'}
// 更好的方式
function Article(opt_auth) {
  this.title = '||| title';
  this.author = opt_auth;
}
let a1 = new Article();
let a2 = new Article('||| author');
a1.author = null;
console.log('>>>a1', a1); // >>>a1 Article {title: '||| title', author: null}
console.log('>>>a2', a2); // >>>a2 Article {title: '||| title', author: '||| author'}



//避免js的“先创建再补充”(ready-fire-aim)式的动态属性赋值，
//并在构造函数中一次性声明所有属性
// 不好的方式
function Article(opt_auth) {
  this.title = '||| title';
  this.author = opt_auth;
}
let a1 = new Article();
let a2 = new Article();
a2.author = 'Jake';
// 更好的方式
function Article(opt_auth) {
  this.title = '||| title';
  this.author = opt_auth;
}
let a1 = new Article();
let a2 = new Article('Jake');
