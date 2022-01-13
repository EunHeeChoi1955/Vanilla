
 // 제이쿼리
// $(function(){

// });



//    $제이쿼리 사용 충돌방지 즉시 표현식  IIFE
//(function($){
   
//})(jQuery); //제이쿼리 



//자바스크립트 즉시표현식 IIFE
//(function(){

//})();


//DOM 트리를 읽어들이고 그리고 자바스크립트 실행 가능
//window.onload = function(){

//}


// 실무 객체 생성과 프로퍼티 및 메서드 
//반드시 Dom트리를 먼저 읽고 그리고 
//스크립트 실행 반드시 하단에 스크립트 배치
(function(){//즉시실행함수
    var genesis = {
        val:  [10,100,'피자','냉장고','가습기','공기청정기'],
        winW: 1920, //창너비
        winH: 969, //창높이
        n: 12,  //섹션의 갯수 멤버변수(프로퍼티)
        init :       function(){ // 객체내에 모든 메서드를 실행할 대표 메서드
            
            var that = this;
            
            this.headerFn();
            this.section01Fn();
            this.section02Fn();
            this.section03Fn();
            this.section04Fn();
            this.section05Fn();
            this.section06Fn();
            this.section07Fn();
            this.section08Fn();
            this.section09Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.footerFn();
        },
        headerFn:    function(){
            var $that = this; // 객체 genesis
            var _$that = this; // 같은 genesis를 가르키지만 $that이랑  _$that는 서로다른 객체임
            var that = this; // 같은 genesis를 가르키지만 $that이랑  _$that는 서로다른 객체임
            var $btn = document.querySelector('#btn');

                $btn.addEventListener('click', function(){
                    
                    console.log( this );// 버튼 이것
                    console.log( $that );// 객체 this -> that 
                    console.log( that );// 객체 this -> that 

                });

   
        },
        section01Fn: function(){
            // 누적변수
            // 문자열변수든 숫자변수든 모두 초기값이 존재해야
            // 누적이 된다.
            //자바스크립트는 먼저쓴거보다 나중에 쓴게 우선이다.
            
            var $btn    = document.querySelector('#section1 #btnfor');
            var $output = document.querySelector('#section1 .output');
            var txt     = ''; // 문자열 변수'' 빈값 공백
            //var txt     = 0; // 숫자 변수 0

            
            $btn.addEventListener('click', function(){
                
                    //for(var i=시작값; i<=종료값; i++ 1씩 증감){
                    //} 
                    //1. 1~100까지 1씩 증가하여 출력하는 반복문 for            
                    for( var i=10; i<=100; i+=10 ){
                        txt += '<li>' + i + '</li>';   // txt = txt + i; 반복문 가능 
                                 
                    } 

                    console.log( txt );
                    $output.innerHTML = txt ;         

            });

            //반복문
            //for문
            //while
            //do ~ while

            //forEach() 배열, 객체배열




         
            
        },
        section02Fn: function(){
            var $subtractBtn = document.querySelector('#section2 .subtract-btn');
            var $output = document.querySelector('#section2 .output');
            var txt = '';//변수선언 꼭 해주기


            //버튼 요소 클릭 이벤트 등록
            $subtractBtn.addEventListener('click', function(){
                //100 ~ 1까지  1씩 감소하는 100번 반복문
                for(var i=100; i>=1; i--){
                    txt += '<li>' + i + '</li>';
                }

                //출력 요소 html 사용해서 1회 출력
                   $output.innerHTML = txt;
            });

            // 120 = 1*2*3*4*5 팩토리얼

       

        },
        section03Fn: function(){
            var $googoodanBtn = document.querySelector('#section3 .googoodan-btn');
            var $googoodan = document.querySelector('#section3 .googoodan');
            var txt = '';//변수선언 꼭 해주기

            $googoodanBtn.addEventListener('click',function(){
                for(var i=1; i<=9; i++){
                    txt +='<tr><td>'+ 2 + 'x' + i + '=' + (2*i) + '</td></tr>'
                };
                $googoodan.innerHTML = txt;
            }); 
            
        },
        section04Fn: function(){
            //3단
            var $googoodan3Btn = document.querySelector('#section4 .googoodan3-btn');
            var $googoodan3 = document.querySelector('#section4 .googoodan3');
            var txt = '';

            $googoodan3Btn.addEventListener('click',function(){
                for(var i=1; i<=9; i++){
                    txt += '<tr><td>'+ 3 + 'x' + i + '=' + (3*i) + '</td></tr>'
                };
                $googoodan3.innerHTML = txt;
            });

            
        },
        section05Fn: function(){
           //4단

           var $googoodanBtn = document.querySelector('#section5 .googoodan-btn');
           var $googoodan = document.querySelector('#section5 .googoodan');
           var txt='';

            $googoodanBtn.addEventListener('click',function(){
                for(var i=1; i<=9; i++){
                    txt+= '<tr><td>'+4+'X'+i+'='+(4*i)+'</td></tr>'
                };
                $googoodan.innerHTML = txt;
            });


        },
        section06Fn: function(){
            //5단
            var $googoodanBtn = document.querySelector('#section6 .googoodan-btn');
            var $googoodan = document.querySelector('#section6 .googoodan');
            var txt = '';

            $googoodanBtn.addEventListener('click',function(){
                for(var i=1; i<=9; i++){
                    txt+= '<tr><td>'+ 5 + ' x ' + 'i' + ' = ' + (5*i) + '</td></tr>'
                };
                $googoodan.innerHTML= txt;
            });
            
        },
        section07Fn: function(){
             //6단
             var $googoodanBtn = document.querySelector('#section7 .googoodan-btn');
             var $googoodan = document.querySelector('#section7 .googoodan');
             var txt = '';

            $googoodanBtn.addEventListener('click',function(){
                for(var i=1; i<=9; i++){
                    txt+= '<tr><td>'+ 6 + ' x ' + 'i' + ' = ' + (6*i)+ '</td></tr>'
                };
                $googoodan.innerHTML = txt;
            });


        },
        section08Fn: function(){
            //7단
           
        },
        section09Fn: function(){
            //8단
        },
        section10Fn: function(){
            //9단
        },
        section11Fn: function(){
            
        },
        section12Fn: function(){
        
        },
        footerFn:    function(){
          
           
        }

    }//genesis 객체 끝


    genesis.init();

})();




























