<?php
	header('content-type:text/html;charset=utf-8');
	try{
		$link = new PDO('mysql:host=localhost;port=3306;dbname=repair','root','1258012580Aa/');
		$link->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	}catch(PDOException $e){
		die('数据库连接出错:'.$e->getMessage());
	}
	$sql = 'select * from login_administrator where no_administrator=? and pass_administrator=?';
	try{
			$stmt = $link->prepare($sql);
			$stmt->execute([$_GET['no_administrator'],$_GET['pass_administrator']]);
			if($stmt->rowCount() != 1){
				echo "帐号或密码不正确！";
			}else{
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				$_SESSION['no_administrator'] = $row['no_administrator'];
				$_SESSION['pass_administrator'] = $row['pass_administrator'];

				echo json_encode($row);
			}
		}catch(PDOException $e){
			die('登录失败:'.$e->getMessage());
	}
?>

