(function (){
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        abstract sayHello():void;
    }
    class  Dog extends Animal {
        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            console.log('汪汪汪~');
        }
    }


    // 子类必须实现抽象类中的抽象方法
    class Cat extends Animal {
        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            console.log('喵喵喵~');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
    // TS2511: Cannot create an instance of an abstract class.
    // const animal = new Animal('蛇');
})();
