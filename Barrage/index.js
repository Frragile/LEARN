let data = [
  {value:'Hyukoh的Gondry，好好听！',time:5,color:'red',speed:2,fontsize:22},
  {value:'喜欢！',time:30,color:'green',speed:1,fontsize:18},
  {value:'好听！！！',time:6,color:'yellow',speed:1,fontsize:14},
  {value:'吴赫太棒了！',time:11,color:'blue',speed:1,fontsize:16},
  {value:'新专辑也很好听！',time:8,color:'orange',speed:1,fontsize:20},
  {value:'！！冲啊！！！！！',time:2},
  {value:'捉到一个绿光头！嘻嘻嘻！！',time:15},
  {value:'第一！！',time:1},
]

//准备工作 获取所有需要的DOM结构
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn =doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

// 创建一个CanvasBarrage的类
// 构造函数内的属性和方法都能被实例继承，提高代码的复用性
// class 构造函数的函数名必须要大写
class CanvasBarrage {
  constructor(canvas,video,opts={}){
    //如果canvas和video都没有传的话
    if (!canvas||!video){
      return;
    }

    //增加属性，挂载到this上
    //在this里面加一个video等于传进来的video
    this.video = video;
    this.canvas = canvas;

    this.canvas.width = wideo.width;
    this.canvas.height = video.height;

    //获取画布
    this.ctx = canvas.getContext('2d');

    //设置默认参数，如果没有传就用默认值定义一个
    let defOpts = {
      color: '#e91e63',
      speed:1.5,
      opacity:0.5,
      fontsize:20,
      data:[]
    };

    //合并对象全部挂载到this实例上
    Object.assign(this,defOpts,opts)
    //添加属性 用来判断播放状态 定义一个开关变量 点击播放才出现弹幕 
    this.isPaused = true;
    //获取所有的弹幕消息
    this.barrages = this.data.map(item => new Barrage(item,this))
    //渲染
    this.render();
  }

  //function render(){}
  render() {
    //渲染的第一步是清除原来的画布
    this.clear();
    //渲染弹幕
    this.randerBarrage();
    //如果没有暂停的话就继续渲染
    if(this.isPaused === false){
      requestAnimationFrame(this.render.bind(this));
    }
    
    // 定义 clear 清除整个画布
    clear(){
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas,height)
    }
    // 定义 randerBarrage
    randerBarrage(){
      //要根据当前视频播放的时间 和弹幕展示的时间 作比较 来判断是否展示弹幕
      let time = this.video.currentTime;
      //遍历一下所有弹幕
      this.barrages.forEach(barrage => {
        //只有在视频播放时间大于等于弹幕展示时间 才做处理
        if (!barrage.flag && time >=barrage.time){
          //判断当前弹幕是否初始化了
          if(!barrage.isInit){
            barrage.init();
            barrage,isInit = true;
          }
          //弹幕从右往左渲染，所以X坐标减去当前弹幕speed
          barrage.x -= barrage.speed;
          barrage.render() //渲染当前弹幕

          //如果当前弹幕的x坐标比自身的宽度还小，就表示渲染结束
          if(barrage.x < -barrage.width){
            barrage.flag = true;
          }
        }
      })
    }
    //添加一个add方法 每次点发送按钮时，再添加一条Barrages实例
    add(obj)
    this.barrages.push(new Barrage(obj, this))
  }
}

//创建 barrage类，用来实例化每一条弹幕
class Barrage {
  constructor(obj,ctx){
    this.value = obj.value
    this.time = obj.time
    //把obj和ctx都挂载到this上，方便获取
    this.obj = obj
    this.context = ctx
  }
  //初始化弹幕
  init() {
    //如果数据里面没有涉及到下面四种参数，就取默认值
    this.color = this.obj.color || this.context.color
    this.speed = this.obj.speed || this.context.speed
    this.opacity = this.obj.opacity || this.context.opacity
    this.fontsize = this.obj.fontsize || this.context.fontsize

    //为了计算每条弹幕的宽度，我们必须创建一个元素p，然后计算文字的宽度
    let p =document.createElement('p')
    p.style.fontsize = this.fontsize + 'px'
    p.innerHTML = this.value
    this.width = p.clientWidth;
    document.body.removeChild(p)

    //设置弹幕出现的位置
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random();

    // 做一下超出范围的处理
    if (this.y<this.fontsize){
      this.y=this.fontsize
    }else if(this.y>this.context.canva.height - this.fontsize){
      this.y = this.context.canva.height - this.fontsize  
    }
  }
  //渲染每一条弹幕
  render(){
    //设置画布文字和字体
    this.context.ctx.font = `${this.fontsize}px Arial`
    //设置画布的文字颜色
    this.context.ctx.fillStyle = this.color
    //绘制文字
    this.context.ctx.fillText(this.value, this.x, this.y)
  }
}

let canvasBarrage = new CanvasBarrage(canvas,video,{data})
//设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play', () => {
  canvasBarrage.isPaused = false;
  canvasBarrage.render()//触发弹幕

})
