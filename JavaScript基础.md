# JavaScript 基础

## 变量作用域， 函数提升， 执行环境对象

```javascript
var spa = (function($){            //自执行匿名函数

    var
        configMap = {                //基于原型的继承， 变量提升， 变量作用域
            extended_height        : 434,
            extended_title        : 'Click to retract',
            retracted_height    : 16,
            retracted_title        : 'Click to extend',
            template_html        : '<div class="spa-slider"></div>'
        },
        $chatSlider,
        toggleSlider,
        onClickSlider,
        initModule
    ;

    initModule = function ( $container ) {
        $container.html(configMap.template_html);
        $chatSlider = $container.find('.spa-slider');
        $chatSlider.attr('title', configMap.retracted_title).click( onClickSlider );
        return true;
    };

    return { initModule    : initModule};
}(jQuery));
```

- 对象字面量： 用大括号括起来的一组：以逗号分隔的属性 所定义的对象。

```javascript
var spa = {
    title: 'Single Page Web Applications',
    authors: ['Mike Mikowski', 'Josh Powell'],
    buy_now: function(){
        console.log('Book is purchased');
    }
}
```

- 变量声明： 在顶部声明但不进行定义。

### 变量作用域

唯一能定义变量作用域的域块就是**函数** ， 函数就像监狱，而定义在其中的变量就是囚犯。

```javascript
var regular_man    = 'I am global';
function prison(){
    var prisoner = 'I am local';
}
prison();
console.log(regular_joe);
console.log(prisoner);
```

省略`var`的变量声明为全局变量。

关于`for`函数：

```javascript
function prison(){

    var i;                                //这种方式最好！
    for( i = 0; i < 10; i++){
    }
}
```

### 函数提升Hoist

在JS中， 当变量被声明时， 声明会被提升到它所在函数的顶部， 并被赋予`undefined`。 这使得在函数任意位置声明的变量存在于整个函数中，但在赋值之前，他的值一直为`undefined`。

```javascript
function hoisted(){
    console.log(v);            
    var v=1;
}

hoisted();        // undefined;
//=============================
function hoisted(){
    var v = undefined;
    console.log(v);
    v=1;
}
```

### 2.3 高级变量提升和执行环境对象

JS引擎在进入作用域时， 会对代码分两轮处理：

- 第一轮，初始化变量；（局部变量未被赋值，参数被赋值了

  - 声明并初始化函数参数
  - 声明局部变量
  - 声明并初始化函数

- 第二轮，执行代码
