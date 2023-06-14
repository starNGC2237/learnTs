(function (){
    class Person {
        // 私有
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        // get、set方法
        /*
        *
        * getName() {
            return this.name;
        }
        getAge() {
            return this.age;
        }
        setName(name: string) {
            this.name = name;
        }
        setAge(age: number) {
            if (age >= 0) {
                this.age = age;
            }
        }
        * */
        // TS中设置getter、setter方法的方式
        get name() {
            return this._name;
        }
        set name(name: string) {
            this._name = name;
        }
        set age(age: number) {
            if (age >= 0) {
                this._age = age;
            }
        }
        get age() {
            return this._age;
        }
    }

    const p = new Person('孙悟空', 18);

    /*
    * 现在属性是在对象中设置的，属性可以任意的被修改
    * */
    // p.name = '猪八戒';
    // p.age = 28;
    // 赋值不上去
    // p.setAge(-28)
    console.log(p.name);



    class A {
        // 受保护的属性，只能在当前类和子类中访问，不能在外部访问
        protected num: number;
        constructor(num: number) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }

    const b = new B(123);
    b.test();


    class C {
        constructor(public name: string, public age: number) {
        }
    }

    const c = new C('猪八戒', 18);
    console.log(c);
})();
