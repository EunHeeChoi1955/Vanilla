(function(){ //ECMA Script 5

    var quickMenu = {
        init:function(){
            this.scrollEventFn();
            this.mouseWheelFn();
        },
        scrollEventFn:function(){
            var quickMenu             = document.querySelector('#quickMenu');
            var quickMenuoffsetHeight = quickMenu.offsetHeight; //테두리 패딩 포함 된 높이            
            var windowinnerHeight     = window.innerHeight; //창의 내부 높이           


            var topPosition = (windowinnerHeight-quickMenuoffsetHeight)/2;
                quickMenu.style.transition = 'top .6s';

                function quickMenuAnimationFn(){
                    quickMenu.style.top = (window.scrollY + topPosition) +'px';
                }
                quickMenuAnimationFn();


                window.addEventListener('scroll', function(){
                    quickMenuAnimationFn();
                });
                
        },
        mouseWheelFn: function(){
            //마우스 휠 이벤트
            //휠을 아래로 / 위로 방향에 따라서 
            //부드럽게 10개의 섹션을 이동한다.
            //스무스 스크롤링
            //섹션 클래스 10개를 객체 배열처리 하여
            //마우스 휠 이벤트 데스크 탑에서 주로 사용
            var section = document.querySelectorAll('.section'); //다중 여러개
            var oldScr = 0;  //이전 스크롤 값
            var newScr = 0;  //현재 스크롤 값


                 //스크롤로 위 아래 판별하기
                 window.addEventListener('scroll', function(){

                    newScr = window.scrollY; //현재 스크롤 값;

                    if( oldScr-newScr < 0 ){
                        console.log(' Down Scroll ');
                    }

                    if( oldScr-newScr > 0 ){
                        console.log(' Up Scroll ');
                    }

                    oldScr = newScr; 

                 });   



                 //파이어 폭스 : 마우스 휠 이벤트 DOMMouseScroll
                 //파이어 폭스를 제외한 모든 브라우저
                 var mouseEvent = '';
                 var mouseEvent = ''; //DOMMouseScroll
                 var delta = null;
                 
                     mouseEvent = 'mousewheel';  //기본 브라우저
                     
                     //  브라우저가 파이어폭스 이면  
                     if( navigator.userAgent.toLowerCase().indexOf('firefox') >=0 ){  
                        mouseEvent = 'DOMMouseScroll'; //DOMMouseScroll
                     }


                        //섹션 클래스 10개를 객체 배열처리                
                        section.forEach(function(el, idx){
                            section[idx].addEventListener( mouseEvent, function(event){
                                event.preventDefault();

                                if( event.detail ){ //파이어 폭스 이면
                                    delta = event.detail*-40;      //부호 변경   3*-40 = -120                   
                                }
                                else{ //나머지 모든 브라우저
                                    delta = event.wheelDelta;
                                }


                                if( delta < 0 ){  //-120 아래로  Down 다음 섹션으로 부드럽게 이동
                                    if( idx < section.length-1 ){ //10-1  0 1 2 3 4 5 6 7 8 9  마지막 이전
                                        window.scrollTo({
                                            top: section[idx].nextElementSibling.offsetTop, // 다음 섹션 탑값 으로 이동
                                            behavior: 'smooth' //부드럽게 이동
                                        });    
                                    }
                                }
                                
                                if( delta > 0 ){  //120 위로 Up 이전 섹션으로 부드럽게 이동
                                    if(idx > 0){ //1 두번째
                                        window.scrollTo({
                                            top: section[idx].previousElementSibling.offsetTop, //이전 섹션 탑값으로 이동
                                            behavior: 'smooth' //부드럽게 이동
                                        });
                                    }
                                }


                            }); //event the end
                        }); //forEach the end




        }
    }

    quickMenu.init();

})();
//quickMenu.js