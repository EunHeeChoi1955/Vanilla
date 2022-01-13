(function(){

    var vanilla = {
        init:function(){
            this.slideFn();
        
        },
        slideFn:function(){

            var slideWrap =  document.querySelector('.slide-wrap');
            var nextBtn   =  document.querySelector('.next-btn');
            var prevBtn   =  document.querySelector('.prev-btn');
            var slide     =  document.querySelectorAll('.slide');//여러개인 경우 객체 배열
            var cnt       =  1;       // 슬라이드 카운트는 1로 시작 번호 0번은 마지막이기 때문에
            var size      =  1600;    //슬라이드 1개당 너비

            slideWrap.style.transform = 'translateX('+ (-size*cnt)+'px)';  //초기값 천번째 슬라이드 초기값
             // slideWrap.style.transform  = "translateX(-1903px)"; //초기값 천번째 슬라이드 초기값
               


                    //1. 메인슬라이드 함수
                    function mainSlideFn(){
                        slideWrap.style.transition = 'transform .6s'; 
                        slideWrap.style.transform = 'translateX('+ (-size*cnt)+'px)'; 
                    }

                     //2-1. 다음 슬라이드 카운트 함수
                    function nextSlideCountFn(){
                        //return 문 아래 alert();넣으면 실행 안됀다 
                        if(cnt >= 6) return; //6이상이면 리턴 : 강제로 종료
                        cnt++;
                        mainSlideFn();
                    }

                    //2-2. 다음 슬라이드 카운트 함수
                    function prevSlideCountFn(){
                        if(cnt <= 0) return; //0이하이면 리턴 : 강제로 종료
                        cnt--;                        
                        mainSlideFn();
                    }


                    //3-1. 다음 슬라이드 클릭 이벤트
                    nextBtn.addEventListener('click', function(e){
                        e.preventDefault();
                        nextSlideCountFn();
                    });


                    //3-2. 다음 슬라이드 클릭 이벤트
                    prevBtn.addEventListener('click', function(e){
                        e.preventDefault();
                        prevSlideCountFn();
                    });

                    //4. 메인슬라이드 움직임 효과 이벤트가 끝날 때 
                    //   트랜지션 시작 (transitionstart), 
                    //   실행중        (transitionrun), 
                    //   종료          (transitionend): 트랜지션 (애니메이션)이 종료 될 때
                    //   아이디가 first

                    slideWrap.addEventListener('transitionend', function(){
                    //slideWrap.addEventListener('transitionrun', function(){
                    //slideWrap.addEventListener('transitionstart', function(){

                       // 현재 실행중인 슬라이드 박스 안에 .slide 클래스 요소에 아이디가 first 검색
                       // for(var i=0; i<slide.length; i++) 
                      // console.log( slide[cnt].className ); //현재 슬라이드에서 아이디 검색 
                      // console.log( slide[cnt].id ); //현재 슬라이드에서 아이디 검색 
                      
                       if( slide[cnt].id == 'first' ){
                            //만약 있다면 리셋 초기화 그래서 처음으로 돌아간다.
                            // console.log('first 아이디 찾았다')

                           cnt = 1;
                           slideWrap.style.transition  = 'none';  // 트랜지션 제거 (애니메이션 중지 움직임에 시간이 없어짐)
                           slideWrap.style.transform  = 'translateX(' + (-size *cnt) + 'px)';



                        }
                        if( slide[cnt].id == 'last' ){
                            // 마지막을 아이디last를 만나면 마지막 (5)인덱스번호
                            // console.log('first 아이디 찾았다')

                           cnt = 5; // 6번째 슬라이드: 슬라이드 5
                           slideWrap.style.transition  = 'none';  // 트랜지션 제거 (애니메이션 중지 움직임에 시간이 없어짐)
                           slideWrap.style.transform  = 'translateX(' + (-size *cnt) + 'px)';



                        }
                    })







        }    
    }


        vanilla.init();
    
})();