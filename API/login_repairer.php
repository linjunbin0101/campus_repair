<?php
	header('content-type:text/html;charset=utf-8');
	try{
		$link = new PDO('mysql:host=localhost;port=3306;dbname=repair','root','1258012580Aa/');
		$link->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	}catch(PDOException $e){
		die('数据库连接出错:'.$e->getMessage());
	}
	$sql = 'select * from login_repairer where no_repairer=? and pass_repairer=?';
	try{
			$stmt = $link->prepare($sql);
			$stmt->execute([$_GET['no_repairer'],$_GET['pass_repairer']]);
			if($stmt->rowCount() != 1){
				echo "学号或密码不正确！";
			}else{
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				$_SESSION['no_repairer'] = $row['no_repairer'];
				$_SESSION['pass_repairer'] = $row['pass_repairer'];
				$_SESSION['name_repairer'] = $row['name_repairer'];
				$_SESSION['phone_repairer'] = $row['phone_repairer'];

				echo json_encode($row);
			}
		}catch(PDOException $e){
			die('登录失败:'.$e->getMessage());
	}
?>

