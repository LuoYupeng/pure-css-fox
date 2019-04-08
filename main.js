!function () {
    var duration = 40
    $('.actions').on('click', 'button', function (e) {
        let $button =$(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 80
                break
            case 'normal':
                duration = 40
                break
            case 'fast' :
                duration = 8
                break
        }
    })


   function writeCode(prefix, code, fn) {
       let container =document.querySelector('#code')
       let styleTag = document.querySelector('#styleTag')
       let n = 0
       setTimeout(function run() {
           n += 1
           container.innerHTML = Prism.highlight(code.substring(0, n),Prism.languages.css)
           styleTag.innerHTML = code.substring(0, n)
           container.scrollTop = container.scrollHeight
           if(n < code.length) {
               setTimeout(run, duration)
           }else{
               fn && fn.call()
           }
       },5)
   }

   let code =`
/*
 * 在这里，为大家展示如何画一个简易的可爱的小狐狸
 * 首先，需要准备一个背景
 */       
.preview{
    height: 100%;
    background: #178;
}
/*
 * 现在让我们画小狐狸一个圆圆的头
 */ 
.fox{
    top: 50%;
    left: 50%;
    width: 215px;
    height: 275px;
    position: relative;
    transform: translate(-50%,-50%);

} 
.head{
    position: absolute;
    height: 182px;
    width: 182px;
    background-color: #cf712f;
    border-radius: 50%;
    left: 32px;
    z-index: 2;
    overflow: hidden;
}
/*
 * 接下来画小狐狸两个雪白的脸颊
 */ 
.head::before, .head::after{
    content:'';
    width: 182px;
    height: 182px;
    background-color: white;
    border-radius: 50%;
    bottom: -91px;
    position: absolute;
    z-index: 1;
}
.head::before{
    left:-91px;
}
.head::after{
    right:-91px;
}
/*
 * 再接着画两个小眼睛
 */ 
.head .eye{
    width: 18px;
    height: 9px;
    border-radius: 18px 18px 0 0;
    background-color:  black;
    /* transform:rotate( 45deg); */
    position: absolute;
    z-index: 2;
    bottom: 38px;
    animation: blink 5s step-start 0s infinite;
}
.head .eye:nth-child(odd){
    left: 36px;
    transform: rotate(45deg);
}
.head .eye:nth-child(even){
    right: 36px;
    transform: rotate(-45deg);
}
/*
 * 然后画两个尖尖的耳朵
 */ 
.ear{
    width: 93px;
    height: 93px;
    display: block;
    background: #ff9090;
    position: absolute;
    top: 0px;
}
.ear:nth-child(odd){
    border-radius: 0 93px 0 0;
    left: 33px;
}
.ear:nth-child(even){
    border-radius: 93px 0 0 0;
    right: 2px;

}
/*
 * 当然小黑鼻也不能少
 */ 
.nose{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    right: 50%;
    margin-right:-28px;
    top: 169px;
    z-index: 2;
    background-color: black;
}
/*
 * 紧接着，让我们来画小狐狸的身体和尾巴
 */ 
.body{
    width: 106px;
    height: 212px;
    display: block;
    background: #cf712f;
    border-radius: 0 424px 424px 0;
    position: absolute;
    z-index: -1;
    bottom: 1px;
    right: 0px;
}
.tail{
    width: 212px;
    height: 106px;
    position: absolute;
    background-color: #cf712f;
    border-radius: 106px;
    z-index: -1;
    top:168px;
    overflow: hidden;
    border-radius:  0 0 424px 424px;
}
/*
 * 最后，小狐狸尾巴那一戳尖尖的白毛
 */ 
.tail::after{
    content:'';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 0 0 60px 0;
    background-color: white;
}
/*
 * 让我们加点小动画，让小狐狸眼睛眨起来
 */ 
@keyframes blink{
    15% {
        height: 1px;
    }
    45% {
        height: 9px;
    }
    50% {
        height: 1px;
    }
}
/*
 * 再加点其他特效，具体什么效果呢？记得把你的鼠标移到小狐狸身上哦！
 */ 
.fox:hover .ear:nth-child(odd) {
    left: 48px;
}
.fox:hover .ear:nth-child(even) {
    right: -1px;
    top: 22px;
}
.fox:hover .nose {
    width: 20px;
    height: 20px;
    top: 168px;
    right: 133px;
}
.fox:hover .ear, .fox:hover .head{
    transform: rotate(15deg);
    background: #dbffff;
}
.fox:hover .head, .fox:hover .body, .fox:hover .tail{
    background-color: #afd6e4;

}
/*
 * 好了，把你的鼠标移到小狐狸身上吧！
 *
 * 到这里，我们整个画画就结束了，这只小狐狸就送给你啦！
 */ 
       `
       writeCode('',code)


}.call()