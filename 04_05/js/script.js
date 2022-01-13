//함수는 반드시 이름을 호출해야만 실행 합니다.
function fn1(){
    // 자바스크립트 변수 설정
    // ECMA Script 5
    // var 키워드 사용 url은 변수 이름 =  값
    // 변수는 규칙이 있습니다.
    // 반드시 영문으로시작 사용 첫글자 다음부트는 숫자도 사용
    // 첫글자가 _ 언더바, 또는 $는 사용 가능
    // 공백 사용 절대 금지
    // 변수는 영문 대소문자 구별합니다.
    // 변수는 두단어가 이어지면 두번째 단어의 첫글자를 대문자로 표시 - 카멜케이스 표기법

    var url = 'http://www.naver.com';
    var naverWin = 'popup20210405'; 

        // window.open() //메서드
        window.open( url , naverWin ,'width=500, height=500, left=300, top=200');
}

//url 링크 함수
//https://www.google.com
//https://www.kurly.com/
//https://www.starbucks.co.kr/index.do
function urlFn(z){ //매개변수
    alert( z );
}
