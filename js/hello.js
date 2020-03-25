"use strict";
// 1.字符串
// let aName: string = '英雄'
// 2.数值
// let aNum: number = 123
// 3.布尔 不能用1 和0
// let aflag: boolean = true
// aflag = false
// 4.数组
// let arr:string[]=['1','2','3']
// let arr1:Array<string>=['1','2','3']
// 5.元组 tuple 规定了元素数量和每个元素类型的数组
// let arr2: [string, number] = ['1',2]
// console.log(arr2[1])
// 6.枚举 enum  用一组标识 来代表 数值 
// 枚举项 ：一般英文单词或数字 枚举值：整型数字(可以省略)
// enum color1 {red, green, blue}  // 默认0 1 2
// enum sex {
//   boy = 1,
//   girl = 2,
//   unknow = 3
// }
// let userSex:sex = sex.boy
// console.log(userSex)
// 7.any 任意类型  一般在获取dom 对象里使用
// let arrList: any = [1, '1', false]
// 8.void 代表没有类型 一般用在无返回值的函数
// function sayHi(name: string) :void {
//   console.log('hi' + name)
// }
// sayHi('jack')
// function sayHello() :string {
//   return 'hello'
// }
// sayHello()
// 9.never 代表不存在的值的类型 常用作 抛出异常 或无限循环的 函数返回类型
// never 类型 是ts 中的底部类型，所有类型都是 never 类型的 父类
// 所以 never类型值 可以赋给 任意类型的变量
// function test(): never {
//   while(true) {
//     console.log('无限循环了~~')
//   }
// }
// function test1(): never {
//   throw new Error('出错~~') ; 
// }
// 10.类型推断
// 如果变量的声明和初始化在同一行，那么可以省略到变量类型的声明
// let 变量名: 变量类型 = 值   可以写成  ===》  let 变量名 = 值
// let age: number = 18   ===>  let age = 18
// 11.联合类型  表示 取值可以为多种类型中的一种
// let 变量名: 变量类型1 | 变量类型2 = 值
// let prmValue: string | null = prompt('请输入名字');
// console.log('wwww' + prmValue);
// 12. 函数返回值和传参
// function sayHello() :string {
//   return 'hahah'
// }
// let aaa: string = sayHello()
// function sayHi(name:string , age: number) :string {
//   return 'hi,' + name + ', you age is ' + age
// }
// let bbb: string = sayHi('jack', 18)
// console.log(bbb)
// 13. 可选参数和默认值  加 ？ 表示可传可不传
// function sayHi(name:string , age ?: number) :string {
//   return 'hi,' + name + ', you age is ' + age
// }
// let bbb: string = sayHi('jack')
// console.log(bbb)
// function sayHi(name :string='wiim' , age= 19) :string {
//   return 'hi,' + name + ', you age is ' + age
// }
// let bbb: string = sayHi('jack')
// let ccc: string = sayHi( undefined ,21)
// console.log(ccc)
// 14 剩余参数  是数组
// function add(num1: number, num2: number, ...othernum: number[]) :void {
//   // 声明变量接收
//   let all: number = num1 + num2;
//   // 剩余参数处理
//    for(let i of othernum) {
//     all += i
//    }
//    console.log(all)
// }
// add(1,2,3,4,5)
// 15 类
// new + 构造函数
// class City {
//   // 成员变量
//   name: string;
//   // 构造函数
//   constructor(message: string) {
//       this.name = message;
//   }
//   // 成员方法
//   about() {
//       return "Hello, " + this.name;
//   }
// }
// let c1 = new City("world");
// console.log(c1.name);
// console.log(c1.about());
var obj = {
    name: 'zs',
    age: 18
};
var strJson = JSON.stringify(obj);
window.localStorage.setItem('obj', strJson);
var strJson1 = window.localStorage.getItem('obj');
var obj1 = JSON.parse(strJson);
