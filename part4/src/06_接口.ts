(function (){
    type myType = {
        name: string,
        age: number,
    }
    /*
    * 接口：用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    * */
    interface myInterface {
        name: string,
        age: number,
    }
    interface myInterface {
        gender: string,
    }
    // 接口可以重复声明，会进行合并
    const obj:myType = {
        name: '小明',
        age: 18,
    }
    const obj2:myInterface = {
        name: '小明',
        age: 18,
        gender: '男',
    }


    // 接口只定义对象的结构，而不考虑实际值
    interface myInterface2 {
        name: string,
        sayHello(): void,
    }

    class MyClass implements myInterface2 {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
})();
