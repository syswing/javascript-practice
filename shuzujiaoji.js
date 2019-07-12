/**
 * 数组交集
 */
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
var intersection = function(nums1, nums2) {
    let t = []
    if(nums2.length > nums1.length){
        for(let i = 0; i< nums2.length;i++){
            if( nums1.indexOf(nums2[i]) >= 0 )
                if(t.indexOf(nums2[i]) === -1){
                    t.push(nums2[i])
                }
        }
    }else{
        for(let i = 0; i< nums1.length;i++){
            if(nums2.indexOf(nums1[i]) >= 0 )
            if(t.indexOf(nums1[i]) === -1){
                t.push(nums1[i])
            }
        }
    }
    return t
};

// const intersection = (nums1, nums2) => {
//     const s1 = new Set(nums1)
//     const s2 = new Set(nums2)
//     const result = []
//     for (let num of s1.values()) {
//         if (s2.has(num)) {
//         result.push(num)
//         }
//     }
//     return result
// }


console.log(intersection(nums1, nums2))