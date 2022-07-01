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

// 参数默认值
function mor(firstName: string, lastName: string = 'Cat'){
    return firstName + ' ' + lastName;
}
let e = mor('Tom', 'Cat');
let e1 = mor('Tom');

// 剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a123: any[] = [];
push(a123, 1, 2, 3);

// 函数重载
type Combinable = string | number;
function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Combinable, b:Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
add(1, 2); // 3
add("1", "2"); //"12"
const result = add('Semlinker', ' Kakuqo');
result.split(' ');


// 元组
// 元祖是用来限制数组的大小和类型

// 什么月饼（（（
let y:[string,number];
y= ['a',1]
// y= [1,'a'] 报错
// y= ['a',1,1] 报错
// 如果一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]!!!!!!!!!
// 什么Anyscript（笑

let q:any[];
q=[1,1,'1',null]

// 元祖解构赋值
let em:[string,number];
em = ['str',1];
let [sp,sr] = em;
console.log(sp)
console.log(sr)

/**
 * 长度为 "2" 的元组类型 "[number, string]" 在索引 "2" 处没有元素。
 * let employee: [number, string] = [1, "Semlinker"];
 * let [id, username, age] = employee;
 */


// 元祖的可选元素
let optionalTuple: [string, boolean?];
optionalTuple = ["Semlinker", true];
console.log(`optionalTuple : ${optionalTuple}`);
optionalTuple = ["Kakuqo"];
console.log(`optionalTuple : ${optionalTuple}`);


//例如说
type Point = [number,number?,number?];
const xzz:Point = [1]
const xyzz:Point = [1,1]
const xyzzz:Point = [1,1,1]

console.log(xzz.length); // 1
console.log(xyzz.length); // 2
console.log(xyzzz.length); // 3

// 元祖中的剩余元素
type syu = [number,...string[]]
let aaaa:syu = [1,'aa','bb','cc']
console.log(aaaa[0]);
console.log(aaaa[1]);

// 只读元祖（无法修改）
const pointRead:readonly [number,string] = [1,'a']
// 无法分配到 "0" ，因为它是只读属性。
// pointRead[0] =0


// void
// void表示没有任何类型，和其他类型是平等关系，不能直接赋值:
/**
 * 不能将类型“number”分配给类型“void”。
 * let qqq:void;
 * let bbb:number = qqq;
 */

// 要使用void，不能使用undefined
function fff():void{
    console.log("this is TypeScript");
}
fff(); // Error

// never类型表示的是那些永不存在的值的类型。
// 例如说死循环，异常

// 异常
function err(msg: string): never { // OK
    throw new Error(msg); 
}

// 死循环
function loopForever(): never { // OK
    while (true) {};
}

// 利用never进行全面性检查
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}

// 来了来了，AnyScript的any
// any

// 普通类型会报错
/**
 * let a: string = 'seven';
 * a = 7;
 */
// TS2322: Type 'number' is not assignable to type 'string'.

// any类型，则允许被赋值为任意类型。
let po:any = 1;
po = 'a'
po = false;
po = null;

// 在any上访问任何属性都是允许的,也允许调用任何方法.
let anyThingq:any = 'hello';
console.log(anyThingq.myName);
let anyThing:any = 'Tom';

// 会被识别成any
let something;
something = 'seven';
something = 7;
// something.setName('Tom');

// 最后，不要用any！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
// 实在拿你没有办法呢（摘下眼镜）
// 没办法的时候还是用吧

// 所以引入了unknown
// 如果不确定类型的话，无法使用方法和属性
let uuu:unknown = 1;
if(typeof uuu === 'number'){
    let k:number = uuu;
}

// 任何类型的值都能赋值给它
// unknown只能赋值给unknown和any

//四个包装对象
// Number、String、Boolean、Symbol
let numw: number = 0;
let Num: Number = 0;
Num = numw; // ok
// numw = Num; 
// ts(2322)报错

/**
 * JavaScript 中以下类型被视为原始类型：
 * string、boolean、number、bigint、symbol、null 和 undefined。
 */
// object和Object和{}
// 小 object 代表的是所有非原始类型，也就是说我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。
let lowerCaseObject: object;
// lowerCaseObject = 1; // ts(2322)报错
// lowerCaseObject = 'a'; // ts(2322)报错
// lowerCaseObject = true; // ts(2322)报错
// lowerCaseObject = null; // ts(2322)报错
// lowerCaseObject = undefined; // ts(2322)报错
lowerCaseObject = {}; // ok

