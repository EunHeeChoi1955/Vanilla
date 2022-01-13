    // 변수의 중복성 막기 위한 방식 함수
    // ();
    // (function(){ });
    // 즉시 실행 가능한 함수 표현식 IIFE 방식
    ;(function(){

        // var obj = {} //객체(Object) 생성
        var obj = {
            init: function(){   // 이름없는 함수( 익명함수 = 메소드 )
                this.nav(); //this는 obj를 말한다.
                this.section1();
            },
            nav:function(){
                var cnt =0;
                alert('nav 메서드');
            },
            section1: function(){
                var cnt =0;
                alert('section1메서드');
            }
        } //객체(Object) 생성

        obj.init();

    })();

   





// 선택자 (아이디, 클래스, 태그명...) 변수 설정하기
// 전역변수
var slideWrap = document.querySelector('#slide-container .slide-wrap');
var nextBtn   = document.querySelector('#nextBtn');
var prevBtn   = document.querySelector('#prevBtn');
var cnt =0;   

//var button    = document.getElementsByTagName('button'); 
//var slideWrap = document.getElementsByClassName('slide-wrap');
//var nextBtn   = document.getElementById('nextBtn')
//var prevBtn   = document.getElementById('prevBtn')


    // 슬라이드 애니메이션

    // 1. 메인(main) 슬라이드(slide) 함수(function  )
    function mainSlideFn(){
        var x = 5;   //지역변수

        slideWrap.style = 'left:' + (-1920 * cnt) +  'px';      // ECMA(이크마) Script 5 [ES5] 현재 우리가 사용하는 것
        // slideWrap.style = `left: ${-1920*cnt}px`;           // ECMA(이크마) Script 6 [ES6] 백틱 사용 ${}

    } 
    // 2-1.  다음(next)  버튼(button) 클릭(click) 이벤트(Event) 
    nextBtn.addEventListener('click',function(event){
        cnt++;     // 증가 1 2 3 4 5 0 1 2 3 4 5 0...
        // 변수 cnt가 4보다 크면 cnt= 0으로 초기화
        event.preventDefault(); //브라우저에서 기본 발생되는 이벤트를 제거

       

        cnt>4 ? cnt=0 : cnt; // 3항 연산자 조건문 다음키 누르면 계속 가다가 마지막에 다시 처음으로 옴
        // 1 2 3 4 0 1 2 3 4 0 1 2 3 4 . . . .
        mainSlideFn(event);  // 메인슬라이드 함수 호출 하면서 변수 값 전달
    }); 
    


   // 2-2. 다음(next) 버튼(button) 클릭(click) 이벤트 (Event)
   prevBtn.addEventListener('click',function(e){
       e.preventDefault();  


       cnt--;
       var a=0;
       // 변수 cnt가 0보다 작으면 다시 cnt = -1을 4(마지막 슬라이드 번호)로 가라
       cnt<0 ? cnt=4 : cnt; //3항 연산자 조건문
       mainSlideFn(a);   // 메인슬라이드 함수 호출 하면서 증가 변수값 전달
   });



























