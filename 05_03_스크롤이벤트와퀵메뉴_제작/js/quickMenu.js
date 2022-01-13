(function(){ //ECMA Script 5

    var quickMenu = {
        init:function(){
            this.scrollEventFn();
        },
        scrollEventFn:function(){
            //선택자 퀵메뉴 박스의 높이 너비를 가져오기  
            var quickMenu             = document.querySelector('#quickMenu');

            var quickMenuclientWidth  = quickMenu.clientWidth;  //테두리 패딩 포함 안된 너비
            var quickMenuclientHeight = quickMenu.clientHeight; //테두리 패딩 포함 안된 높이
            var quickMenuoffsetWidth  = quickMenu.offsetWidth;  //테두리 패딩 포함 된 너비
            var quickMenuoffsetHeight = quickMenu.offsetHeight; //테두리 패딩 포함 된 높이
            
            var windowinnerWidth      = window.innerWidth;  //창의 내부 너비
            var windowinnerHeight     = window.innerHeight; //창의 내부 높이           
            var windowouterWidth      = window.outerWidth;  //창의 외부 너비
            var windowouterHeight     = window.outerHeight; //창의 외부 높이


            // console.log( '퀵메뉴 박스 패딩과 테두리 제외 너비 : ', quickMenuclientWidth);    
            // console.log( '퀵메뉴 박스 패딩과 테두리 제외 높이 : ', quickMenuclientHeight);                
            // console.log( '퀵메뉴 박스 패딩과 테두리 포함된 너비 : ', quickMenuoffsetWidth);    
            // console.log( '퀵메뉴 박스 패딩과 테두리 포함된 높이 : ', quickMenuoffsetHeight);    
            
            
            // console.log( '창의 내부 너비 : ', windowinnerWidth);    
            // console.log( '창의 내부 높이 : ', windowinnerHeight);                
            // console.log( '창의 외부 너비 : ', windowouterWidth);    
            // console.log( '창의 외부 높이 : ', windowouterHeight);    

            //  탑 값(포지션) = (창높이 - 퀵메뉴 박스 높이)/2
            var topPosition = (windowinnerHeight-quickMenuoffsetHeight)/2;
                // console.log( topPosition );
                quickMenu.style.transition = 'top .6s';

                // 퀵메뉴 애니메이션 함수
                function quickMenuAnimationFn(){
                    // console.log('퀵메뉴 애니메이션 함수!!!');
                    // 스크롤 탑값 + 퀵메뉴 박스 탑값
                    // console.log( window.scrollY ); //스크롤 탑값 scrollTop
                    quickMenu.style.top = (window.scrollY + topPosition) +'px';
                    // quickMenu.style.top = (window.scrollY+topPosition)+'px';

                    console.log( window.scrollY + topPosition );

                }
                quickMenuAnimationFn();


                // 윈도우 스크롤 이벤트 리스너 등록                
                window.addEventListener('scroll', function(){
                    quickMenuAnimationFn(); //스크롤시 퀵메뉴 애니메이션 함수 호출
                });

                
        }
    }

    quickMenu.init();

})();
//quickMenu.js