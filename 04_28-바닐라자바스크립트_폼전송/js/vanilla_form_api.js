(function(){ //ECMA Script 5

    var formApi = {
        init(){
           this.request(); 
        },
        request(){
            
            let irum      = document.querySelector('#irum');
            let tel       = document.querySelector('#tel');
            let email     = document.querySelector('#email');
            let submitBtn = document.querySelector('#submitBtn');
            let mailForm = document.querySelector('#mailForm');


                //전송 버튼 클릭 이벤트
                submitBtn.addEventListener('click', function(event){
                    event.preventDefault(); //서브밋 버튼의 원래의 기능을 삭제
                    //유효성 검사
                    //이름이 빈값은 허용 안함
                    if( irum.value =='' ){
                        alert('이름을 입력하세요!');
                        return false;
                    }
                    //전화번호 빈값은 허용 안함
                    if( tel.value =='' ){
                        alert('전화번호 입력하세요!');
                        return false;
                    }

                    //이메일은 반드시 빈값은 허용 안함.
                    //이메일은 반드시 '@' 특수자 포함 그리고 '.' 가 포함 되어야함.
                    if( email.value =='' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
                        if( email.value =='' ){
                            alert('이메일 입력 빈값 입니다!');
                        }
                        if( email.value.indexOf('@') == -1 ){
                            alert('이메일 입력  @ 특수 문자가 없습니다.');
                        }
                        if( email.value.indexOf('.') == -1 ){
                            alert('이메일 입력 . 마침표가 없습니다.');
                        }
                        
                        return false;
                    }

                    //전송
                    mailForm.submit();

                });


        }
    }

    formApi.init();
        
})();