<?php
    $host='150.158.174.151';
    $port='3306';
    $user ='root';
    $pass ='1258012580Aa/';
    $bdname ='repair';
	$con = mysqli_connect($host, $user, $pass, $bdname , $port); //建立连接																										
if(!$con)
{
	die('建立连接失败:' . mysqli_connect_error());
}
else
{  
	mysqli_query($con,'set names "utf8"'); 
    mysqli_select_db($con,$bdname);  //选择需使用的数据库
 
   if (!empty($_POST['id_pages']))
   {
	   $sql="INSERT INTO repairingpages (id_pages,name_maintainer,phone_maintainer,name_pages,phone_pages,now_pages,addr_pages,detail_pages,grade_pages,time_pages,add_maintainer,finish_maintainer) VALUES ('$_POST[id_pages]' ,'$_POST[name_maintainer]','$_POST[phone_maintainer]','$_POST[name_pages]' ,'$_POST[phone_pages]','$_POST[now_pages]' ,'$_POST[addr_pages]' ,'$_POST[detail_pages]' ,'$_POST[grade_pages]' ,'$_POST[time_pages]','$_POST[add_maintainer]','$_POST[finish_maintainer]')";	
	   $result = mysqli_query($con,$sql);
	   if (!$result)
	     {  
	   	die('Error: ' . mysqli_connect_error());
	     }
  } 
  $sql1 = "SELECT * FROM repairingpages";
  $result1 = mysqli_query($con,$sql1);
  $data= $result1->fetch_all(PDO::FETCH_LAZY);  
  echo json_encode($data);//以json形式返回
}  
?>
