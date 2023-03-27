<?php
	header('content-type:text/html;charset=utf-8');
	try{
		$link = new PDO('mysql:host=localhost;port=3306;dbname=repair','root','1258012580Aa/');
		$link->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	}catch(PDOException $e){
		die('数据库连接出错:'.$e->getMessage());
	}
	$sql = 'select * from login_maintainer where no_maintainer=? and pass_maintainer=?';
	try{
			$stmt = $link->prepare($sql);
			$stmt->execute([$_GET['no_maintainer'],$_GET['pass_maintainer']]);
			if($stmt->rowCount() != 1){
				echo "工号或密码不正确！";
			}else{
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				$_SESSION['no_maintainer'] = $row['no_maintainer'];
				$_SESSION['pass_maintainer'] = $row['pass_maintainer'];
				$_SESSION['name_maintainer'] = $row['name_maintainer'];
				$_SESSION['phone_maintainer'] = $row['phone_maintainer'];
				echo json_encode($row);
			}
		}catch(PDOException $e){
			die('登录错误:'.$e->getMessage());
	}
?>

