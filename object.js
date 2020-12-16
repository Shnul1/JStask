var originObj = {
    name:'Test',
    age:28,
    sex:'男',
    single:false,
    children:[
       {
        name:'Son1',
        age:8,
        sex:'男',
        single:true,
        children:[]
      }
    ],
    wife:{
      name:'Test2',
      age:28,
      sex:'女',
      single:false,
    }
}
//JSON实现深拷贝
let personA = JSON.parse(JSON.stringify(originObj));
console.log(personA);

//深拷贝递归基础方法
function deepClone(obj) { 
    if(obj === null) return null 
    if(typeof obj !== 'object') return obj;
    let newObj = new obj.constructor();
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {//判断对象的属性是否存在
            var val = obj[key];
            newObj[key] = typeof val === 'object' ? deepClone(val) : val;
        }
    }  
    return newObj;  
};

let personB = deepClone(originObj);
console.log(personB);

//使用Object.prototype.toString.call判断类型
function getType(obj){
    let res = Object.prototype.toString.call(obj);
    return res.slice(8, res.length-1);
}

function deepClone1(obj){
    if(getType(obj) === 'Array'){
        var res = [];
    }else if(getType(obj) === 'Object'){
        var res = {};
    }else{
        return obj;
    }
    for(let key in obj){
        res[key] = deepClone1(obj[key]);
    }
    return res;
}

let personC = deepClone1(originObj);
console.log(personC);

/*拍平对象
把对象里面的内容深拷贝出来然后用.拼接*/
var a = { a: { b: { c: 1 } }, d: 1 }

function flatObj(obj){
    let result = {};
    function recurse(src, prop) {
        if (getType(src) === 'Object'){
            var isEmpty = true;
            for (var p in src) {
                isEmpty = false;
                recurse(src[p], prop ? prop + '.' + p : p)
            }
            if (isEmpty && prop) {
                result[prop] = {};
            }
        }else {
            result[prop] = src;
        }
    }
    recurse(obj,'');
    return result;
}
console.log(flatObj(a));

//对象转换为二维数组
let b = { a: 1, b: 2 };

function objToArray1(obj){
    let result = [];
    for(let key in obj){
        let newObj = {};
        newObj[key] = obj[key];
        result.push(newObj);
    }
    return result;
}
console.log(objToArray1(b));

// function objToArray(obj){
//     let result = [];
//     if(getType(obj) === 'Object'){
//         for(let key in obj){
//             if (obj.hasOwnProperty(key)) {//判断对象的属性是否存在
//                 var val = obj[key];
//                 (typeof val === 'object' ? objToArray(val) : val);
//             }
//         }
//     }
// }