window.onload = function(){
    let studentName = document.getElementById('student-name').value;
    let studentPhone = document.getElementById('student-name').value;
    if(location.search){
        let para = location.search.split('?');
        let studentInfo = [];
        if(para){
            if(/\&/.test(para[1])){
                let paraUn = para[1].split("&");
                for(let i = 0; i < paraUn.length; i++){
                    studentInfo.push((paraUn[i].split("="))[1]);
                }
            }else{
                studentInfo.push(para[1].split("=")[1]);
            }
        }
        document.getElementById('student-name').value = decodeURI(studentInfo[0]) || '';
        document.getElementById('student-phone').value = studentInfo[1] || '';
    }
}

window.onmouseup = function(){
    let studentName = document.getElementById('student-name').value;
    let studentPhone = document.getElementById('student-phone').value;
    storage = window.localStorage;
    storage.studentName = studentName;
    storage.studentPhone = studentPhone;
    function removeStorage(){
        
    } 
}

function nameLimit(){
    let studentName = document.getElementById('student-name');
    let regExp = /[\u4e00-\u9fa5]+/g;
    let trueLength = studentName.value.length;
    let nowLength = 0;
    for(let i = 0; i < trueLength; i++){
        nowLength += regExp.test(studentName.value.charAt(i)) ? 1: 0.5;
    }
    if(nowLength > 10){
        studentName.setAttribute('disabled', 'disabled');
    }
}

function fold(){
    let extInfoContent = document.getElementsByClassName('ext-info-content');
    if(extInfoContent[0].style.display == 'none'){
        extInfoContent[0].style.display = 'flex';
    }else
    extInfoContent[0].style.display = 'none';
}

function replaceSpace(obj){
    obj.value = obj.value.replace(/\s/gi, '');
}

function save(){
    let studentName = document.getElementById('student-name');
    let studentPhone = document.getElementById('student-phone');
    if(studentName.value == '' && studentPhone.value == ''){
        alert('请输入学生的姓名和电话');
    }else if(studentName.value == '' && studentPhone.value != ''){
        alert('学生的姓名不能为空');
    }else if(studentName.value != '' && studentPhone.value == ''){
        alert('学生的联系方式不能为空');
    }else if(!(/^1[3-8]\d{9}$/.test(studentPhone.value))){
        alert('请输入学生正确的联系方式');
    }else{
        alert('保存成功');
    }
}