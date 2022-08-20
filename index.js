function myEach(arr,callback){
    for(let el of arr) {
        callback(el)
    }
};

function callback(el) {
    let arr1 = []
    return arr1.push(el)
}