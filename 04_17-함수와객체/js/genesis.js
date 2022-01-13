// DOM 트리를 읽어 들이고 그리고 자바스크립트 실행 가능
// window.onload = function(){

// }

// //제이쿼리
// $(function(){

// });
//$ 제이쿼리 충돌방지 즉시표현식 IIFE
// (function($){
  
// })(jQuery);

//자바스크립트 즉시표현식 IIFE
// (function(){
  
// })();


//실무 객체 생성과 프로퍼티및 메서드
//반드시 DOM 트리를 먼저 읽고 그리고 
//스크립트 실행 반드시 하단에 스크립트 배치
(function(){
    var genesis = {
            val: [10, 100,'피자', '냉장고','공기청정기'], //배열
            winW: 1920, //창너비
            winH: 969,  //창높이
            n: 12, //섹션의 갯수 멤버변수(프로퍼티)
            init:       function(){ //객체내에 모든 메서드를 실행 할 대표 메서드
                var that = this;

                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.footerFn();
            },
            headerFn:   function(){
                // var $this = this; //객체 genesis
                // var _this = this; //객체 genesis
                var that  = this; //객체 genesis
                var $btn = document.querySelector('#btn');

                    $btn.addEventListener('click', function(){
                        console.log( this ); //버튼 이것
                        console.log( that ); //객체 this -> that
                    });

            },
            section01Fn:function(){
                //반복문
                //for문 
                //while
                //do ~ while

                //forEach()  배열, 객체배열

                //1. 1 ~ 100까지 1씩 증가하여 출력하는 반복문 for
                // for(var i=시작값; i<=종료값; 증감){                
                //누적변수 
                //문자열변수든 숫자변수든 모두 초기값이 존재해야
                //누적이된다.
                
                var $btn    = document.querySelector('#section1  #btnfor');
                var $output = document.querySelector('#section1  .output');
                var txt     = '';  //문자열 변수 ''
               
                $btn.addEventListener('click', function(){
                    for(var i=10; i<=100; i+=10){
                        txt += '<li>' + i + '</li>';  //txt = txt + i;                                 
                    }

                    $output.innerHTML = txt ;

                });



               

              

            },
            section02Fn:function(){

                var $subtractBtn = document.querySelector('#section2 .subtract-btn');
                var $output = document.querySelector('#section2 .output');
                var txt = '';

                    //버튼 요소 클릭 이벤트 등록
                    $subtractBtn.addEventListener('click', function(){
                        //100 ~ 1 까지 1씩 감소 하는 100번 반복문
                        for(var i=100; i>=1; i-=1){
                            txt += '<li>' + i + '</li>';
                        }

                        //출력 요소를 html을 사용해서  1회 출력
                        $output.innerHTML = txt;

                    });

            },
            section03Fn:function(){
                var $googoodanBtn = document.querySelector('#section3 .googoodan-btn');
                var $output = document.querySelector('#section3 .output');
                var txt = '';

                    $googoodanBtn.addEventListener('click',function(){
                        for(var i=1; i<=9; i++){
                            txt += '<tr><td>' + 2 + 'X' + i + '=' + (2*i)  + '</td></tr>' 
                        };
                        $output.innerHTML = txt; 
                    });
            },
            section04Fn:function(){
                //3단
                var $googoodanBtn = document.querySelector('#section4 .googoodan-btn');
                var $output = document.querySelector('#section4 .output');
                var txt = '';

                    $googoodanBtn.addEventListener('click',function(){
                        for(var i=1; i<=9; i++){
                            txt += '<tr><td>' + 3 + 'X' + i + '=' + (3*i)  + '</td></tr>' 
                        };
                        $output.innerHTML = txt; 
                    });

            },
            section05Fn:function(){
                //4단

            },
            section06Fn:function(){
                //5단

            },
            section07Fn:function(){
                //6단

            },
            section08Fn:function(){
                //7단


            },
            section09Fn:function(){
                //8단


            },
            section10Fn:function(){
                //9단


            },
            section11Fn:function(){
                var $googoodanBtn = document.querySelector('#section11 .googoodan-btn')
                var $output = document.querySelector('#section11 .output')
                var txt = '';

                    $googoodanBtn.addEventListener('click', function(){
                        
                        //2 ~ 9
                        for(var i=2; i<=9; i++){ //단 2 ~ 9
                            txt += '<tr><th>' + i + '단</th></tr>';
                            for(var j=1; j<=9; j++){ //2단 1 ~ 9, 3단  1 ~ 9  8번 반복 
                                if( i*j < 10 ){
                                    txt += '<tr><td>' + i + '*' + j + '=' + '0'+(i*j)  + '</td></tr>';
                                }
                                else{
                                    txt += '<tr><td>' + i + '*' + j + '=' +  (i*j)  + '</td></tr>';
                                }
                                // txt += '<tr><td>' + i + '*' + j + '=' + ( ((i*j)<10) ? ('0'+(i*j)) : (i*j) ) + '</td></tr>';
                            }
                            txt += '<tr><td></td></tr>';
                        }

                        $output.innerHTML = txt;

                    });



            },
            section12Fn:function(){

                var $googoodanBtn = document.querySelector('#section12 .googoodan-btn')
                var $output = document.querySelector('#section12 .output')
                var txt = '';

                    $googoodanBtn.addEventListener('click', function(){
                        
                        txt += '<tr>';
                        for(var j=2; j<=9; j++){ 
                            txt += '<th>' + j + '단 </th>';
                        }
                        txt += '</tr>';

                        
                        for(var i=1; i<=9; i++){ //줄
                            txt += '<tr>';
                            for(var j=2; j<=9; j++){ //칸 8칸
                                if( j == 9 ){
                                    txt += '<td>' + j + '*' + i + '=' + (j*i) + '</td>';
                                }
                                else{
                                    txt += '<td>' + j + '*' + i + '=' + (j*i) + '</td><td>&nbsp;&nbsp;</td>';
                                }
                            }
                            txt += '</tr>';
                        }

                        $output.innerHTML = txt;   
                    });


            },
            footerFn:   function(){

            }
    } //genesis 객체 끝

    genesis.init();
    
    

})();







