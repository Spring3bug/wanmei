<?php
	include "conn.php";
	if(isset($_POST['tel'])){
		$tel=$_POST['tel'];
		$query="select * from user where tel='$tel'";
		$result=mysql_query($query);
		if(mysql_fetch_array($result)){
			echo 'false';
		}else{
			echo 'true';
		}
	}
	
	if(isset($_POST['submit']) && $_POST['submit']=="免费注册通行证"){
		$tel=$_POST['tel'];	
		$user=$_POST['username'];
		$pass=md5($_POST['password']);
		$uid=$_POST['userid'];	
		//添加语句
		$query="insert user(sid,tel,username,password,uid,regdate) values(null,'$tel','$user','$pass','$uid',NOW())";
		mysql_query($query);
		header('location:http://10.31.155.108/wanmei/src/login.html');//页面的跳转
	}
?>