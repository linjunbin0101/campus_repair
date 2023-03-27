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
 
//   if (true)
//   {
// 	   $sql="SELECT * from  addpages where no_pages = '$_GET[no_pages]' ";	
// 	   $result = mysqli_query($con,$sql);
// 	   if (!$result)
// 	     {  
// 	   	die('Error: ' . mysqli_connect_error());
// 	     }
//   } 
  $sql1 = "SELECT * FROM repairingpages where name_maintainer = '$_GET[name_maintainer]'";
  $result1 = mysqli_query($con,$sql1);
  $data= $result1->fetch_all(PDO::FETCH_LAZY);  
  echo json_encode($data);//以json形式返回
}  
?>