//자바스크립트 중요한 3대 요소
//0. 기본 변수
//1. 함수
//2. 객체
//3. 배열

//즉시 실행 함수 표현식 IIFE
(function(){

    //객체 genesis 생성 리터럴 방식 : 권장방식
    /*
    var genesis1 = {}; 
        console.log('리터럴 방식 객체 : ' + genesis1 );

    var genesis2 = new Object();  //생성자 방식으로 객체 생성
        console.log('생성자 방식 객체 : ' + genesis2 );
    */

    //선언문    
    //Keyword  Object Name  = { Property(prop): value, Property: value, Property: value, }   
    //키워드 종류 : var(ECMA Script 5), / let, const(ECMA Script 6),
    //키워드       객체이름  = { 프로퍼티(속성이름) : 속성값, 프로퍼티(속성) : 속성값, 프로퍼티(속성) : 속성값  }
    // var         genesis3   = { no : 1, carName:'제네시스G90', price:'99,800,000원' };
    //  var genesis3   = { 
    //           no : 1, 
    //           carName:'제네시스G90', 
    //           price:'99,800,000원' 
    //     }; //블록(객체 범위)

        //호출 실행 결과
        //   console.log('no : ' + 객체이름.프로퍼티(속성이름) );
        //   console.log('no : ' + genesis.no );
        //   console.log('carName : ' + genesis.carName );
        //   console.log('price : ' + genesis.price );


    let gen = {
            bun  : 1,
            name : '김유신',
            kor  : 100,
            eng  : 090,
            mat  : 095,
            web  : 100,
            avg  : function(){  //프로퍼티 : function(){}  메서드(리터럴함수 == 익명함수)
                var a1 = 0;
                var a2 = 0;
                    a1 = (this.kor + this.eng + this.mat + this.web)/4 ; //평균
                    a2 = this.kor + this.eng + this.mat + this.web; //총점
                        return {
                           '총점': a2,
                           '평균': a1
                        }
                //결과 값을 리턴문을 통해서 메서드에서 되돌려 준다.
            }
    }       
    // console.log('번호 : ', gen.bun );
    // console.log('이름 : ', gen.name );
    // console.log('평균 : ', gen.avg() ); //메서드(리터럴함수) 호출


})();


