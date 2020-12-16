### 浏览器相关及练习：



#### Dom操作、浏览器地址操作：

JavaScript 原生方法对Dom节点的操作包括：访问（查找）、创建、添加、删除、替换、插入、复制、移动等。

```javascript
//查找节点
document.getElementById("id");// 通过id查找，返回唯一的节点
document.getElementsByClassName("class");// 通过class查找，返回值为nodeList类型
document.getElementsByTagName("div");// 通过标签名查找，返回值为nodeList类型

//创建节点
document.createDocumentFragment();//创建内存文档碎片
document.createElement();//创建元素
document.createTextNode();//创建文本节点
 
//添加节点
var ele = document.getElementById("my_div");
var oldEle = document.createElement("p");
var newEle=document.createElement("div");
ele.appendChild(oldEle);

//删除节点
ele.removeChild(oldEle);

//替换节点
ele.replaceChild(newEle,oldEle);

//插入节点
ele.insertBefore(oldEle,newEle);//在newEle之前插入 oldEle节点

//复制节点
var cEle = oldEle.cloneNode(true);//深度复制，复制节点下面所有的子节点
cEle = oldEle.cloneNode(false);//只复制当前节点，不复制子节点

//移动节点
var cloneEle = oldEle.cloneNode(true);//被移动的节点
document.removeChild(oldEle);//删除原节点
document.insertBefore(cloneEle,newEle);//插入到目标节点之前

var txt = document.createTextNode("这是一段文本");//创建文本节点
var parent = document.getElementById("parent");//appendChild: 添加子节点
parent.appendChild(node) ;
//JS设置和更新CSS
var para = document.getElementById("element");
para.style.color = "black";
para.style.font = "2em 'times',serif";
para.setAttribute('class', '某个class名称');
```

#### JS对浏览器地址操作：

使用 location 对象可以通过很多方式来改变浏览器的位置。首先，也是最常用的方式，就是使用assign() 方法并为其传递一个 URL：

```javascript
location.assign("http://www.wrox.com");
//假设初始 URL 为 http://www.wrox.com/WileyCDA/
//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1"
location.hash = "#section1";
//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript"
location.search = "?q=javascript";
//将 URL 修改为"http://www.yahoo.com/WileyCDA/"
location.hostname = "www.yahoo.com";
//将 URL 修改为"http://www.yahoo.com/mydir/"
location.pathname = "mydir";
//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/"
location.port = 8080;
```

禁止浏览器的所有后退动作

```javascript
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});//当活动历史记录条目更改时，将触发popstate事件
```

#### 本地存储的方式和区别 ：

**本地存储localstorage：** 存储方式：以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。大小：每个域名5M。存储类型：数组，图片，json，样式，脚本。。。（只要是能序列化成字符串的内容都可以存储）。

**本地存储sessionstorage：** HTML5 的本地存储 API 中的 localStorage 与 sessionStorage 在使用方法上是相同的，区别在于 sessionStorage 在关闭页面后即被清空，而 localStorage 则会一直保存。