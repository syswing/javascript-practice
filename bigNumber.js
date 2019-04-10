function add(a, b) {
    let _a = a.split('')
    let _b = b.split('')
    let caculator = (num1 ,num2, num3) => {
        let result = typeof num3 === 'undefined' ? Number(num1) + Number(num2) : Number(num1) + Number(num2) + num3
        return result
    }
    let times = _a.length > _b.length ? _a.length : _b.length
    let ans = new Array();
    let n = 0
    for(let i = 0 ; i< times;i++){
        let res = 0
        if(_a.length -1 - i < 0){
            res = caculator(_b[_b.length - i - 1],n)
        }else if(_b.length - 1 -i < 0){
            res = caculator(_a[_a.length - i -1],n)
        }else{
            res = caculator(_a[_a.length -1 - i],_b[_b.length - i - 1] , n)
        }
        let e = res % 10;
        n = Math.floor(res / 10);
        ans.unshift(e) 
        if(i === times - 1 && n !== 0){
            ans.unshift(n)
        }
    }
    return ans.join('')
}