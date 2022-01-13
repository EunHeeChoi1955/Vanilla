//실무 객체 생성과 프로퍼티및 메서드
(function(){
    var genesis = {
        val: [10, 100,'피자', '냉장고','공기청정기'], //배열
        winW: 1920, //창너비
        winH: 969,  //창높이
        n: 12, //섹션의 갯수 멤버변수(프로퍼티)
        init:       function(){ //객체내에 모든 메서드를 실행 할 대표 메서드
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
        headerFn:   function(){
            var cnt = 0;
            cnt+=1;
            console.log('headerFn() cnt+=1;', cnt*this.n );
            console.log('창너비', this.winW );
            console.log('창높이', this.winH );
        },
        section01Fn:function(){
            var cnt = 0;
            cnt+=2;
            console.log('section01Fn() cnt+=2;', cnt*this.n);
            console.log('창너비', this.winW );
            console.log('창높이', this.winH );
            console.log('배열 3번째 가져오기 ', this.val[2] );

        },
        section02Fn:function(){
            var cnt = 0;
            cnt+=3;

            console.log('section02Fn()', cnt*this.n);
            console.log('창너비', this.winW );
            console.log('창높이', this.winH );
            console.log('배열 모두 가져오기 ', this.val );
        },
        section03Fn:function(){
            var cnt = 0;
            cnt+=4;
            console.log('section03Fn()  cnt+=4;', cnt*this.n);
        },
        section04Fn:function(){
            var cnt = 0;
            cnt+=5;
            console.log('section04Fn()  cnt+=5;', cnt*this.n);
        },
        section05Fn:function(){
            var cnt = 0;
            cnt+=3;
            console.log('section05Fn() cnt+=3;', cnt*this.n);
        },
        section06Fn:function(){
            var cnt = 0;
            cnt+=3;
            console.log('section06Fn() cnt+=3;', cnt*this.n);
        },
        section07Fn:function(){
            var cnt = 0;
            cnt+=4;
            console.log('section07Fn() cnt+=4;', cnt*this.n);
        },
        section08Fn:function(){
            var cnt = 0;
            cnt+=6;
            console.log('section08Fn() cnt+=6;', cnt*this.n);
        },
        section09Fn:function(){
            var cnt = 0;
                cnt+=3;             
            console.log('section09Fn() cnt+=3; ', cnt*this.n);
        },
        section10Fn:function(){
            var cnt = 0;
                cnt+=2; 
            console.log('section10Fn() cnt+=2; ', cnt*this.n);
        },
        section11Fn:function(){
            var cnt = 0;
                cnt+=20;            
            console.log('section11Fn() cnt+=20;', cnt*this.n); //20
        },
        section12Fn:function(){
            var cnt = 0;
                cnt+=10;
            console.log('section12Fn() cnt+=10;', cnt*this.n); //10
        },
        footerFn:   function(){
            var cnt = 0;
                cnt++;
            console.log('footerFn() cnt++;', cnt*this.n); //1

            console.log( this.val[0] ); //배열
            console.log( this.val[1] );
            console.log( this.val[2] );
            console.log( this.val[3] );
            console.log( this.val[4] );
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
