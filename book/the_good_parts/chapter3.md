# 对象字面量学习笔记
- 对象字面量

 1.对象字面量即 Object，通过key:value的i形式，描述出对象。语法的规则是{}

 2.对象有属性和方法，只要对象上有receiveFlower这个方法的对象，都可以收花。 接口 Interface。

- 检索

1.检索对象中包含的值["字符串表达式"]，若字符串表达式是常数，优先考虑.表示法
 
     stooge["first_name"] //"Joe"
     flight.departure.IATA//"SYD"

 若值并不存在，将返回undedined值    
 ||用来填充默认值(我的理解是取代返回的undefined变为其他字符显示)

- 更新

    stooge['first-name']='Jay';

- 引用

对象通过引用来传递，他们永远不会被拷贝。
    var x = stooge;
    x.nickname = 'Curly';
    var nick = stooge.nickname;
    //因为x和stooge是指对同一个对象的引用，所以nick为'Curly'
    var a = {}, b = {}, c = {};
    a,b,c = {};

- 原型

每个对象都连接到一个原型对象，并且他可以从中继承属性。所有通过对象字面量创建的对象都连接到 Object.prototype 这个JS中标准的对象。

    if (typeof Object.beget !== 'function'){
        Object.beget = function (o){
        var F = function(){};
        F.prototype = o;
        return new F();
        };
    }
    var another_stooge = Object.beget(stooge);

- 反射
检查对象并确定对象有什么属性 检索该属性并验证取得的值。

typeof操作符

    typeof flight.number  //'number'
    typeof flight.status  //'string'
    typeof flight.arrival //'object'
    typeof flight.manifest//'undefined'

请务必注意原型链中的任何属性也会产生一个值
    typeof flight.toString//'function'
    typeof flight.constructor //'function'

   处理不必要的属性

1.让你的程序检查并剔除函数值。一般来说，做反射的目标是数据，因此你应该意识到一些值可能是函数。

2.hasOwnProperty方法 如果对象拥有独有的属性，它将返回true。hasOwnProperty 方法不会检查原型链。

    flight.hasOwnProperty('number')   //true
    flight.hasOwnProperty('constructor') //false

- 枚举

for in语句可用来遍历一个对象中的所有属性名。该枚举过程将会列出所有属性，可过滤掉函数及无关值。最为常用的过滤器是 hasOwnProperty方法，以及使用 typeof 来排除函数：
    
    var name;
    for (name in another_stooge){
        if (typeof another_stooge[name] !== 'function){
            document.writeln(name+":"+another_stooge[name]) 
        }
    }

若想确保属性以特定的顺序出现，最好的办法是避免使用 for in 语句，而是创建一个数组，在其中以正确的顺序包含属性名。

    var i;
    var properties = [
        'first-name',
        'middle-name',
        'last-name',
        'profession'
    ];
    for (i=0 , i< properties.length; i+=1){
        document.writeln (properties[i] + ':' +another_stooge[properties[i]]);
    }

通过使用 for 而不是 for in ，可以得到我们想要的属性。

- 删除

delete运算符可以用来删除对象的属性。它将会移除对象中确定包含的属性，它不会触及原型链中的任何对象。

删除对象中的属性可能让来自原型链中的属性浮现出来。

    another_stooge.nickname //'Moe'

    //删除another_stooge的nickname属性，从而暴露出原型的nickname属性。

    delete another_stooge.nickname;
    another_stooge.nickname //'Curly'

- 减少全局变量污染

JavaScript 可以随意定义那些可保存所有应用资源的全局变量，但全局变量削弱了程序的灵活性，所以应当避免。

最小化使用全局变量的方法是在你的应用中只创建唯一一个全局变量：

    var MYAPP = {}

该变量此时变成了你的应用的容器

    MYAPP.stooge = {
        "first-name":"Joe",
        "last-name":"Howard"
    }
    MYAPP.flight = {
        airline:"Oceanic",
        number:815,
        departure:{
            IATA:"SYD",
            time:"2006-6-12 10:12",
            city:"Los Angeles"
        }
    };