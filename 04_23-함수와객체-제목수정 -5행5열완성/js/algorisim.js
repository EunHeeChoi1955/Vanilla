(function(){
    
    //객체
    var algorisim = {
            init:function(){
                this.domNode();
                this.algo1();
                this.algo2();
                this.algo3();
                this.algo4();
                this.algo5();
                this.algo6();
                this.algo7();
                this.algo8();
            },
            domNode:function(){
               var $doc  = document;
               var $body = document.body;

                   // DOM Node 개념 이해하기 
                   console.log( '$doc ',   $doc );
                   console.log( '$body ',  $body );
                   console.log( '$body.nodeName ',  $body.nodeName );
                   console.log( '$body.nodeType ',  $body.nodeType );
                   console.log( '$body.nodeValue  ',  $body.nodeValue );
                   console.log( '$body.childElementCount  ',  $body.childElementCount );
                   console.log( '$body.childNodes  ',  $body.childNodes );
                   console.log( '$body.children  ',  $body.children );
                   console.log( '$body.children[0]  ',  $body.children[0] );
                   console.log( '$body.children[1]  ',  $body.children[1] );


                   //요소 생성(Create)
                   //body 요소 안에 섹션 요소 만들기
                   //1-1. 그리고 섹션 요소 안에 헤딩(타이틀)요소 만들기
                   //1-2. 섹션요소에 아이디 설정하기
                   //1-3. 만들어진 요소를 body요소에 삽입하기
                   //[예] <section id='section1'></section>
                   
                   
                   //2-1. 헤딩(h2)요소 생성
                   //2-2. 헤딩(h2)에 텍스트(제목) 넣기
                   //2-3. 생성된 헤딩요소 섹션에 자식요소 넣기


                   //테이블(table,tr,td) 요소 만들기
                   //3-1. table 요소 생성
                   //3-2. 생성된 테이블요소 섹션에 자식요소로 넣기


                   //4-1 tr요소 생성
                   //4-2 생성된 tr요소를 table 자식요소로 넣기
                   

                   //5-1 td요소 생성
                   //5-2 생성된 td요소를 tr 자식요소로 넣기
                   


                
                   //1. section : createElement();
                   for(var i=0; i<10; i++){
                        var sectionTag = document.createElement('section'); //섹션요소 생성
                            sectionTag.id = 'section' + (i+1);
                            $body.appendChild(sectionTag);
                   }


                   //2. h2 : createElement();
                   var section = document.querySelectorAll('section'); //10개[0~9]
                   for(var i=0; i<10; i++){                    
                        var h2Tag = document.createElement('h2'); //헤딩요소 생성
                            h2Tag.textContent = '5행 5열 행열 [Matrix] No. '+ (i+1); 
                            section[i].appendChild(h2Tag);
                   }


                   //3. table : createElement();
                   for(var i=0; i<10; i++){ 
                        var tableTag = document.createElement('table');
                            section[i].appendChild(tableTag);
                   }


                   //3. tr : createElement();                   
                    var table = document.querySelectorAll('table');
                    for(var i=0; i<10; i++){     
                        for(var j=0; j<5; j++){     
                            var trTag = document.createElement('tr'); 
                                table[i].appendChild(trTag);
                        }
                    }
                  

                   //4. td : createElement();                       
                        for(var i=0; i<10; i++){ //섹션별 table
                            for(var j=0; j<5; j++){ //tr
                                for(var k=0; k<5; k++){ //tr
                                    var tdTag = document.createElement('td');
                                        table[i].children[j].appendChild(tdTag);
                                }
                            }
                        }
                        
            },
            algo1:function(){
                //알고리즘 삼각형 줄이 증가하면서 칸도 증가하는 삼각형 알고리즘
                //셕션1 테이블1 안에 tr(행) 안에 td(열) 채우기
                var cnt = 0;
                var table = document.querySelector('#section1 table');

                    for(var i=0; i<5; i++){
                        for(var j=0; j<=i; j++){
                            cnt++;
                            console.log(i,j);
                            table.children[i].children[j].textContent = cnt;
                        }
                    }

                    // table.children[0].children[0].textContent = 1;
                    // table.children[0].children[1].textContent = 2;
                    // table.children[0].children[2].textContent = 3;
                    // table.children[0].children[3].textContent = 4;
                    // table.children[0].children[4].textContent = 5;


            },
            algo2:function(){
                var cnt = 0;
                var table = document.querySelector('#section2 table');

                    for(var i=0; i<5; i++){
                        for(var j=4-i; j<5; j++){
                            cnt++;
                            table.children[i].children[j].textContent = cnt;
                        }
                    }
            },
            algo3:function(){
                var cnt = 0;
                var table = document.querySelector('#section3 table');

                    for(var i=0; i<5; i++){
                        for(var j=0; j<5-i; j++){
                            cnt++;
                            table.children[i].children[j].textContent = cnt;
                        }
                    }
            },
            algo4:function(){
                var cnt = 0;
                var table = document.querySelector('#section4 table');

                    for(var i=0; i<5; i++){
                        for(var j=0+i; j<5; j++){
                            cnt++;
                            table.children[i].children[j].textContent = cnt;
                        }
                    }
            },
            algo5:function(){
                var cnt = 0;
                var table = document.querySelector('#section5 table');


                    for(var i=0; i<5; i++){
                        if(i<=2){
                            for(var j=2-i; j<=2+i; j++){ //2
                                cnt++;
                                table.children[i].children[j].textContent = cnt;
                            }    
                        }
                        else{
                            for(var j=i-2; j<=6-i; j++){ //1  3, 2, 2
                                cnt++;
                                table.children[i].children[j].textContent = cnt;
                            }  
                        }
                    }
            },
            algo6:function(){  //ㄹ 모양
                var cnt = 0;
                var table = document.querySelector('#section6 table');
                    for(var i=0; i<=4; i++){                    
                        if( i%2 == 0 ){
                            //행번호를 2로 나누어 나머지가 0이면 열증가 우측
                            for(var j=0; j<=4; j++){                            
                                cnt++;   
                                table.children[i].children[j].textContent = cnt;
                            }
                        }                        
                        // if( i%2 != 0 ) {
                        else {
                            //행번호를 2로 나누어 나머지가 0이아니면면 열감소 좌측으로
                            for(var j=4; j>=0; j--){
                                cnt++;   
                                table.children[i].children[j].textContent = cnt;
                            }
                        }
                    }
            },
            algo7:function(){
                var cnt = 0;
                var table = document.querySelector('#section7 table');

                    for(var i=0; i<=4; i++){
                        if(i<=2){
                            for(var j=i; j<=4-i; j++){
                                cnt++;
                                table.children[i].children[j].textContent = cnt; 
                            }    
                        }
                        else{
                            for(var j=4-i; j<=i; j++){
                                cnt++;
                                table.children[i].children[j].textContent = cnt; 
                            }   
                        }

                    }

            },
            algo8:function(){
                var section = document.querySelectorAll('section'); //section ~ 10개
                    //객체배열처리
                    /*
                    배열요소변수.forEach(function(요소, 인덱스번호, 배열객체){

                    });
                    */
                    // section.forEach(function(element, index, array){
                    //     console.log('element : ', element);
                    //     console.log('index : ', index);
                    //     console.log('array : ', array);
                    // });

                
                var a = [0,1,2,3,4,5,6,7,8,9]; //배열값
                    
                    a.forEach(function(el,idx){ //0 ~ 9
                        console.log('a 배열값 ',  a[idx] ); //배열 값을 인덱스 별로 출력
                    });


                    console.log('a 배열값 ',  a[0] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[1] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[2] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[3] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[4] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[5] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[6] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[7] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[8] ); //배열 값을 인덱스 별로 출력
                    console.log('a 배열값 ',  a[9] ); //배열 값을 인덱스 별로 출력

            }

    } //Object() 끝

    algorisim.init();

})();