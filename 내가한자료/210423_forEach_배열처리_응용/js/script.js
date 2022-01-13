(function(){    //ECMA SCRIPT 5 버전
    
    var obj = {
        init: function(){
            this.foreachFn();
        },
        foreachFn: function(){
            //체크박스 배열처리
            var chkAll = document.querySelector("#chkAll");    //1개
            var chk = document.querySelectorAll("input[name='chk']");   //10개
            
                
               // console.log( chk[0].value );
               // console.log( chk[1].value );
               // console.log( chk[2].value );
               // console.log( chk[3].value );
                

                //체크박스 열개 중 선택된거에 이벤트
                chk.forEach(function(el,idx){
                    chk[idx].addEventListener('change', function(){ // change이벤트
                        // 0 ~ 9 여러개중 현재 선택된 요소 this 
                        // 참 거짓 checked 선택된것
                       console.log( this.checked );
                       if( this.checked == true ){
                             console.log(  chk[idx].value ); 
                       }
                       else{
                             console.log('선택', idx, this.value);
                        }
                    });
                });






                //모두선택 체크박스 맨위에 있는 체크박스
                chkAll.addEventListener('change', function(){
                    var that = this;    //클릭 체인지 된것 이것
                    chk.forEach(function(el,idx){   // 0 ~ 9 까지 10개
                        chk[idx].checked =  that.checked;    // true or false;
                        //console.log(  that.checked );    //선택되면 true 아니면 false;


                        if(chk[idx].checked == true){
                        //if(chk[idx].checked ){ // 참이면 true == 1, false == 0 
                            console.log(  chk[idx].value );    //선택되면 true 아니면 false;
                        }   
                    });
                });
        }
    }

    obj.init();
    
})();