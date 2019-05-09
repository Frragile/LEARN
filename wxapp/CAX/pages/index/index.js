// require: es5就支持，是node普遍采用的模块化方案，封装到单独的文件，然后向外输出 [commonJS规范]
// import from: es6模块化方案
import cax from '../../cax/index'
Page({
  onLoad(options){
    const info = wx.getSystemInfoSync(); //获取设备的宽高
    // console.log(info);
    // canvas绘制了
    const stage = new cax.Stage(info.windowWidth,info.windowHeight,'myCanvas',this);
    const rect = new cax.Rect(100,100,{
      fillStyle:'black'
    });
    rect.originX = 50;//设置基点
    rect.originY = 50;
    rect.x = 100;//设置位置
    rect.y = 100;
    rect.rotation = 30; //旋转30度
    stage.add(rect);//将运动的动画角色添加到场景中
    //按钮
    const button = new cax.Button({width:100,height:40,text:'Click Me!'});
    button.x =20;
    button.y = 170;
    stage.add(button)
    //绘图
    const bitmap = new cax.Bitmap('/images/wx.png')
    bitmap.on('tap',()=> {
      console.log ('bitmap tap');
    })
    stage.add(bitmap)
    //精灵图
    const sprite = new cax.Sprite({
      framerate:7,
      imgs:['/images/mario-sheet.png'],
      //声明每一帧 x,y,宽,高
      frames:[
        [0, 0, 32, 32],
        [32 * 1, 0, 32, 32],
        [32 * 2, 0, 32, 32],
        [32 * 3, 0, 32, 32],
        [32 * 4, 0, 32, 32],
        [32 * 5, 0, 32, 32],
        [32 * 6, 0, 32, 32],
        [32 * 7, 0, 32, 32],
        [32 * 8, 0, 32, 32],
        [32 * 9, 0, 32, 32],
        [32 * 10, 0, 32, 32],
        [32 * 11, 0, 32, 32],
        [32 * 12, 0, 32, 32],
        [32 * 13, 0, 32, 32],
        [32 * 14, 0, 32, 32]
      ],
      //cax可以将雪碧图的某几帧抽出来，单独定义一个动画的概念 极大降低了维护一个英雄的成本
      animations:{
        walk:{
          frames:[0,1]
        },
        happy:{
          frames:[11,12,13,14]
        },
        win:{
          frames:[7,8,9,10]
        }
      },
      //定义当前状态
      currentAnimation:'happy'
    })
    sprite.x = 100
    sprite.y = 100
    stage.add(sprite)

    //选择一个形状 让他2s之后去.to().x(200,2000) 弹簧进出
    cax.To.get(rect).to().x(200,2000,cax.easing.elasticInOut).start(); 
    stage.update();//更新界面
    setInterval(function(){
      stage.update();
    })

  }
})