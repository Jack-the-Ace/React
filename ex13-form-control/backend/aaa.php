<?php
    header('Content-Type:text/plain; charset=utf-8');

    $title= $_GET['title'];
    $message= $_GET['msg'];

    echo "[ $title : $message ] 데이터를 처리했습니다.";
?>