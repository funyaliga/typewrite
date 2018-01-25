/**
 * 
 * 打字效果
 * @param {any} ele 选择器
 * @param {any} words 内容
 * @param {number} speed 速度
 */

const DEFAULTS = {
    ele: '.typewrite',
    words: '',
    speed: 200
}

class typewrite {
    constructor(options) {
        this.o = Object.assign({}, DEFAULTS, options) 
        this.w = this.o.words;
        this.i = 0 
        this.len = this.o.words.length
        this.flag = true // 最后闪烁标记标记
        this.dom = document.querySelectorAll(this.o.ele)
        this.timer = null;
        if(this.dom.length){
            this.star()
        }
    }

    html(doms, content) {
        doms.forEach(dom => {
            dom.innerHTML = content
        })
    }

    star() {
        this.html(this.dom, this.w.substring(0, this.i++) + "_")
        if (this.i == this.w.length + 1) {
            setInterval(() => {
                this.flag ?  this.html(this.dom, this.w.substring(0, this.i)) : html(this.dom, this.w.substring(0, this.i)+'_')
                this.flag=!this.flag;
            }, this.o.speed*2);
        } else{
            this.timer = setTimeout(
                this.star.bind(this),
                this.o.speed
            )
        }
    }
    
}

export default typewrite