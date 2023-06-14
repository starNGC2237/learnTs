class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 最高等级
    maxLevel: number
    // 升级分数
    upScore: number

    constructor(maxLevel = 10, upScore = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}
export default ScorePanel;
