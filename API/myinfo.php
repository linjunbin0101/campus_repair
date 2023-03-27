<?php
	header('content-type:text/html;charset=utf-8');
	try{
		$link = new PDO('mysql:host=localhost;port=3306;dbname=repair','root','1258012580Aa/');
		$link->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	}catch(PDOException $e){
		die('数据库连接出错:'.$e->getMessage());
	}
	$sql = 'select * from login_repairer where no_repairer=?';
	try{
			$stmt = $link->prepare($sql);
			$stmt->execute([$_GET['no_repairer']]);
			if($stmt->rowCount() != 1){
				echo "账户不存在！";
			}else{
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				$_SESSION['name_repairer'] = $row['name_repairer'];
				$_SESSION['no_repairer'] = $row['no_repairer'];
				$_SESSION['sex_repairer'] = $row['sex_repairer'];
				$_SESSION['pass_repairer'] = $row['pass_repairer'];
				$_SESSION['phone_repairer'] = $row['phone_repairer'];
				echo json_encode($row);
			}
		}catch(PDOException $e){
			die('信息不全:'.$e->getMessage());
	}
?>

