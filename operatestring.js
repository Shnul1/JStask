let string = "hello world";
console.log(string.substring(2, 4));
console.log(string.substring(0));
console.log(string.substr(2, 4));
console.log(string.substr(0));
console.log(string.sub());

let url = [
    'https://www.baidu.com/',
    'https://music.163.com/',
    'http://192.168.1.1/userlogin',
    'http://192.168.1.1/p/#name',
    'https://www.yuque.com/docs/share/12345',
    'hello/11111'
]

function isUrl(url){
    let regularExp = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i;
    if(!(url.forEach((value) => {
        return regularExp.test(value);
    }))){
        console.log('存在不正确url\n')
    }
    else{
        console.log('url全部正确')
    }
}

function urlPara(url){
    let regularExp = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i;
    info = ['完整URL', '协议', '地址', '端口', '路径', '查询', '锚点'];
    url.forEach((value) => {
        result = regularExp.exec(value);
        for (let i = 0; i < result.length; i++) {
            console.log(`${info[i]} = ${result[i]}`);
        }
    })
}

isUrl(url);
urlPara(url);