(function(){ //ECMA Script 5

    var formApi = {
        init(){
           this.request(); 
        },
        request(){
                //전송 버튼 클릭 이벤트
                submitBtn.addEventListener('click', function(event){

                    let irum      = document.querySelector('#irum').value;
                    let tel       = document.querySelector('#tel').value;
                    let email     = document.querySelector('#email').value;
                    let submitBtn = document.querySelector('#submitBtn');
                    let mailForm = document.querySelector('#mailForm');

                    event.preventDefault(); //서브밋 버튼의 원래의 기능을 삭제
                    //유효성 검사
                    //이름이 빈값은 허용 안함
                    //정규 표현식 이름 : 한글, 영문만 사용 
                    //첫글자 끝글자 안에 한글 영문 입력 사용 그리고 반드시 입력(빈칸은 허용안함)
                    // var irumRegExp = /^[D]+$/g; //숫자제외
                    // var irumRegExp = /^[^0-9]+$/g; //숫자제외
                    // var irumRegExp = /^[0-9]+$/g; //숫자만                    
                    var irumRegExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z0-9]+$/g;
                    var answer = null;
                        // 결과(답) = RegExp표현식.test( 폼 이름 입력상자값 );    
                        answer = irumRegExp.test( irum );
                        // console.log( '이름 검증 정규표현식 결과 : ' , answer );

                    if( answer === false ){
                        // alert('이름을 입력하세요!');
                        return false;
                    }
                    //전화번호 빈값은 허용 안함
                    //010-7942-5305
                    //01079425305
                    //13글자 이내로 입력하고 반드시 앞3글자뒤- 4글자 - 4글자


                    // console.log('tel ', tel );
                    //배열값이 아니면 반복처리 못한다.                        
                    // tel.forEach(function(el,idx){
                    //     // console.log('전화번호 내용 ',  idx, el );
                    // })

                    //이러한 번거로운 또는 까다로운 유효성 검사에서는 
                    //정규 표현식을 사용한다.
                    // 예] 010-7942-5305
                    // 전화번호의 입력 규칙 정한다.
                    // 정해진 규칙에 어긋나면 오류 발생(점검 TEST)
                    // 정규 표현식 규칙으로 변수 설정
                    // 양쪽 끝은 반드시 슬래쉬 사용 / ~ /
                    // 시작문자는 ^ 
                    // 끝나는 문자 $
                    // 전체 검색 /^ ~ $/g
                    // \역슬래쉬로 구분문자 시작학소 숫자 Digit 3글자이내의 범위{} \d{3}
                    // 3글자 또는 4글자 인경우의 범위 지정 방식 \d{3,4}
                    // var telExp  = /^ 숫자3자 - 숫자3,4자 - 숫자4자 $/;
                    var telExp  = /^\d{3}-\d{3,4}-\d{4}$/; //정규 표현식 (RegExp) 휴대폰
                    // var telExp  = /^\d{2,3}-\d{3,4}-\d{4}$/; //정규 표현식 (RegExp) 집전화
                    // var telExp  = /^\d{6}-\d{7}$/; //정규 표현식 (RegExp) 주민등록 번호
                    var result = null; //빈값
                    // var telInput  = '010-794-5305';   테스트 점검용 
                    // var result;  //Undefined  정의가 안된것
                   
                        //비교 테스트(검증)
                        // 결과 = 정규표현식전화번호표현식변수.test(전화번호문자열)
                        // result = telExp.test( telInput );
                        
                        // 맞으면 true 반환(return)
                        // 틀리면 false 반환(return)
                        // console.log('전화번호[010-7942-5305] 점검 정규표현식 결과 : ', result );

                        result = telExp.test( tel ); //입력값 점검

                        if( result === false ){
                            // alert('전화번호 규칙은 12~13자이내로 -표[010-794-5305] 사용 입력하세요!');
                            return false;
                        }










                    // console.log( " email.indexOf('@') " , email.indexOf('@') ); //'@' 특수문자 위치 인덱스값
                    // console.log( " email.search('@') ", email.search('@') ); //'@' 특수문자 위치 인덱스값
                   
                    // console.log( " email.indexOf('.') " , email.indexOf('.') ); //'.' 특수문자 위치 인덱스값
                    // console.log( " email.search('.') ", email.search('.') ); //'.' 특수문자 위치 인덱스값





                    //이메일은 반드시 빈값은 허용 안함.
                    //이메일은 반드시 '@' 특수자 포함 그리고 '.' 가 포함 되어야함.
                    //반드시 영문 숫자 특수문자 _ - . @
                    
                    // 예] moonjong2@naver.com
                    // 예] moon_jong@naver.com
                    // 예] moon.jong3@naver.com
                    // 예] moon-jong@naver.com
                    // 예] moon-jong@tjoeun_jo9b.com
                    // 예] moon-jong@tjoeun-job.com
                    // 예] moon-jong@tjoeun.job.com
                    // 예] moon-jong@yahoo.co.kr
                    // 1. 첫글자는 반드시 영문대소문자로 시작하고
                    // 2. 첫글자또는 첫문자열 뒤에는 특수문자 _-\.              
                    //    [* 마침표는 \. 이스케이프문자로 표기]
                    //    특수문자는 1글자를 쓰거나 안쓰거나 ? 사용 
                    //    특수문자뒤에 글자는 영문소문자 대문자 숫자 없을 수 있고
                    //    있을수 있다.(0~여러자가능)
                    // 3. 마지막은 영대소문자를 2자~6자사이로 입력    
                    //정규 표현식 이메일 지정
                    // emailRegExp = 
                    //               /^[a-zA-Z]+           //시작문자는 반드시 영대소문자로 시작
                    //               ([-_\.]?[a-zA-Z0-9]*) //특수문자와 영숫자 올수도 안올수 있다.
                    //               @                     //골뱅이문자(앳at)
                    //               [a-zA-Z0-9]+
                    //               ([-_\.]?[a-zA-Z0-9]*) //특수문자와 영숫자 올수도 안올수 있다.
                    //               \.                    //마침표
                    //               [a-zA-Z]{2,6}$/gi;    //마지막은 영대소문자를 2자~6자사이로 입력 



                    
                        emailRegExp = /^[\w]+([-_\.]?[\w\d]*)@[\w\d]+([-_\.]?[\w\d]*)\.[\w]{2,6}$/gi; //전체 영대소문자 구별없음
                        // emailRegExp = /^[a-zA-Z]+([-_\.]?[a-zA-Z0-9]*)@[a-zA-Z0-9]+([-_\.]?[a-zA-Z0-9]*)\.[a-zA-Z]{2,6}$/gi;
                        // 정규 표현식 검증(Test 메서드)
                        resultEmail = emailRegExp.test( email );

                        console.log( email );
                        //결과는 이메일 검증 참인 경우 true.  
                        //       이메일 검증 참인 경우 false 출력 한다.
                        console.log( ' emailRegExp.test( email ) 검증 결과는 :  ',  resultEmail);

                    //moonjong@naver.co.kr
                    // var emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/g; //미국 문화권
                    // var emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]*.[a-zA-Z]+$/g;  //미국을 제외한 국가들

                    // if( email =='' || email.indexOf('@') == -1 || email.indexOf('.') == -1 ){
                    //     if( email.value =='' ){
                    //         alert('이메일 입력 빈값 입니다!');
                    //     }
                    //     if( email.value.indexOf('@') == -1 ){
                    //         alert('이메일 입력  @ 특수 문자가 없습니다.');
                    //     }
                    //     if( email.value.indexOf('.') == -1 ){
                    //         alert('이메일 입력 . 마침표가 없습니다.');
                    //     }
                        
                    //     return false;
                    // }

                    //전송
                   // mailForm.submit();

                });


        }
    }

    formApi.init();
        
})();