<?php
	include "conn.php";
	if(isset($_POST['tel'])&&isset($_POST['pass'])){
		$tel=$_POST['tel'];
		$pass=md5($_POST['pass']);
		$query="select * from user where tel='$tel' and password='$pass'";
		$result=mysql_query($query);
		if(mysql_fetch_array($result)){
			echo true;
		}else{
			echo false;
		}
	}
?>
