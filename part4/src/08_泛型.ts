function fn<T>(a: T): T {
    return a;
}
let result1 = fn<number>(123);
let result = fn<string>('hello');


function fn2<T, K>(a: T, b: K): T {
    return a;
}
fn2<number,string>(123, 'hello');


interface Inter {
    length: number;
}

// T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length;
}

class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}


const mc = new MyClass<string>('孙悟空');
