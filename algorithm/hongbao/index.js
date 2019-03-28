function hongbao(total, num) {
    const arr = [];
    let restAmount = total; //余额初始化为总金额
    let restNum = num; //
    
    for (let i=0; i<num-1; i++) {//还余一个不发
        //0-1随机数 * 平均值的2倍
        let amount = parseFloat(Math.random() * (restAmount/restNum * 2)).toFixed(2);//剩余2位小数
        restAmount -= amount; // a -= b  a = a-b  a += b a = a+b 
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    //最后一人拿最后的restAmount
    return arr;
} 
console.log(hongbao(20, 44));