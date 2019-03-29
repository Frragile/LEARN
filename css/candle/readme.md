##stylus进阶
- for循环
body 
  for num in 1 2 3 
  for num in 1..200 表示一个区间
    foo num

- if
box(x,y,margin=false)
 padding y x 
 if margin
    margin y x

## CSS Candel
1. mixin 与 函数 的区别
  mixin 是一段样式的封装，可以在引用的地方复用 stylus是用的最多的
  函数 有返回值， random(min,max)

2. stylus 有内置的函数库
  floor math(0,'random') unit(, 'px')

3. 200个元素 stylus for
  for num in 1..200
    .g-ball:nth-child({num})
      $width = random(0, 40)
      width unit($width, 'px')
      
4. fliter contrast(20)
  mix-blend-mode: screen;
