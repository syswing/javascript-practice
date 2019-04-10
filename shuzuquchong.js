let arr = [ 'ssss','aaaaa','asdf','123','111222aa','bbac','ssss','123','qwe12e','bbac',123,new String('1'),undefined,NaN ];
function shuzuquchong(arr){
    let obj = {};
    for(var i in arr ){
        obj[arr[i]] = 1;
    }
    return obj;
}

var unique = (a) => [...new Set(a)]


console.log([...new Set([1,2,3,4,4])])