<?php
	include "conn.php";
	
	$result=mysql_query("select * from gools");
	
	$goolslist=array();
	
	for ($i=0; $i < mysql_num_rows($result); $i++) { 
		$goolslist[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}

	echo json_encode($goolslist);
?>