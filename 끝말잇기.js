var 첫단어 = document.createElement("div");
첫단어.textContent = "자바스크립트";
document.body.appendChild(첫단어);

var 폼 = document.createElement("form");
document.body.appendChild(폼);

var 입력 = document.createElement("input");
폼.appendChild(입력);

var 버튼 = document.createElement("button");
버튼.textContent= "버튼"
폼.appendChild(버튼);

var 결과 = document.createElement("div");
document.body.appendChild(결과);

버튼.addEventListener('click', function 콜백함수(e){
    e.preventDefault();
    if(첫단어.textContent[첫단어.textContent.length-1]=== 입력.value[0]){
        결과.textContent = '딩동댕!';
        첫단어.textContent = 입력.value;
        입력.focus();
        입력.value='';
    }

    else{
        결과.textContent = '땡!'
        입력.focus();
    }
});