class Dog{
    private name: string;
    private age: number;
    constructor(name:string,age:number) {
        // 当构造函数被调用时，会执行里面的代码
        console.log('构造函数被调用了')
        this.name = name
        this.age = age
    }
    bark(){
        console.log(this)
        console.log('汪汪汪')
    }
}
const dog = new Dog('狗1',1)
const dog2 = new Dog('狗2',2)
const dog3 = new Dog('狗3',3)
const dog4 = new Dog('狗4',4)


console.log(dog)
console.log(dog2)
console.log(dog3)
dog4.bark()
