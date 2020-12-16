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

  function deepClone(originObj){
      let newObj = {};
      for(let i in originObj){
          let prop = originObj[i];
          if(prop === newObj){
              continue;
          }

          if (typeof prop === 'object'){
              newObj[i] = (prop.constructor === Array) ? [] : {};
              arguments.callee(prop, newObj[i]);
          }else{
              newObj[i] == prop;
          }
      }
      return newObj;
  }

var a = deepClone(originObj);
console.log(a);