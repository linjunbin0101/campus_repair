<?php
    $host='150.158.174.151';
    $port='3306';
    $user ='root';
    $pass ='1258012580Aa/';
    $bdname ='repair';
	$con = mysqli_connect($host, $user, $pass, $bdname , $port); //��������																										
if(!$con)
{
	die('��������ʧ��:' . mysqli_connect_error());
}
else
{  
	mysqli_query($con,'set names "utf8"'); 
    mysqli_select_db($con,$bdname);  //ѡ����ʹ�õ����ݿ�
 
   if (!empty($_POST['id_pages'] && $_POST['now_pages'] && $_POST['name_pages'] && $_POST['no_pages'] && $_POST['phone_pages'] && $_POST['addr_pages'] && $_POST['detail_pages'] && $_POST['grade_pages'] && $_POST['time_pages']))
   {
	   $sql="INSERT INTO addpages (id_pages,now_pages,name_pages,no_pages,phone_pages,addr_pages,detail_pages,grade_pages,time_pages) VALUES ('$_POST[id_pages]','$_POST[now_pages]' ,'$_POST[name_pages]' ,'$_POST[no_pages]' ,'$_POST[phone_pages]' ,'$_POST[addr_pages]' ,'$_POST[detail_pages]' ,'$_POST[grade_pages]' ,'$_POST[time_pages]')";	
	   $result = mysqli_query($con,$sql);
	   if (!$result)
	     {  
	   	die('Error: ' . mysqli_connect_error());
	     }
  } 
  $sql1 = "SELECT * FROM addpages";
  $result1 = mysqli_query($con,$sql1);
  $data= $result1->fetch_all(PDO::FETCH_LAZY);  
  echo json_encode($data);//��json��ʽ����
}  
?>

