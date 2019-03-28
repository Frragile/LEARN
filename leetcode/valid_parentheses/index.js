let arr = [];//数组 数据的集合
arr.push("{"); //push推进最后一个
console.log(arr, arr.length);
console.log(typeof arr);
arr.push("}");
console.log(arr);
arr.pop();// pop 消除最后一个元素 出数组末尾那个
console.log(arr);
arr.unshift("]"); //unshift推进第一个
console.log(arr);
arr.shift(); //shift出数组第一个
console.log('----',arr);
arr.forEach(item => {
    console.log(item);
})
//push pop头部操作增减，unshift shift尾部操作增减

// 如何来做匹配规则
let obj = {};
obj["{"] = "}";
obj["("] = ")";
obj["["] = "]";
// "()"; sta[0] = "(" ")"
let sta = ["("];
let s = ")";
if (obj[sta[sta.length-1]] === s){//取栈顶
    sta.pop();
}
console.log(!sta.length); //若是0 true|false