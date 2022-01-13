(function(){
    
    var vanilla = {
        init:function(){
            this.slideFn();
            
        },
        slideFn:function(){
        
          var slideWrap = document.querySelector('.slide-wrap');
          var nextBtn = document.querySelector('.next-btn');
          var prevBtn = document.querySelector('.prev-btn');
          var cnt =0;
            
             slideWrap.style = "transform: translateX(-1903px)";//초기값 천번째 슬라이드 초기값
            //1. 메인슬라이드 함수
                function mainSlideFn(){
                    console.log( cnt );
                }

            //2. 다음 슬라이드 카운트 함수
            function nextSlideCountFn(){
                cnt++;//1 2 3 4 5..
                mainSlideFn();

            }
        
            //2-2. 다음 슬라이드 카운트 함수
            function prevSlideCountFn(){
                cnt--;// 5 4 3 2 1..
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

        }
    } 

    vanilla.init();

})();