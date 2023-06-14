(function (){
    class Animal{
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        sayHello() {
            console.log('动物在叫')
        }
    }

    class Dog extends Animal{
        sayHello() {
            console.log('汪汪汪')
        }
        run() {
            console.log(`${this.name}在跑`)
        }
    }

    const dog = new Dog('旺财', 3)
    console.log(dog)
    dog.sayHello()

    class Cat extends Animal{
        sayHello() {
            console.log('喵喵喵')
        }
    }
    const cat = new Cat('咪咪', 2)
    console.log(cat)
    cat.sayHello()



})();
