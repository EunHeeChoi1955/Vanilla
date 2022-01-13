<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>폼 전송 Response API</title>
    <link rel="stylesheet" href="./css/style.css">

</head>
<body>
    
    <?php
        $irum  = $_POST['irum']; //HTML 입력 폼에서 name 속성 값을 가져온다.
        $tel   = $_POST['tel'];
        $email = $_POST['email'];

        echo '<table>';

        echo '<tr>';
        echo '<th>이름</th>';            
        echo '<th>전화번호</th>';            
        echo '<th>이메일</th>';            
        echo '</tr>';

        echo '<tr>';
        echo '<td>'.$irum.'</td>';            
        echo '<td>'.$tel.'</td>';            
        echo '<td>'.$email.'</td>';                     
        echo '</tr>';

        echo '</table>';
        echo '<button class="back" onclick="javascript: history.go(-1)">이전페이지</button>';
        // echo '<button class="back" onclick="javascript: history.back()">이전페이지</button>';

    ?>

</body>
</html>


