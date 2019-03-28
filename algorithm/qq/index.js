let qq_number = "980220827";

// 函数表达式 将一个函数
/**
 * @param  qq type String
 * @return type Bool
 * @功能 判断QQ号是否合格
 * @desc 只能是数字 长度5位以上，13位以内
 */
const is_valid_qq = (qq) => { /*此处qq是局部变量 */
    if (!qq) return false;
    if(/^[0-9]{5,13}$/.test(qq)) {
        return true; 
    } else {
        return false;
    }
    // console.log(qq);
    // return true ;
};
console.log(is_valid_qq(qq_number));

//选择了一种数据结构 数组
let enc_qq = [9,8,0,2,2,0,8,2,7],
 qq = [],  /*此处qq为全局变量 */
 head = 0, /*此处head其实是一个指针 指向数组第一个元素 start开始 */
 tail = 9; /*尾部指针 end 结束*/
while (head < tail) //当 head = tail 数组为空 停止循环
{// 拿到一个正确的数字，操作原来的两个数字，完成一次循环
    qq.push(enc_qq[head]); //拿到数组第一个数字
    head++; //将数组start指针指向第二个数字
    enc_qq[tail] = enc_qq[head]; //第二个数(此时是数组的head)移到队伍尾部？
    head++;//此时start指针为第三个数
    tail++;//数组末尾留空
}
 console.log(qq);/*打印出删除?的元素 */
