// 游戏控制模块
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import * as events from "events";
class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = 'Right';
    isLive = true;
    private YDirectionEvents: string[] = ['ArrowUp', 'Up', 'ArrowDown', "Down"];
    private XDirectionEvents: string[] = ['ArrowLeft', 'Left', 'ArrowRight', "Right"];

    constructor(maxLevel: number = 10, level: number = 1) {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(maxLevel, level);

        this.init();
    }

    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    // 键盘按下的响应函数
    keydownHandler(event: KeyboardEvent){
        // 需要检查event.key的值是否合法
        if (this.direction === event.key) return;
        switch (event.key) {
            case 'Up':
            case 'ArrowUp':
            case 'Down':
            case 'ArrowDown':
                if (this.YDirectionEvents.includes(this.direction)) return;
                this.direction = event.key
                break;
            case 'Left':
            case 'ArrowLeft':
            case 'Right':
            case 'ArrowRight':
                if (this.XDirectionEvents.includes(this.direction)) return;
                this.direction = event.key
                break;
        }
        // this.run();
    }
    // 移动蛇的方法
    run(){
        console.log('run')
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        // 根据按键方向修改X和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        if(this.checkEat(X,Y)){
            this.snake.addBody()
            this.food.change(this.snake.bodies);
            this.scorePanel.addScore();
        }


        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e:any){
            alert(e.message + 'GAME OVER!');
            this.isLive = false;
        }

        // 开启一个定时调用
        this.isLive && setTimeout(
            this.run.bind(this)
        ,300 - (this.scorePanel.level - 1) * 30);
    }

    checkEat(X: number, Y: number) {
        return (X === this.food.X && Y === this.food.Y);
    }
}
export default GameControl;
