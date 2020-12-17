function nameLimit(){
    let studentName = document.getElementById('student-name');
    let regExp = /[\u4e00-\u9fa5]+/g;
    let trueLength = studentName.value.length;
    let nowLength = 0;
    for(let i = 0; i < trueLength; i++){
        nowLength += regExp.test(studentName.value.charAt(i)) ? 1: 0.5;
    }
    if(nowLength > 11){
        studentName.setAttribute('disabled', 'disabled');
    }
}
