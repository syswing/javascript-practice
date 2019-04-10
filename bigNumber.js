function add(a, b) {
    let _a = a.split('')
    let _b = b.split('')
    let caculator = (num1 ,num2, num3) => {
        let result = typeof num3 === 'undefined' ? Number(num1) + Number(num2) : Number(num1) + Number(num2) + num3
        return result
    }
    let times = _a.length > _b.length ? _b.length : _a.length
    let ans = new Array();
    let n = 0
    for(let i = 0 ; i< times ;i++){
        console.log(_a[_a.length -1 - i],_b[_b.length - i - 1])
        let res = caculator(_a[_a.length -1 - i],_b[_b.length - i - 1] , n)
        // console.log(res)
        let e = res % 10;
        n = Math.floor(res / 10);
        ans.unshift(e) 
    }
    if(_a.length > _b.length){

    }else{

    }
    console.log(ans)
    // return (Number(a) + Number(b)).toString(); // Fix me!
}
let a = add("1123","223427");
console.log(a);