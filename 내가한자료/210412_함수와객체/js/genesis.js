// 실무 객체 생성과 프로퍼티 및 메서드 
(function(){
    var genesis = {
        val:  [10,100,'피자','냉장고','가습기','공기청정기'],
        winW: 1920, //창너비
        winH: 969, //창높이
        n: 12,  //섹션의 갯수 멤버변수(프로퍼티)
        init :       function(){ // 객체내에 모든 메서드를 실행할 대표 메서드
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
            var cnt = 0;
            cnt+=1;
            console.log( 'headerFn() cnt+=1',cnt*this.n );
            console.log( '창너비', this.winW );
            console.log( '창높이', this.winH );
            console.log( '배열 모두 가져오기', this.val );
            console.log( '배열 3번째만 가져오기', this.val[2] );
          
        },
        section01Fn: function(){

            var cnt = 0;
                cnt+=2;
            console.log('section01Fn() cnt+=2',cnt*this.n);
            
        },
        section02Fn: function(){
            var cnt = 0;
                cnt+=3;
            console.log('section02Fn() cnt+=3',cnt*this.n);
            
        },
        section03Fn: function(){
            var cnt = 0;
                cnt+=4;
            console.log('section03Fn() cnt+=4',cnt*this.n);
            
        },
        section04Fn: function(){
            var cnt = 0;
                cnt+=5;
            console.log('section04Fn() cnt+=5',cnt*this.n);
            
        },
        section05Fn: function(){
            var cnt = 0;
                cnt+=6;
            console.log('section05Fn() cnt+=6',cnt*this.n);
            
        },
        section06Fn: function(){
            var cnt = 0;
                cnt+=7;
            console.log('section06Fn() cnt+=7',cnt*this.n);
            
        },
        section07Fn: function(){
            var cnt = 0;
                cnt+=8;
            console.log('section07Fn() cnt+=8', cnt*this.n);
            
        },
        section08Fn: function(){
            var cnt = 0;
                cnt+=2;
            console.log('section08Fn() cnt+=2', cnt);
           
        },
        section09Fn: function(){
            var cnt = 0;
                cnt+=3;
            console.log('section09Fn() cnt+=3', cnt);
        },
        section10Fn: function(){
            var cnt = 0;
                cnt+=2;
            console.log('section10Fn() cnt+=2', cnt);//
        },
        section11Fn: function(){
            var cnt = 0;
                cnt+=20;
            console.log('section11Fn() cnt+=20', cnt);//20
        },
        section12Fn: function(){
            var cnt = 0;
                cnt+=10;
            console.log('section12Fn() cnt+=10', cnt);//10
        },
        footerFn:    function(){
            var cnt = 0;
                cnt++;
            console.log('footerFn()  cnt++', cnt);//1


            console.log( this.val[0] );//배열
            console.log( this.val[1] );//
            console.log( this.val[2] );
            console.log( this.val[3] );
            console.log( this.val[4] );
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