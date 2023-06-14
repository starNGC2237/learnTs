class Person{
    readonly name:string='孙悟空';
    static age:number=18;

    static sayHello(){
        console.log('hello')
    }
}

const p = new Person()
console.log(Person.age)
// 尝试分配给常量或只读变量
// p.name = 'sss'
Person.sayHello()