//자바스크립트 중요한 3대요소
// 0. 기본 변수
// 1. 함수
// 2. 객체
// 3. 배열

//즉시 실행 함수IIFE
(function(){
  //객체 genesis 생성 리터럴 방식  : 권장방식
// var genesis1 = {}; 
//     console.log('리터럴 방식 객체 : '+ genesis1);

// var genesis2 = new Object(); //생성자 방식으로 객체 생성
//      console.log('생성자 방식 객체 : '+ genesis2);



//선언문
//키워드 객체이름 = {프로퍼티(속성 속성),: 속성값, 프로퍼티(속성)}: 송성값, 프로퍼티(속성)
//키워드 종류 : var(ECMA Script5), / let, const(ECMA Script6)
//keyword object name = {Property : value, Property:value, Property:value}
         //var genesis = { no : 1, carName:'제네시스 G90', price:'99,800,000원'};
         //var genesis = {
         //    no:1, 
         //    carName:'제네시스 G90', 
         //    price:'99,800,000원'
         //};// 블록 끝 (객체 범위)



// 호출 실행 결과 property를 갖고오면 호출가능
// console.log('no :' + 객체이름.속성이름(프로퍼티));  
// console.log('no :' + genesis.no);  
// console.log('carName :' + genesis.carName);  
// console.log('price :' + genesis.price);  

// 변수 선언하는 키워드 종류 3가지
// 1.var: ECMA5 재사용 선언 가능
// 2.let: ECMA6 재사용 선언 불가능
// 3.const: ECMA6 (한번쓰면 절대 안바꾸는 변수)

let gen = {
        bun :  1,
        name:  '김유신',
        kor :  100, 
        eng :  090, 
        mat :  095, 
        web :  100, 
        avg :  function(){  // 프로퍼티 : function(){} 메서드(리터럴함수 = 익명함수)
           // return (this.kor + this.eng + this.mat + this.web)/4;  // 결과값을 return문을 통해서 매서드에서 되돌려준다.
            var a1 = 0;  
            var a2 = 0;
            
                a1 = (this.kor + this.eng + this.mat + this.web)/4;  
                a2 = this.kor + this.eng + this.mat + this.web;  
                
                //return a1;//return은 한번밖에 안된다  2개는 안됌 a2에는 미활성화
                //return a2;
                //return a1, a2;//이때는 a2만나옴
                return {
                    '평균': a1, 
                    '총점': a2
                };//이때는 2개 다 나옴

            // console.log( (this.kor + this.eng + this.mat + this.web)/4);  // this.는 객체이름. 부모를 말한다.
            // return 결과값 반환하라

            // 제네시스 객체 선언과 프로퍼티와 메서드 생성하고 실행하기
            var genesis = {

            };



    } 
}

//console.log( '번호 : ', gen.bun   );
//console.log( '이름 : ', gen.name  );
//console.log( '평균 : ', gen.avg() ); // 메서드(리터럴 함수) -> avg()를 사용해 호출 


})();//()를 넣는건 즉시실행 함수 표현식 
//genesis.js