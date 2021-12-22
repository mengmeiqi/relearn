/*
 * @Author: your name
 * @Date: 2021-12-16 05:12:10
 * @LastEditTime: 2021-12-17 18:51:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /relearn/js高级程序设计/16.js
 */
//声明类
class EventBus {
  constructor(){
    //定义事件总线对象
    this.eventList={};
  }
  //监听，或者说是发布
  $on(event,fn){
    let  eventList=this.eventList[event];
    eventList? eventList.push(fn) : this.eventList[event]=[]
  }
  //触发，订阅
  $emit(event,...arg){
    this.event[name] && this.event[name].forEach(fn => {
      fn(...args)
    });
  }
}

let eventbus= new EventBus();
eventbus.$on('sayHi',function(msg){
  console.log('msg', msg)
});
eventbus.$emit('sayHi',Math.random())


