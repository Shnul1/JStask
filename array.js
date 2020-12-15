let fruitArray = ['orange', 'apple', 'banana', 'bear', 'grape'];

function select(num){
    console.log(fruitArray[num]);
}
select(3);

console.log('增删改')
//增删改
fruitArray.splice(2,0,'watermelon');
console.log(fruitArray);
fruitArray.splice(2,1,'peach');
console.log(fruitArray);
fruitArray.splice(2,1);
console.log(fruitArray);

console.log('增删改')
//增删改
let first = fruitArray.shift()
console.log(first);
fruitArray.unshift('peach');
console.log(fruitArray);
fruitArray.shift();
fruitArray.unshift(first);
console.log(fruitArray);

console.log('增删改')
//增删改
let last = fruitArray.pop();
console.log(last);
fruitArray.push('peach');
console.log(fruitArray);
fruitArray.pop('peach');
fruitArray.push(last);
console.log(fruitArray);

//排序算法
let numArray1 = [1, 2, 3, 4,  5, 6, 7, 8];

function disorder(arr){
    //获取数组长度
    let oldIndex = arr.length;
    while(oldIndex){
        let newIndex = parseInt(Math.random() * oldIndex--);
        let current = arr[oldIndex];
        arr[oldIndex] = arr[newIndex];
        arr[newIndex] = current;
    }
    return arr;
}

function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for (let j = 0; j < len-1-i; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j+1];        
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectSort(arr){
    let len = arr.length;
    let flag;
    for(let i = 0; i < len-1; i++){
        flag = i;
        for(j = i+1; j < len; j++){
            if(arr[j] < arr[flag]){
                flag = j;
            }
        }
    arr[i], arr[flag] = arr[flag], arr[i]
    }
    return arr;
}

function insertSort(arr){
    let len = arr.length;
    let preIndex, current;
    for(let i = 1; i < len; i++){
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

function quickSort(arr, start, end){
    let i = start;
    let j = end;
    let flag = arr[start];
    if(start >= end){
        return arr;
    }
    while(i < j){
        while(arr[j] > flag && i < j){
			j--;
		}
		while(arr[i] <= flag && i < j){
			i++;
        }
        if(i < j){
			arr[i], arr[j] = arr[j], arr[i];
		}
    }
    arr[start] = arr[i]
	arr[i] = flag;
    quickSort(arr,start,i-1);
	quickSort(arr,i+1,end);
}

let disorderNumArray = disorder(numArray1);
console.log(disorderNumArray);
console.log(bubbleSort(disorderNumArray));
console.log(selectSort(disorderNumArray));
console.log(insertSort(disorderNumArray));
console.log(insertSort(disorderNumArray));

quickSort(disorderNumArray, 0, disorderNumArray.length-1)
console.log(disorderNumArray);

//数组的去重、取最大值、求平均值
let numArray2 = [1, 2, 4, 5, 7, 8, 6, 9, 9, 0, 1, 2];

//去重
function dupRemove(arr){
    let len = arr.length;
    let set = [];
    for(let i = 0; i < len; i++){
        if(arr.indexOf(arr[i])==i){
            set.push(arr[i]);
        }
    }
    return set;
}
//最大值
function max(arr){
    let len = arr.length;
    let sum = 0;
    for(i = 0; i < len; i++){
        sum += arr[i];
    }
    return sum
}
//平均值
function ave(arr){
    let ave = 0;
    let len = arr.length;
    ave = max(arr) / len;
    return ave;
}

console.log(dupRemove(numArray2));
console.log(max(numArray2));
console.log(ave(numArray2));

//reduce方法实现上面的内容
console.log("reduce方法实现上面的内容:")
let sum = numArray2.reduce((x,y) => x+y);
let average = sum / numArray2.length;
console.log(sum);
console.log(average);
let newArr = numArray2.reduce((pre,cur) => {
    if(!pre.includes(cur)){
        return pre.concat(cur)
    }else{
        return pre
    }
},[])
console.log(newArr);

//两个数组的操作
let numArrayA = [1, 2, 4, 5, 7, 8, 6, 9, 9, 0, 1, 2, 11, 55];
let numArrayB = [1, 2, 3, 5, 7, 8, 6, 7, 9, 0, 11];
//基础方法
function dupArr(arr1, arr2){
    arr1 = dupRemove(arr1);
    arr2 = dupRemove(arr2);
    let result = [];
    for(i = 0; i < arr1.length; i++){
        for(j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    console.log(result);
    return result;
}
dupArr(numArrayA, numArrayB);
//合并
let numArrayC = numArrayA.concat(numArrayB);
console.log(numArrayC);

function combine(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}
let numArrayD = combine(numArrayA, numArrayB);
console.log(numArrayD);

function different(arr1, arr2){
    let difference = arr1.
    filter(x => arr2.indexOf(x) == -1)
    .concat(arr2.filter(x => arr1.indexOf(x) == -1));
    return difference;
}
console.log(different(numArrayA, numArrayB));
