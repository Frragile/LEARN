[twitter]()
写一个函数 参数为 一句话，英文的 将
- 如果字符超过140字，返回false
- 如果是空字符，返回false
- 以#开始
- 每个单词首字母大写

hello miss dong
#Hello Miss Dong


- stringObject.split(separator,howmany) 字符串或正则表达式，从该参数指定的地方分割 stringObject。
'hello world miss'.split(' ')
(3) ["hello", "world", "miss"]

'hello world miss'.split(' ').map(word => word.charAt(0))
(3) ["h", "w", "m"]

'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase())
(3) ["H", "W", "M"]

- arrayObject.slice(start,end) 规定从何处开始选取。
'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
(3) ["Hello", "World", "Miss"]

'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
"Hello World Miss"


