<?php
 date_default_timezone_set("Asia/Shanghai"); //����ʱ��
$code = $_FILES['file'];//��ȡС��������ͼƬ
if(is_uploaded_file($_FILES['file']['tmp_name'])) {  
    //���ļ�ת�浽��ϣ����Ŀ¼����Ҫʹ��copy������  
    $uploaded_file=$_FILES['file']['tmp_name'];  
    $username = "addpages";
    //���Ǹ�ÿ���û���̬�Ĵ���һ���ļ���  
    $user_path=$_SERVER['DOCUMENT_ROOT']."/repair/".$username;
    //�жϸ��û��ļ����Ƿ��Ѿ�������ļ���  
    if(!file_exists($user_path)) {  
        //mkdir($user_path); 
        mkdir($user_path,0777,true); 
    }  
 
    //$move_to_file=$user_path."/".$_FILES['file']['name'];  
    $file_true_name=$_FILES['file']['name'];  
    $move_to_file=$user_path."/".time().rand(1,1000)."-".date("Y-m-d").substr($file_true_name,strrpos($file_true_name,"."));//strrops($file_true,".")���ҡ�.�����ַ��������һ�γ��ֵ�λ��  
    //echo "$uploaded_file   $move_to_file";  
    if(move_uploaded_file($uploaded_file,iconv("utf-8","gb2312",$move_to_file))) {  
        echo $_FILES['file']['name']."--success--".date("Y-m-d H:i:sa"); 
 
    } else {  
        echo "fail--".date("Y-m-d H:i:sa"); 
 
    }  
} else {  
    echo "fail--".date("Y-m-d H:i:sa");  
}  
 
 
?>