// 大Object 可以接受原始类型和非原始类型，但是严格模式下不能接受null和undefined
let upperCaseObject: Object;
upperCaseObject = 1; // ok
upperCaseObject = 'a'; // ok
upperCaseObject = true; // ok
// upperCaseObject = null; // ts(2322)报错
// upperCaseObject = undefined; // ts(2322)报错
upperCaseObject = {}; // ok

// 他们两（Object和object）互为父子
type isLowerCaseObjectExtendsUpperCaseObject = object extends Object ? true : false; // true
type isUpperCaseObjectExtendsLowerCaseObject = Object extends object ? true : false; // true
upperCaseObject = lowerCaseObject; // ok
lowerCaseObject = upperCaseObject; // ok

// {}空对象类型和大 Object 一样，也是表示原始类型和非原始类型的集合，并且在严格模式下，null 和 undefined 也不能赋给 {} 
let ObjectLiteral: {};
ObjectLiteral = 1; // ok
ObjectLiteral = 'a'; // ok
ObjectLiteral = true; // ok
// ObjectLiteral = null; // ts(2322)
// ObjectLiteral = undefined; // ts(2322)
ObjectLiteral = {}; // ok
type isLiteralCaseObjectExtendsUpperCaseObject = {} extends Object ? true : false; // true
type isUpperCaseObjectExtendsLiteralCaseObject = Object extends {} ? true : false; // true
upperCaseObject = ObjectLiteral;
ObjectLiteral = upperCaseObject;

/**
 * 综上结论：{}、大 Object 是比小 object 更宽泛的类型（least specific），
 * {} 和大 Object 可以互相代替，用来表示原始类型（null、undefined 除外）和非原始类型；
 * 而小 object 则表示非原始类型。
 */

// 类型推断
// 原来我们是这样的
{
    let str: string = 'this is string';
    let num: number = 1;
    let bool: boolean = true;
}

{
    const str: string = 'this is string';
    const num: number = 1;
    const bool: boolean = true;
}

{
  let str = 'this is string'; // 等价
  let num = 1; // 等价
  let bool = true; // 等价
}
{
  const str = 'this is string'; // 不等价
  const num = 1; // 不等价
  const bool = true; // 不等价
}
// 可以根据参数类型推断出返回值类型
{
  /** 根据参数的类型，推断出返回值的类型也是 number */
  function add1(a: number, b: number) {
    return a + b;
  }
  const x1= add1(1, 1); // 推断出 x1 的类型也是 number
  
  /** 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字 */
  function add2(a: number, b = 1) {
    return a + b;
  }
  const x2 = add2(1);
  // const x3 = add2(1, '1'); 
  // ts(2345) Argument of type "1" is not assignable to parameter of type 'number | undefined
}

// 如果定义的时候没有赋值，不管之后有没有赋值，都推断为any
// 此处被推断为any
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// 类型断言
const arrayNumber:number[] = [1,2,3,4,5]
// const greaterThan2:number = arrayNumber.find(num => num>2) // 报错

// 应该断言
const greaterThan2:number = arrayNumber.find(num => num>2) as number;
// 断言了一定是number

// 也可以使用
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 尖括号语法

// 但是可能会和react jsx语法冲突，所以不用

// 确定赋值断言
let xq!:number;
init();
console.log(2*xq)

function init(){
    xq=10;
}
// 通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。


// 字面量类型
{
    let specifiedStr: 'this is string' = 'this is string';
    let specifiedNum: 1 = 1;
    let specifiedBoolean: true = true;
}
//例如这个，就是类型为this is string，即this is string是string的子类型
// 目前，TypeScript 支持 3 种字面量类型：字符串字面量类型、数字字面量类型、布尔字面量类型，对应的字符串字面量、数字字面量、布尔字面量分别拥有与其值一样的字面量类型

// 字符串字面量类型
let hello:'hello' = 'hello'
// zfc = 'hi' 报错！

// 可以把多个字面量类型组合成一个联合类型
type Direction = 'up' | 'down';

function move(dir: Direction) {
  // ...
}
move('up'); // ok
// move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'

// 数字字面量类型及布尔字面量类型
interface Config{
    size:'small' | 'big';
    isEnable: true | false;
    margin: 0 | 2 | 4;
}
