    //즉시 실행 가능한 함수 표현식 IIFE 방식    
    //변수의 중복성 막기 위한 방식 함수
    // ();
    // (function(){});

    ;(function(){ 

        // var obj = {} //객체(Object) 생성
        var obj = {
                init: function(){ //이름없는 함수(익명함수=메서드)
                    this.nav();
                    this.section1();
                },
                nav:function(){
                    var cnt =0;

                    alert('nav 메서드');
                },
                section1:function(){
                    var cnt =0;

                    alert('section1메서드');
                }
        }
       

        obj.init();

    })();







    //선택자(아이디,클래스,태그명...) 변수 설정하기
    //전역변수
    var slideWrap = document.querySelector('#slide-container .slide-wrap');
    var nextBtn   = document.querySelector('#nextBtn');
    var prevBtn   = document.querySelector('#prevBtn');
    var cnt = 0;

    // var button    = document.getElementsByTagName('button');
    // var slideWrap = document.getElementsByClassName('slide-wrap');
    // var nextBtn   = document.getElementById('nextBtn')
    // var prevBtn   = document.getElementById('prevBtn')



    //슬라이드 애니메이션

    //1. 메인(main) 슬라이드(slide) 함수(function)
    function mainSlideFn(){
         slideWrap.style.left = (-1920*cnt) + 'px'; //ECMA(이크마) Script 5 [ES 5] 인용부호 사용 +
         slideWrap.style = 'left:' + (-1920*cnt) + 'px;'; //ECMA(이크마) Script 5 [ES 5] 인용부호 사용 +
      // slideWrap.style = `left: ${-1920*cnt}px`;       //ECMA(이크마) Script 6 [ES 6] 빽틱 사용 ${계산식 변수등..}
    }

    //2-1. 다음(next) 버튼(button) 클릭(click) 이벤트(Event)
    nextBtn.addEventListener('click', function(event){
        event.preventDefault(); //브라우저에서 기본 발생되는 이벤트를 제거

        cnt++;   //증가 1 2 3 4 5        

        //변수 cnt가 4보다 크면 cnt = 5 를 0으로 초기화
        cnt>4 ? cnt=0 : cnt;  //3항 연산자 조건문
        //증가 1 2 3 4 0 1 2 3 4 0 1 2 3 4....
        mainSlideFn(); //메인슬라이드함수 호출 하면서 증가 변수 값 전달
    });

    //2-2. 이전(prev) 버튼(button) 클릭(click) 이벤트(Event)
    prevBtn.addEventListener('click', function(e){
        e.preventDefault(); //프리 벤트 디펄트

        cnt--;
        //변수 cnt가 0보다 작으면 cnt = -1 를 4(마지막 슬라이브 번호)로 변경
        cnt<0 ? cnt=4 : cnt;  //3항 연산자 조건문
        mainSlideFn(); //메인슬라이드함수 호출 하면서 증가 변수 값 전달
    });
