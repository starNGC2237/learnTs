// 定义食物类
class Food {
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('food')!;
    }

    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
    }

    change(snakeBody:HTMLCollection) {
        const left = Math.floor(Math.random() * 29) * 10
        const top = Math.floor(Math.random() * 29) * 10
        // 食物不能出现在蛇的位置
        let foodInSnake: boolean = false;
        for (let i = 0; i < snakeBody.length; i++) {
            let body = <HTMLElement>snakeBody[i];
            if (left === body.offsetLeft && top === body.offsetTop) {
                foodInSnake = true
            }
        }
        if (foodInSnake) {
            this.change(snakeBody);
        } else {
            this.element.style.left = left + 'px'
            this.element.style.top = top + 'px'
        }
    }
}
export default Food;
