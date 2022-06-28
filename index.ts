const a:string = 'str'
console.log(a)
//内置的八大数据类型
let str:string = 'aaa';
let num:number = 1;
let bool:boolean = true;
let u:undefined = undefined;
let n:null = null;
let obj:object = {a:1};
let big:bigint = 100n;
let sym:symbol = Symbol('me');

// str = 1;
// 不能把number赋值给string类型

str = null!;
str = undefined!;

let aaa:string | undefined = 'a';

aaa = undefined;

// 虽然number和bigint都表示数字，但是这两个类型不兼容。
/*
let big: bigint =  100n;
let num: number = 6;
big = num;
num = big;
*/

// 对于数组
let arr:string[] = ["1","2"];
let arr2:Array<string> = ["1","2"];

// 定义联合类型数组，即数组里有不同的类型

let arr3:(string | number)[];
arr3 = ['a',3]

// 定义指定对象成员的数组：
interface Arrobj{
    name:string,
    age:number
}
let arr4:Arrobj[]=[{name:'jimmy',age:22}]

// 声明函数
function sum(x:number,y:number):number{
    return x + y;
}

// 函数表达式
/*
原来形式
let f = function(x,y){
    return x + y;
}
*/
//ts
let mySum:(x:number,y:number)=>number = function(x:number,y:number):number{
    return x + y;
}

// 用接口定义函数类型
interface SearchFunc{
    (source: string, subString: string): boolean;
}

// 可选参数
// 可选参数后不能再有必选参数！！！！！！！
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');