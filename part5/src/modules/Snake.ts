class Snake{
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        if(this.X === value){
            return;
        }
        // 修改X时，是在修改水平坐标，蛇在左右移动，不能向反方向移动
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if(value > this.X){
                // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X - 10;
            }else{
                // 向左走
                value = this.X + 10;
            }
        }
        // X的值的合法范围0-290之间
        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了！');
        }

        this.moveBody()
        this.head.style.left = value + 'px';
        this.checkHeadBody()
    }

    set Y(value) {
        if(this.Y === value){
            return;
        }
        // 修改Y时，是在修改垂直坐标，蛇在上下移动，不能向反方向移动
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            // console.log('垂直方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if(value > this.Y){
                // 如果新值value大于旧值Y，则说明蛇在向下走，此时发生掉头，应该使蛇继续向上走
                value = this.Y - 10;
            }else{
                // 向上走
                value = this.Y + 10;
            }
        }
        // Y的值的合法范围0-290之间
        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了！');
        }
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHeadBody()
    }
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody() {
        // 将后边的身体设置为前边身体的位置
        // 遍历获取所有的身体
        for(let i = this.bodies.length - 1; i > 0; i--){
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    checkHeadBody(){
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for(let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！');
            }
        }
    }
}

export default Snake;
