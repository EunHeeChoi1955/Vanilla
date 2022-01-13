//함수는 반드시 이름을 호출해야만 실행 합니다.
function fn1(){
    // 자바스크립트 변수 설정
    // ECMA Script 5
    // var 키워드 사용 url은 변수 이름 =  값
    // 변수는 규칙이 있습니다.
    // 반드시 영문으로시작 사용 첫글자 다음 이후는 숫자도 사용
    // 첫글자가 _ 언더바, 또는 $는 사용 가능
    // 공백 사용 절대 금지
    // 변수는 영문 대소문자 구별합니다.
    // 변수는 두단어가 이어지면 두번째 단어의 첫글자를 대문자로 표시 - 카멜케이스 표기법

    var url = 'http://www.naver.com';
    var naverWin = 'popup20210405'; 

        // window.open() //메서드 새창
        window.open( url , naverWin ,'width=500, height=500, left=300, top=200');
}

//url 링크 함수
//https://www.google.com
//https://www.kurly.com/
//https://www.starbucks.co.kr/index.do
function urlFn(z){ //매개변수 Parameter
    // window.location.href = z;
    location.href = z;
}

//1. 아이디 클래스 태그 속성선택자 이러한 명칭(이름)필요 - 선택자(selector)\

    //아이디가 btn1 선택자 <button id="btn1">버튼1</button>
var btn1   = document.querySelector('#btn1'); 
var btn2   = document.querySelector('#btn2'); 
var btn3   = document.querySelector('#btn3'); 
var btn4   = document.querySelector('#btn4'); 
var btn5   = document.querySelector('#btn5'); 
var output = document.querySelector('#output'); 

    console.log( btn1 ); //선택자를 확인하는 유효성(맞나 틀리나 확인하는 절차를) 검사

//2-1. 선택된 버튼을  등록 후 사용
    btn1.onclick = function(){ //버튼 클릭 이벤트 후 => 결과를 되돌려준다.(이벤트 핸들러)
        // alert('btn1 클릭 이벤트 발생');
        urlFn("http://www.tjoeun.com");
    }

    btn2.onclick = function(){
        location.href = "http://www.naver.com";
    }

    btn3.onclick = function(){
        window.open("http://www.naver.com");
    }

    btn4.onclick = function(){
       window.open('https://www.kurly.com/','kurly','width=800, height=500');
    }

    btn5.onclick = function(){
        location.href = "https://www.starbucksathome.com/";
    }


    //2-2 버튼 등록 : 추가 이벤트 리스너 : 실전버튼등록 사용
    var cnt = 0; //변수에 0을 대입(저장)한다.
    btn6.addEventListener('click',function(){
        // cnt++; //1씩증가
        // cnt--; //1씩감소
        // cnt = cnt + 3;  //1씩 증가 연산식 1 2 3 4 5 ....
        // cnt++;  //cnt = cnt + 1   == cnt += 1
        // cnt += 1;
        // cnt -= 1;
        // cnt += 2;
        // cnt -= 2;
        // cnt += 3;
        // cnt -= 3;
        // cnt *= 3; //cnt = cnt * 3
        // cnt /= 3; //cnt = cnt / 3

        cnt = 5 % 3; //나머지 2


        console.log('나머지 ' + cnt );
        // + 문자열과 변수 또는 숫자등을 연결할 때 사용하는 
        // 연결연산자라고도 한다.
    });

    //1초에 1씩 증가하는 함수 만들기
    cnt = 0;  //변수 초기화

    function autoNum(){ //이름이 있는 함수 선언적함수(이름있는함수)
        cnt++;
        //h1 태그안에 카운트 숫자 출력(output)
        // <h1 id="output" style="text-align:center;">100</h1>
        output.innerHTML = '<mark>카운트 숫자</mark> <br>' + (1000 + cnt);
    }
    //자동설정타이머 호출 실행
    //1초 간격으로 1씩 증가하는 함수를 호출 실행
    //0.001초 : 1 밀리세컨드
    //0.01초 : 10 밀리세컨드
    //0.1초 : 100 밀리세컨드
    //0.5초 : 500 밀리세컨드
    //1초 : 1000 밀리세컨드
    //2초 : 2000 밀리세컨드
    //10초 : 10000 밀리세컨드
    //30초 : 30000 밀리세컨드
    setInterval(autoNum, 10);


    var a = 5;
    var b = '5';

        // a 와 b 는 같다. 참(true) 이냐 거짓(false)이냐
        console.log('a == b ',  a == b ); 

        
        console.log('a === b ',  a === b ); 


//슬라이드
var slideWrap =  document.querySelector('.slide-wrap')
var prevBtn   =  document.querySelector('#prevBtn')
var nextBtn =  document.querySelector('#nextBtn')

    // cnt = 1;

    // slideWrap[0].style = 'left:' + (-1920*cnt) + 'px';

